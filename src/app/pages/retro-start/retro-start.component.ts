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

  ) {

  }

  ngOnInit(): void {
    let id = this.route.snapshot.params.id;
    localStorage.setItem("retro", "");
    if (this.isUser()) {
      this.router.navigate(["/current/retro/subject", id]);
    }
  }

  isUser() {
    return this.authService.hasRole("Member");
  }

  isLeader() {
    return this.authService.hasRole("Leader");
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

  isCheckFailed() {

    return this.isFailed || this.isRetroFailed;
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

          let userRight = new UserRight();
          userRight.retroId = this.config.retroId;
          userRight.ideaRight = this.config.ideaRight;
          userRight.commentRight = this.config.commentRight;
          userRight.voteRight = this.config.voteRight;
          this.sharedService.retroRightSetValue(userRight);

          let currentUser = this.authService.currentUserValue;
          
          let retro = new Retro();
          retro.id = res.retroId;
          retro.userId = currentUser.userId;
          retro.state = 2;
          retro.currentPage = "/current/subject"

          this.retroHubService.setCurrentRetro(retro);
          this.userHubService.setAllUserRights(retro);

          this.groups[0].group.state = 1;



          this.router.navigate(["/current/subject"]);
        },
        (error) => {
          this.alertifyService.error()
        }
      );
  }
}
