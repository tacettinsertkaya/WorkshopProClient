import { Component, NgZone, OnInit } from "@angular/core";
import { SharedService } from "app/services/shared.service";
import { Subject } from "app/models/subject";
import { RetroConfigration } from "app/models/retro-configuration";
import { RetroConfigurationService } from "app/services/retro-configuration";
import { first } from "rxjs/operators";
import { ActivatedRoute, Router } from "@angular/router";
import { UserService } from "app/services/user.service";
import { ChatService } from "app/services/chat.service";
import { Retro } from "app/models/retro";
import { UserRight } from "app/models/userRight";
import { Report } from "app/models/dto/report";
import { CategorizedMessage } from "app/models/dto/categorized-message";
import { GroupService } from "app/services/group.service";
import { GroupDto } from "app/models/dto/group-dto";
import { GroupFilter } from "app/models/dto/group-filter";
import swal from "sweetalert2";
import { CompanyService } from "app/services/company.service";
import { Group } from "app/models/group";
import { AlertifyService } from "app/services/alertify.service";
import { RetroHubService } from "app/services/hub/retro-hub.service";
import { UserHubService } from "app/services/hub/user-hub.service";
import { GuidGenerator } from "app/helpers/guid-generator";

import * as firebase from 'firebase';
import { snapshotToArray } from "app/helpers/firebase-helper";
import { CursorError } from "@angular/compiler/src/ml_parser/lexer";
import { TranslateService } from "@ngx-translate/core";

@Component({
  selector: 'app-retro-start',
  templateUrl: './retro-start.component.html',
  styleUrls: ['./retro-start.component.css']
})
export class RetroStartComponent implements OnInit {

  /**
   *
   */
  currentRetro: Retro = new Retro();
  report = new Report();
  config: RetroConfigration = new RetroConfigration();
  selectSubject: Subject = null;
  isShow: boolean = false;
  retroRight: UserRight = new UserRight();
  isFailed = false;
  isRetroFailed = false;
  categorizedMessages = new Array<CategorizedMessage>();
  groups: Array<GroupDto> = [];

  constructor(
    private sharedService: SharedService,
    private authService: UserService,
    private groupService: GroupService,
    private companyService: CompanyService,
    private configService: RetroConfigurationService,
    private router: Router,
    private retroHubService: RetroHubService,
    private userHubService: UserHubService,
    private alertifyService: AlertifyService,
    private _ngZone: NgZone,
    private route: ActivatedRoute,
    private translate:TranslateService

  ) {

  }

  ngOnInit(): void {
    let id = this.route.snapshot.params.id;
    localStorage.setItem("retro", "");
    let currentLang = this.authService.currentLangValue;
  
  
    if (this.isUser()) {
      this.router.navigate(["/current/subject", id]);
    }

    if (this.isLeader()) {
      this.getFilterGroup();
      this.isCheckCompanyRetroRight();
    }

    
  }

  isUser() {
    return this.authService.hasRole("Member");
  }

  isLeader() {
    return this.authService.hasRole("Leader");
  }

  isCheckFailed() {

    return this.isFailed || this.isRetroFailed;
  }






  isCheckCompanyRetroRight() {
    var userValue = this.authService.currentUserValue;

    this.companyService
      .getCompany(userValue.companyId)
      .pipe(first())
      .subscribe(
        (res) => {
          let company = res;
          if (company && company.retroCount <= 0) {
            this.isRetroFailed = true;
            swal(
              {
                title: 'Uyarı!',
                text: 'Şirketinize ait  retro hakkı bulunmamaktadır.',
                type: 'warning',
                showConfirmButton: false,
                timer: 4000,
                buttonsStyling: false
              }
            )
          }
          else {
            this.isRetroFailed = false;
          }
        });


  }



  getFilterGroup() {
    let filter = new GroupFilter();
    filter.companyId = this.authService.currentUserValue.companyId;
    filter.leaderId = this.authService.currentUserValue.userId;
    filter.state = 0;
    this.getAllGroup(filter);
  }


  getAllGroup(filter) {


    this.groupService
      .getAllGroup(filter)
      .pipe(first())
      .subscribe(
        (res) => {
          this.groups = res;

          if (this.groups.length <= 0) {
            this.isFailed = true;
            swal(
              {
                title: 'Uyarı!',
                text: 'Atanmış bir retro grubunuz bulunmamaktadır.',
                type: 'warning',
                showConfirmButton: false,
                timer: 4000,
                buttonsStyling: false
              }
            )
          }
          else {
            this.isFailed = false;
          }


        },
        (error) => {
          this.alertifyService.error();
        }
      );
  }

  updateGroup(group: Group) {
    this.groupService
      .update(group)
      .pipe(first())
      .subscribe(
        (res) => {

        });
  }


  saveConfig() {
    let currentUser = this.authService.currentUserValue;
    this.config.userId = currentUser.userId;



    this.configService
      .create(this.config)
      .pipe(first())
      .subscribe(
        (res) => {


          this.config = res;


          let currentUser = this.authService.currentUserValue;

          let retro = new Retro();
          retro.id = res.retroId;
          retro.userId = currentUser.userId;
          retro.state = 2;
          retro.currentPage = "/current/subject"

          this.configService.setCurrentRetro(retro);

          this.groups[0].group.state = 1;

          this.updateGroup(this.groups[0].group);

          let generator = new GuidGenerator();



          let current = new Retro();
          current.currentPage = "/current/subject";
          current.id = res.retroId;
          
          this.authService.currentRetroIdSetValue(current.id);

          const newMessage = firebase.default.database().ref('currentpath/').push();
          newMessage.set(current).then(p => {

            this.router.navigate(["/current/subject"])
          });


        },
        (error) => {
          this.alertifyService.error()
        }
      );
  }
}
