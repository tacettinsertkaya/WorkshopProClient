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
import { ActivatedRoute } from "@angular/router";
import { TemplateService } from "app/services/template.service";

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
  retroId:string="";
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
  constructor(
    private sharedService: SharedService,
    private subjectService: SubjectsService,
    private authService: UserService,
    private configService: RetroConfigurationService,
    private chatService: ChatService,
    private templateService: TemplateService,
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

      


      $(tab).click();
      $(".tab-progress").find(".nav-item").removeClass("active");



    });

    this.sharedService.selectSubject.subscribe((subject: any) => {

      this.selectSubject = subject;
    });

    this.sharedService.currentRetro.subscribe((retro: any) => {
      this.currentRetro = retro;
      this.inviteLink = environment.appUrl + "member/" + this.currentRetro.id;

    });





    this.chatService.userOnline();

    this.sharedService.isShowSubject.subscribe((isShow: any) => {
      this.isShow = isShow;
    });
    this.subscribeToCurrentRetroEvents()
    this.subscribeToSelectedSubjectEvents();
    this.allUserRightsToEvents();

    

    let routeId = this.route.snapshot.params.id;
    this.retroId=routeId;
    if (this.authService.hasRole("Member") && routeId != undefined) {
      this.getRetroSubject(routeId);
      this.getRetroRight(routeId);
      this.getRetro(routeId);

      this.getCurrentRetroStep(routeId)
    }
  }

  ngOnInit(): void {
    this.existUser();


    console.log("retrointi");
    
  }

  copyLink(inputElement){
    inputElement.select();
    document.execCommand('copy');
    inputElement.setSelectionRange(0, 0);

    $.notify(
      {
        icon: "ti-info",
        message: "Başarılı bir kopyalandı.",
      },
      {
        type: "info",
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

           this.selectSubject=res;
          
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
          
           this.sharedService.messageSourceSetValue( res.templateId);

           this.sharedService.currentRetroSetValue(res);
           this.inviteLink = environment.appUrl + "member/" + retroId;

        },
        (error) => {

        });
  }


  private getRetroRight(retroId) {

    let retro=new Retro();
    retro.id=retroId;
    retro.userId=this.authService.currentUserValue.userId;

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
            this.inviteLink = environment.appUrl + "member/" +retro.id;
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
