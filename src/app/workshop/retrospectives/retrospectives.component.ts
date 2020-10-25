import { Component, NgZone, OnInit } from "@angular/core";
import { SharedService } from "app/services/shared.service";
import { Subject } from "app/models/subject";
import { RetroConfigration } from "app/models/retro-configuration";
import { RetroConfigurationService } from "app/services/retro-configuration";
import { first } from "rxjs/operators";
import { UserService } from "app/services/user.service";
import { ChatService } from "app/services/chat.service";
import { Retro } from "app/models/retro";

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
  config: RetroConfigration = new RetroConfigration();
  selectSubject: Subject = null;
  isShow: boolean = false;
  isUser:boolean=false;

  constructor(
    private sharedService: SharedService,
    private authService: UserService,
    private configService: RetroConfigurationService,
    private chatService: ChatService,
    private _ngZone: NgZone,
  ) {
    this.sharedService.tabSource.subscribe((tab: string) => {
      
      $(tab).click();
      $(".tab-progress").find(".nav-item").removeClass("active");
    });

    this.sharedService.selectSubject.subscribe((subject: any) => {
    
      this.selectSubject = subject;
    });

    this.sharedService.isShowSubject.subscribe((isShow: any) => {
      this.isShow = isShow;
    });
    this.subscribeToCurrentRetroEvents()

  }

  existUser() {
     this.isUser=this.authService.hasRole("Member");
  }

  private subscribeToCurrentRetroEvents(): void {
    this.chatService.currentRetroReceived.subscribe((retro: Retro) => {
      this._ngZone.run(() => {
        if(this.authService.hasRole("Member")) {
          this.sharedService.tabSource.next("."+retro.currentPage.replace("/",""));
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
