import { Component, NgZone, OnInit } from "@angular/core";
import { Template } from "app/models/template";
import { TemplateDetail } from "app/models/template-detail";
import { TemplateService } from "app/services/template.service";
import { first } from "rxjs/operators";
import { SharedService } from "app/services/shared.service";
import swal from "sweetalert2";
import { UserService } from "app/services/user.service";
import { ChatService } from "app/services/chat.service";
import { Retro } from "app/models/retro";
import { RetroConfigration } from "app/models/retro-configuration";
import { Subject } from "app/models/subject";
import { CompanyService } from "app/services/company.service";
import { Company } from "app/models/company";

declare var $: any;

@Component({
  moduleId: module.id,
  selector: "schema-cmp",
  templateUrl: "schema.component.html",
})
export class SchemaComponent implements OnInit {
  public headers: TemplateDetail[] = [
    {
      header: "",
      order: 1,
    },
  ];

  subject:Subject=new Subject();
  templates: Template[] = [];
  selectTemplateId: string;
  isUser:boolean=false;
  retroRight: RetroConfigration = new RetroConfigration();
  companys: Array<Company> = [];
  companyId: string = '';

   data = new Template();
  /**
   *
   */
  constructor(
    private templateService: TemplateService,
    private companyService: CompanyService,
    private sharedService: SharedService,
    private authService: UserService,
    private chatService: ChatService,
    private _ngZone: NgZone,
  ) {
    this.subscribeToCurrentRetroEvents();

    this.sharedService.retroRight.subscribe((right: RetroConfigration) => {
      this.retroRight = right;
    });
  }
  orderlist = [];

  ngOnInit(): void {
    this.getTemplateList();

    for (let i = 1; i <= 10; i++) {
      this.orderlist.push(i);
    }
    
    this.existUser();
    this.getAllCompany();

    this.data.companyId = this.authService.currentUserValue.companyId;

  }

  
  existUser() {
    this.isUser=this.authService.hasRole("Member");
 }

 getAllCompany() {
  this.companyService
    .getAllCompany()
    .pipe(first())
    .subscribe(
      (res) => {
        this.companys = res;
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

 private subscribeToCurrentRetroEvents(): void {
  this.chatService.currentRetroReceived.subscribe((retro: Retro) => {
    this._ngZone.run(() => {
      
      if(this.authService.hasRole("Member")) 
      this.sharedService.tabSource.next("."+retro.currentPage.replace("/",""));

    });
  });
}



  selectTemplate(templateId) {
    localStorage.setItem("templateId", templateId);
    this.sharedService.messageSource.next(templateId);
    this.sharedService.tabSource.next(".brainstorm");
    if(this.authService.hasRole("Leader")){
    
      let retro=new Retro();
      retro.id=this.retroRight.retroId;
      retro.state=2;
      retro.templateId=templateId;
      retro.currentPage="/brainstorm"
      this.chatService.setCurrentRetro(retro);
     }
  }

  showSwal(type) {
    if (type == "warning-message-and-confirmation") {
      swal({
        title: "Herhangi bir şablon bulunamadı",
        text: "Şimdi şablon oluşturmak ister misin?",
        type: "warning",
        showCancelButton: true,
        confirmButtonClass: "btn btn-success",
        cancelButtonClass: "btn btn-danger",
        confirmButtonText: "Evet",
        cancelButtonText: "Hayır",
        buttonsStyling: false,
      }).then((result) => {
        if (result.value) {
          $(".btn-create").click();
        }
      });
    }
  }

  getTemplateList() {
    let companyId = this.authService.currentUserValue.companyId;

    this.templateService
      .getAllTemplate(companyId)
      .pipe(first())
      .subscribe(
        (res) => {
          if (res.length > 0) {
            this.templates = res;
          } else {
            // this.showSwal("warning-message-and-confirmation");
          }
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
  addHeader() {
    this.headers.push({
      header: "",
      order: this.headers.length + 1,
    });
  }

  changeSort() {
    this.headers.sort(function (a, b) {
      return a.order - b.order;
    });
  }

  removeHeader(i: number) {
    this.headers.splice(i, 1);
  }

  saveTemplate() {
   

    this.data.templateDetail = this.headers;
    this.data.templateName = new Date().getTime().toString();
    this.templateService
      .create(this.data)
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
          this.getTemplateList();
          this.headers = [
            {
              header: "",
              order: 1,
            },
          ];

          $("#templateModal").modal("hide");
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
