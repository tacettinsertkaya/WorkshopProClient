import { Component, NgZone, OnInit } from "@angular/core";
import { SharedService } from "app/services/shared.service";
import { Subject } from "app/models/subject";
import { RetroConfigration } from "app/models/retro-configuration";
import { RetroConfigurationService } from "app/services/retro-configuration";
import { first } from "rxjs/operators";
import { Router } from "@angular/router";
import { UserService } from "app/services/user.service";
import { ChatService } from "app/services/chat.service";
import { Retro } from "app/models/retro";
import { RetroState } from "app/models/enums/retroState";

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
  config: RetroConfigration = new RetroConfigration();
  selectSubject: Subject = null;
  isShow: boolean = false;
  constructor(
    private sharedService: SharedService,
    private authService: UserService,
    private configService: RetroConfigurationService,
    private router: Router,
    private chatService: ChatService,
    private _ngZone: NgZone

  ) { this.subscribeToCurrentRetroEvents()}

  ngOnInit(): void {
    if (this.isUser())
      this.router.navigate(["/retro"]);
  }


  isUser() {
    return this.authService.hasRole("Member");
  }

  private subscribeToCurrentRetroEvents(): void {
    this.chatService.currentRetroReceived.subscribe((retro: Retro) => {
      this._ngZone.run(() => {
        this.sharedService.currentRetro.next(retro);

       
        if(this.authService.hasRole("Member")) 
        this.sharedService.tabSource.next("."+retro.currentPage.replace("/",""));
  
      });
    });
  }
  

  saveConfig() {
    this.configService
      .create(this.config)
      .pipe(first())
      .subscribe(
        (res) => {
          $.notify(
            {
              icon: "ti-gift",
              message: "İşlem başarılı bir şekilde gerçekleşti.",
            },
            {
              type: "success",
              timer: 4000,
              placement: {
                from: "top",
                align: "right",
              },
              template:
                '<div data-notify="container" class="col-11 col-md-4 alert alert-{0} alert-with-icon" role="alert"><button type="button" aria-hidden="true" class="close" data-notify="dismiss"><i class="nc-icon nc-simple-remove"></i></button><span data-notify="icon" class="nc-icon nc-bell-55"></span> <span data-notify="title">{1}</span> <span data-notify="message">{2}</span><div class="progress" data-notify="progressbar"><div class="progress-bar progress-bar-{0}" role="progressbar" aria-valuenow="0" aria-valuemin="0" aria-valuemax="100" style="width: 0%;"></div></div><a href="{3}" target="{4}" data-notify="url"></a></div>',
            }
          );
          this.config = res;
          this.sharedService.retroRight.next(this.config);

          let retro=new Retro();
          retro.id=res.retroId;
          retro.state=2;
          retro.currentPage="/retro"
          this.chatService.setCurrentRetro(retro);


          this.router.navigate(["/retro"]);
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
