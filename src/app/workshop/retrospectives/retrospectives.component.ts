import { Component, ElementRef, NgZone, OnDestroy, OnInit, ViewChild } from "@angular/core";
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
import * as firebase from 'firebase';
import { snapshotToArray } from "app/helpers/firebase-helper";
import { debug } from "console";


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
  pathIndex: number = 0;
  // @ViewChild('widgetsContent',{static:false,read: ElementRef}) private widgetsContent: any ;

  // @ViewChild('widgetsContent') widgetsContent: ElementRef;

  @ViewChild("widgetsContent") widgetsContent;

  ngAfterViewInit(): void {
    const width = window.innerWidth;
    if (width <= 576)
      this.widgetsContent.nativeElement.scrollLeft += 150;


  }
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


    firebase.default.database().ref('currentRetro/').limitToLast(1).on('value', (resp: any) => {

      var data = snapshotToArray(resp);
      if (data !== undefined) {
        this.sharedService.currentRetro.next(data[0]);
        this.currentRetro = data[0];

        this.sharedService.tabSource.next("." + this.currentRetro.currentPage.replace("/", ""));

        if (this.currentRetro.id) {

          let retro = new Retro();
          retro.id = this.currentRetro.id;
          retro.state = this.currentRetro.state;
          retro.templateId = this.currentRetro.templateId;
          retro.userId = this.currentRetro.userId;
      
          if (!this.sharedService.retroRightValue.id) {
            this.configService.getUserRight(retro).subscribe(right => {
              this.retroRight = right;

              this.sharedService.retroRightSetValue(this.retroRight);
            })
          }

          if (this.currentRetro.currentPage != '/retro')
            this.getRetroSubject(retro.id);
        }
      }
    });






    // this.chatService.getAllUserRights(retro);

    this.sharedService.retroRight.subscribe((right: RetroConfigration) => {
      this.retroRight = this.sharedService.retroRightValue;
    });

    this.sharedService.tabSource.subscribe((tab: string) => {

      this.currentTab = (tab != "" && tab != ".retro") ? tab : '.select-subject';



      if (".idea-archive" == tab) {
        this.pathIndex = 7;
        this.isReport = true;
        this.isShow = false;
      }
      else {
        this.isReport = false;
        this.isShow = true;

      }


      if (".select-subject" == tab) {
        this.pathIndex = 1;

        this.isShow = false;
        this.isSelectSubject = true;
      }
      else {
        this.isSelectSubject = false;
        this.isShow = true;

      }

      if (".select-template" == tab) {
        this.pathIndex = 2;
        this.isSelectTemplate = true;
      }
      else {
        this.isSelectTemplate = false;
      }

      if (".brainstorm" == tab) {
        this.pathIndex = 3;

        this.isBrainstorm = true;

      }
      else {
        this.isBrainstorm = false;

      }

      if (".comments" == tab) {
        this.pathIndex = 5;

        this.isComment = true;

      }
      else {
        this.isComment = false;

      }


      if (".vote" == tab) {
        this.pathIndex = 6;

        this.isVote = true;
      }
      else {
        this.isVote = false;

      }

      if (".categorize" == tab) {
        this.pathIndex = 4;

        this.isCategorized = true;
      }
      else {
        this.isCategorized = false;
      }

      if (".idea-archive" == tab) {
        this.pathIndex = 7;

        if (this.authService.hasRole("Leader")) {
          this.getFilterGroup();
        }
      }





      const width = window.innerWidth;
      if (width <= 576 && this.widgetsContent != undefined)
        this.widgetsContent.nativeElement.scrollLeft += 150;


    });




    this.sharedService.selectSubject.subscribe((subject: any) => {

      this.selectSubject = subject;
    });

    this.sharedService.currentRetro.subscribe((retro: any) => {
      if (this.sharedService.currentRetroValue.id) {
        this.currentRetro = retro;
        this.inviteLink = environment.appUrl + "member/" + this.currentRetro.id;
        if (this.currentRetro.state > 2) {
          this.getRetroSubject(this.currentRetro.id);
        }
      }
      else {
        this.router.navigate(["/retro-start"]);



      }
    });




    if (!this.authService.hasRole('Leader')) {
      this.chatService.userOnline();
    }
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

    if (".comments" == this.currentTab) {
      this.sharedService.tabSource.next(".comments");
      if (this.authService.hasRole("Leader")) {
        this.pathIndex = 5;
        let retro = new Retro();
        retro.id = this.retroRight.retroId;
        retro.state = 2;
        retro.currentPage = "/comments"
        retro.templateId = this.currentRetro.templateId;
        retro.subjectId=this.sharedService.selectSubjectValue.id;
        this.chatService.setCurrentRetro(retro);
      }
    }
    if (".categorize" == this.currentTab) {
      this.sharedService.tabSource.next(".categorize");
      if (this.authService.hasRole("Leader")) {
        this.pathIndex = 4;
        let retro = new Retro();
        retro.id = this.retroRight.retroId;
        retro.state = 2;
        retro.currentPage = "/categorize"
        retro.templateId = this.currentRetro.templateId;
        this.chatService.setCurrentRetro(retro);
      }


    }
    if (".vote" == this.currentTab) {
      this.sharedService.tabSource.next(".vote");
      if (this.authService.hasRole("Leader")) {
        this.pathIndex = 6;
        let retro = new Retro();
        retro.id = this.retroRight.retroId;
        retro.state = 2;
        retro.currentPage = "/vote"
        retro.templateId = this.currentRetro.templateId;
        this.chatService.setCurrentRetro(retro);
      }
    }
    if (".idea-archive" == this.currentTab) {
      this.sharedService.tabSource.next(".idea-archive");
      if (this.authService.hasRole("Leader")) {
        this.pathIndex = 7;
        let retro = new Retro();
        retro.id = this.retroRight.retroId;
        retro.state = 2;
        retro.currentPage = "/idea-archive"
        retro.templateId = this.currentRetro.templateId;
        this.chatService.setCurrentRetro(retro);
      }
    }



    if (".idea-archive" == this.currentTab) {
      this.pathIndex = 7;
      this.isReport = true;
      this.isShow = false;
    }
    else {
      this.isReport = false;
      this.isShow = true;

    }


    if (".select-subject" == this.currentTab) {
      this.pathIndex = 1;
      this.isShow = false;
      this.isSelectSubject = true;
    }
    else {
      this.isSelectSubject = false;
      this.isShow = true;

    }

    if (".select-template" == this.currentTab) {
      this.pathIndex = 2;

      this.isSelectTemplate = true;
    }
    else {
      this.isSelectTemplate = false;
    }

    if (".brainstorm" == this.currentTab) {
      this.pathIndex = 3;
      this.isBrainstorm = true;

    }
    else {
      this.isBrainstorm = false;

    }

    if (".comments" == this.currentTab) {
      this.pathIndex = 5;

      this.isComment = true;

    }
    else {
      this.isComment = false;

    }


    if (".vote" == this.currentTab) {
      this.pathIndex = 6;

      this.isVote = true;
    }
    else {
      this.isVote = false;

    }

    if (".categorize" == this.currentTab) {
      this.pathIndex = 4;

      this.isCategorized = true;
    }
    else {
      this.isCategorized = false;
    }

    if (".idea-archive" == this.currentTab) {
      if (this.authService.hasRole("Leader")) {
        this.pathIndex = 7;
        
        this.getFilterGroup();
      }
    }

    const width = window.innerWidth;
    if (width <= 576)
      this.widgetsContent.nativeElement.scrollLeft += 150;




  }

  changeTab(tab) {

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
      position: "center",
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
