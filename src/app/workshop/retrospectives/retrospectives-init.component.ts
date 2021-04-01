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
import { RetroState } from "app/models/enums/retroState";
import { UserRight } from "app/models/userRight";
import { Report } from "app/models/dto/report";
import { MessageService } from "app/services/message.service";
import { CategorizedMessage } from "app/models/dto/categorized-message";
import { GroupService } from "app/services/group.service";
import { GroupDto } from "app/models/dto/group-dto";
import { GroupFilter } from "app/models/dto/group-filter";
import swal from "sweetalert2";
import { Company } from "app/models/company";
import { CompanyService } from "app/services/company.service";
import { Group } from "app/models/group";
import { AlertifyService } from "app/services/alertify.service";

declare var $: any;
@Component({
  moduleId: module.id,
  selector: "retro-init-cmp",
  templateUrl: "retrospectives-init.component.html",
})
export class RetrospectivesInitComponent implements OnInit {
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
    private chatService: ChatService,
    private alertifyService: AlertifyService,
    private _ngZone: NgZone,
    private route: ActivatedRoute,
    private messageService: MessageService,

  ) {
    this.subscribeToCurrentRetroEvents();
    this.retroConfigurationToEvents();

    this.sharedService.currentRetro.subscribe((retro: any) => {

      this.currentRetro = retro;
    });
  }

  ngOnInit(): void {
    let id = this.route.snapshot.params.id;
    localStorage.setItem("retro", "");
    if (this.isUser()) {
      if (id == undefined)
        this.router.navigate(["/retro/subject"]);
      else
        this.router.navigate(["/retro/subject", id]);
    }


    if (this.isLeader()) {
      this.getFilterGroup();
      this.isCheckCompanyRetroRight();
    }
  }

  isCheckFailed(){

    return this.isFailed || this.isRetroFailed;
  }


  isCheckCompanyRetroRight() {
    var userValue = this.authService.currentUserValue;

    this.companyService
      .getCompany(userValue.companyId)
      .pipe(first())
      .subscribe(
        (res) => {
            let company=res;
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


  isLeader() {
    return this.authService.hasRole("Leader");

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


  isUser() {
    return this.authService.hasRole("Member");
  }

  private subscribeToCurrentRetroEvents(): void {
    this.chatService.currentRetroReceived.subscribe((retro: Retro) => {
      this._ngZone.run(() => {
      
        this.sharedService.currentRetro.next(retro);


        if (this.authService.hasRole("Member"))
          this.sharedService.tabSource.next(retro.currentPage);

      });
    });
  }

  private retroConfigurationToEvents(): void {
    let currentUser = this.authService.currentUserValue;
    this.chatService.retroConfigurationReceived.subscribe(
      (retro: UserRight) => {
        this._ngZone.run(() => {
          if (currentUser.userId == retro.userId)
            this.retroRight = retro;
        });
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
         
        //  this.alertifyService.success()

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
          retro.currentPage = "/retro/subject"
          
          // this.chatService.setCurrentRetro(retro);
          // this.chatService.getAllUserRights(retro);

          this.groups[0].group.state = 1;

          this.updateGroup(this.groups[0].group);


          this.router.navigate(["/retro/subject"]);
        },
        (error) => {
          this.alertifyService.error()
        }
      );
  }
}
