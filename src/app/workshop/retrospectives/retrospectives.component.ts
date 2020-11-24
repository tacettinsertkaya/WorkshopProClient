import { Component, NgZone, OnDestroy, OnInit } from "@angular/core";
import { SharedService } from "app/services/shared.service";
import { Subject } from "app/models/subject";
import { RetroConfigration } from "app/models/retro-configuration";
import { RetroConfigurationService } from "app/services/retro-configuration";
import { first } from "rxjs/operators";
import { UserService } from "app/services/user.service";
import { ChatService } from "app/services/chat.service";
import { Retro } from "app/models/retro";
import { UserRight } from "app/models/userRight";
import { environment } from "../../../environments/environment";
import { ActivatedRoute } from "@angular/router";

declare var $: any;
@Component({
  moduleId: module.id,
  selector: "retro-cmp",
  templateUrl: "retrospectives.component.html",
  styleUrls: ["./retrospectives.component.css"],
})
export class RetrospectivesComponent implements OnInit {
  /**
   *
   */

  inviteLink: string = "";
  isLeader: boolean = false;
  currentRetro: Retro = new Retro();
  config: RetroConfigration = new RetroConfigration();
  selectSubject: Subject = null;
  isShow: boolean = false;
  isReport: boolean = false;
  isVote: boolean = false;
  isComment: boolean = false;
  isUser: boolean = false;
  retroRights: UserRight = new UserRight();
  constructor(
    private sharedService: SharedService,
    private authService: UserService,
    private configService: RetroConfigurationService,
    private chatService: ChatService,
    private route: ActivatedRoute,
    private _ngZone: NgZone,
  ) {
    this.sharedService.tabSource.subscribe((tab: string) => {
      if (".idea-archive" == tab) {
        this.isReport = true;
        this.isShow = false;
      }
      else {
        this.isReport = false;
        this.isShow = true;

      }

      if (".comments" == tab) {
        this.isComment = true;

      }
      else {
        this.isComment = false;

      }


      if (".vote" == tab) {
        this.isVote = true;
      }
      else {
        this.isVote = false;

      }


      $(tab).click();
      $(".tab-progress").find(".nav-item").removeClass("active");



    });

    this.sharedService.selectSubject.subscribe((subject: any) => {

      this.selectSubject = subject;
    });

    this.sharedService.currentRetro.subscribe((retro: any) => {
      this.currentRetro = retro;
      this.inviteLink = environment.appUrl + "login/" + this.currentRetro.id;

    });
    this.chatService.userOnline();

    this.sharedService.isShowSubject.subscribe((isShow: any) => {
      this.isShow = isShow;
    });
    this.subscribeToCurrentRetroEvents()
    this.subscribeToSelectedSubjectEvents();
    this.allUserRightsToEvents();

    let routeId = this.route.snapshot.params.id;
    console.log("params", this.route.snapshot.params);
    console.log("routeId",routeId);

    if (this.authService.hasRole("Member") && routeId != undefined) {
    
      this.getCurrentRetroStep(routeId)
    }
  }

  isExistLeader() {

    return this.authService.hasRole("Leader");
  }


  existUser() {
    this.isUser = this.authService.hasRole("Member");
  }

  private getCurrentRetroStep(retroId) {
    this.configService
      .getCurrentRetroStep(retroId)
      .pipe(first())
      .subscribe(
        (res) => {

          this.sharedService.tabSource.next("." + res.currentPage.replace("/", ""));

        },
        (error) => {

        });
  }

  private allUserRightsToEvents(): void {
    let currentUser = this.authService.currentUserValue;
    this.chatService.allUserRight.subscribe(
      (retro: Array<UserRight>) => {
        this._ngZone.run(() => {

          let userights = retro.filter(p => p.userId == currentUser.userId)[0];

          this.sharedService.retroRight.next(userights);
          this.retroRights = userights;
        });
      }
    );
  }


  private subscribeToCurrentRetroEvents(): void {
    this.chatService.currentRetroReceived.subscribe((retro: Retro) => {
      this._ngZone.run(() => {
        this.sharedService.currentRetro.next(retro);
        if (this.authService.hasRole("Member")) {
          this.sharedService.tabSource.next("." + retro.currentPage.replace("/", ""));
        }
      });
    });
  }

  private subscribeToSelectedSubjectEvents(): void {
    this.chatService.subjectReceived.subscribe((subject: Subject) => {
      this._ngZone.run(() => {


        if (this.authService.hasRole("Member")) {

          this.selectSubject = subject;
          this.isShow = true;
        }

      });
    });
  }


  ngOnInit(): void {
    this.existUser()
  }

  getConfig() {
    let id = localStorage.getItem("config-id");
    if (id != undefined && id != "") {
      this.configService
        .getRetroConfigration(id)
        .pipe(first())
        .subscribe(
          (res) => {
            this.config = res;
          },
          (error) => {
            $.notify(
              {
                icon: "ti-gift",
                message: "İşlem sırasında hata oluştu.",
              },
              {
                type: "danger",
                timer: 4000,
                placement: {
                  from: "top",
                  align: "right",
                },
                template:
                  '<div data-notify="container" class="col-11 col-md-4 alert alert-{0} alert-with-icon" role="alert"><button type="button" aria-hidden="true" class="close" data-notify="dismiss"><i class="nc-icon nc-simple-remove"></i></button><span data-notify="icon" class="nc-icon nc-bell-55"></span> <span data-notify="title">{1}</span> <span data-notify="message">{2}</span><div class="progress" data-notify="progressbar"><div class="progress-bar progress-bar-{0}" role="progressbar" aria-valuenow="0" aria-valuemin="0" aria-valuemax="100" style="width: 0%;"></div></div><a href="{3}" target="{4}" data-notify="url"></a></div>',
              }
            );
          }
        );
    }
  }
}
