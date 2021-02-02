import { Component, NgZone, OnDestroy, OnInit } from "@angular/core";
import { SharedService } from "app/services/shared.service";
import { Subject } from "app/models/subject";
import { RetroConfigration } from "app/models/retro-configuration";
import { RetroConfigurationService } from "app/services/retro-configuration";
import { first } from "rxjs/operators";
import { UserService } from "app/services/user.service";
import { SubjectsService } from "app/services/subject.service";
import { ChatService } from "app/services/chat.service";
import { Retro } from "app/models/retro";
import { UserRight } from "app/models/userRight";
import { environment } from "../../../environments/environment";
import { ActivatedRoute, Router } from "@angular/router";
import { TemplateService } from "app/services/template.service";
import { GroupFilter } from "app/models/dto/group-filter";
import { GroupService } from "app/services/group.service";
import { GroupDto } from "app/models/dto/group-dto";
import { Group } from "app/models/group";
import { JsonpClientBackend } from "@angular/common/http";
import swal from "sweetalert2";
import { AlertifyService } from "app/services/alertify.service";

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
  retroId: string = "";
  inviteLink: string = "";
  isLeader: boolean = false;
  currentRetro: Retro = new Retro();
  config: RetroConfigration = new RetroConfigration();
  selectSubject: Subject = null;
  isShow: boolean = false;
  isReport: boolean = false;
  isVote: boolean = false;
  isCategorized: boolean = false;
  isBrainstorm: boolean = false;
  isSelectSubject: boolean = false;
  isSelectTemplate: boolean = false;
  isComment: boolean = false;
  isUser: boolean = false;
  retroRights: UserRight = new UserRight();
  editmode: boolean = false;
  groups: Array<GroupDto> = [];
  currentTab: string = '.subject';
  retroRight: RetroConfigration = new RetroConfigration();

  constructor(
    private sharedService: SharedService,
    private subjectService: SubjectsService,
    private authService: UserService,
    private groupService: GroupService,
    private configService: RetroConfigurationService,
    private chatService: ChatService,
    private alertifyService: AlertifyService,
    private route: ActivatedRoute,
    private router: Router,
    private _ngZone: NgZone,
  ) {


  

    this.sharedService.retroRight.subscribe((right: RetroConfigration) => {
      this.retroRight = right;
    });

    this.sharedService.tabSource.subscribe((tab: string) => {
      this.currentTab = tab ? tab : '.select-subject';

      if (".idea-archive" == tab) {
        this.isReport = true;
        this.isShow = false;
      }
      else {
        this.isReport = false;
        this.isShow = true;

      }


      if (".select-subject" == tab) {
        this.isShow = false;
        this.isSelectSubject = true;
      }
      else {
        this.isSelectSubject = false;
        this.isShow = true;

      }

      if (".select-template" == tab) {
        this.isSelectTemplate = true;
      }
      else {
        this.isSelectTemplate = false;
      }

      if (".brainstorm" == tab) {
        this.isBrainstorm = true;

      }
      else {
        this.isBrainstorm = false;

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

      if (".categorize" == tab) {
        this.isCategorized = true;
      }
      else {
        this.isCategorized = false;
      }

      if (".idea-archive" == tab) {
        if (this.authService.hasRole("Leader")) {
          this.getFilterGroup();
        }
      }








    });




    this.sharedService.selectSubject.subscribe((subject: any) => {

      this.selectSubject = subject;
    });

    this.sharedService.currentRetro.subscribe((retro: any) => {
      if (retro) {
        this.currentRetro = retro;
        this.inviteLink = environment.appUrl + "member/" + this.currentRetro.id;
      }
      else{
        this.router.navigate(["/retro-start"])
      }
    });





    this.chatService.userOnline();

    this.sharedService.isShowSubject.subscribe((isShow: any) => {
      this.isShow = isShow;
    });
    this.subscribeToCurrentRetroEvents()
    this.subscribeToSelectedSubjectEvents();
    this.allUserRightsToEvents();



    let routeId = this.route.snapshot.params.id;
    this.retroId = routeId;
    if (this.authService.hasRole("Member") && routeId != undefined) {
      this.getRetroSubject(routeId);
      this.getRetroRight(routeId);
      this.getRetro(routeId);

      this.getCurrentRetroStep(routeId)
    }
  }

  clickTab(tab: string) {
    this.currentTab = '.' + tab;
    console.log("retro-tab",tab);

    if (".comments" ==  this.currentTab) {
      this.sharedService.tabSource.next(".comments");
      if (this.authService.hasRole("Leader")) {

        let retro = new Retro();
        retro.id = this.retroRight.retroId;
        retro.state = 2;
        retro.currentPage = "/comments"
        this.chatService.setCurrentRetro(retro);
      }
    }
    if (".categorize" ==  this.currentTab) {
      this.sharedService.tabSource.next(".categorize");
      if (this.authService.hasRole("Leader")) {

        let retro = new Retro();
        retro.id = this.retroRight.retroId;
        retro.state = 2;
        retro.currentPage = "/categorize"
        this.chatService.setCurrentRetro(retro);
      }


    }
    if (".vote" ==  this.currentTab) {
      this.sharedService.tabSource.next(".vote");
      if (this.authService.hasRole("Leader")) {

        let retro = new Retro();
        retro.id = this.retroRight.retroId;
        retro.state = 2;
        retro.currentPage = "/vote"
        this.chatService.setCurrentRetro(retro);
      }
    }
    if (".idea-archive" ==  this.currentTab) {
      this.sharedService.tabSource.next(".idea-archive");
      if (this.authService.hasRole("Leader")) {

        let retro = new Retro();
        retro.id = this.retroRight.retroId;
        retro.state = 2;
        retro.currentPage = "/idea-archive"
        this.chatService.setCurrentRetro(retro);
      }
    }



    if (".idea-archive" ==  this.currentTab) {
      this.isReport = true;
      this.isShow = false;
    }
    else {
      this.isReport = false;
      this.isShow = true;

    }


    if (".select-subject" ==  this.currentTab) {
      this.isShow = false;
      this.isSelectSubject = true;
    }
    else {
      this.isSelectSubject = false;
      this.isShow = true;

    }

    if (".select-template" ==  this.currentTab) {
      this.isSelectTemplate = true;
    }
    else {
      this.isSelectTemplate = false;
    }

    if (".brainstorm" ==  this.currentTab) {
      this.isBrainstorm = true;

    }
    else {
      this.isBrainstorm = false;

    }

    if (".comments" ==  this.currentTab) {
      this.isComment = true;

    }
    else {
      this.isComment = false;

    }


    if (".vote" ==  this.currentTab) {
      this.isVote = true;
    }
    else {
      this.isVote = false;

    }

    if (".categorize" ==  this.currentTab) {
      this.isCategorized = true;
    }
    else {
      this.isCategorized = false;
    }

    if (".idea-archive" ==  this.currentTab) {
      if (this.authService.hasRole("Leader")) {
        this.getFilterGroup();
      }
    }



  }

  changeTab(tab) {
    console.log("tab", tab);

    $(tab).click();
    $(".tab-progress").find(".nav-item").removeClass("active");


  }

  getFilterGroup() {
    let filter = new GroupFilter();
    filter.companyId = this.authService.currentUserValue.companyId;
    filter.leaderId = this.authService.currentUserValue.userId;
    filter.state = 0;
    this.getAllGroup(filter);
  }

  updateGroup(group: Group) {
    this.groupService
      .update(group)
      .pipe(first())
      .subscribe(
        (res) => {

        });
  }

  getAllGroup(filter) {


    this.groupService
      .getAllGroup(filter)
      .pipe(first())
      .subscribe(
        (res) => {
          this.groups = res;

          if (this.groups.length > 0) {

            this.groups[0].group.state = 2;

            this.updateGroup(this.groups[0].group);
          }



        },
        (error) => {

        }
      );
  }



  ngOnInit(): void {
    this.existUser();




  }

  copyLink(inputElement) {
    inputElement.select();
    document.execCommand('copy');
    inputElement.setSelectionRange(0, 0);

    swal({
      title: "Başarılı bir kopyalandı.",
      position:"center",
      showConfirmButton: false,
      type: "success",
      timer: 2000
    })

  }


  isExistLeader() {

    return this.authService.hasRole("Leader") && this.isShow;
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


  private getRetroSubject(retroId) {
    this.subjectService
      .getRetroSubject(retroId)
      .pipe(first())
      .subscribe(
        (res) => {

          this.selectSubject = res;

          this.sharedService.selectSubjectSetValue(res);
        },
        (error) => {

        });
  }

  private getRetro(retroId) {
    this.configService
      .getCurrentRetro(retroId)
      .pipe(first())
      .subscribe(
        (res) => {

          this.sharedService.messageSourceSetValue(res.templateId);

          this.sharedService.currentRetroSetValue(res);
          this.inviteLink = environment.appUrl + "member/" + retroId;

        },
        (error) => {

        });
  }


  private getRetroRight(retroId) {

    let retro = new Retro();
    retro.id = retroId;
    retro.userId = this.authService.currentUserValue.userId;

    this.configService
      .getUserRight(retro)
      .pipe(first())
      .subscribe(
        (res) => {

          this.sharedService.retroRightSetValue(res);
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
          this.inviteLink = environment.appUrl + "member/" + retro.id;
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
            this.alertifyService.error();
          }
        );
    }
  }
}
