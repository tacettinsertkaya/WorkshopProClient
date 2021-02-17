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
import { TemplateFilter } from "app/models/dto/template-filter";
import { NotifierService } from "angular-notifier";
import { AlertifyService } from "app/services/alertify.service";

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

  subject: Subject = new Subject();
  templates: Template[] = [];
  selectTemplateId: string;
  isUser: boolean = false;
  retroRight: RetroConfigration = new RetroConfigration();
  companys: Array<Company> = [];
  companyId: string = '';

  data = new Template();
  /**
   *
   */
  private readonly notifier: NotifierService;
  constructor(
    private templateService: TemplateService,
    private companyService: CompanyService,
    private sharedService: SharedService,
    private authService: UserService,
    private alertifyService:AlertifyService,
    private chatService: ChatService,
    private _ngZone: NgZone) {
  
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
    this.isUser = this.authService.hasRole("Member");
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
          this.alertifyService.error();
        }
      );
  }

  private subscribeToCurrentRetroEvents(): void {
    this.chatService.currentRetroReceived.subscribe((retro: Retro) => {
      this._ngZone.run(() => {

        if (this.authService.hasRole("Member"))
          this.sharedService.tabSource.next("." + retro.currentPage.replace("/", ""));

      });
    });
  }



  selectTemplate(templateId) {
    localStorage.setItem("templateId", templateId);
    this.sharedService.messageSource.next(templateId);
    this.sharedService.tabSource.next(".brainstorm");
    if (this.authService.hasRole("Leader")) {

      let retro = new Retro();
      retro.id = this.retroRight.retroId;
      retro.state = 2;
      retro.templateId = templateId;
      retro.currentPage = "/brainstorm"
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
    let filter = new TemplateFilter();
    filter.companyId = this.authService.currentUserValue.companyId;
    filter.retroId = this.retroRight.retroId;

    this.templateService
      .getAllTemplate(filter)
      .pipe(first())
      .subscribe(
        (res) => {
          console.log("this.templates",res);
          if (res.length > 0) {
            this.templates = res;
           
          } else {
            // this.showSwal("warning-message-and-confirmation");
          }
        },
        (error) => {
          this.alertifyService.error();
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
    this.data.createRole = "Leader";
    this.data.userId = this.authService.currentUserValue.userId;

    this.templateService
      .create(this.data)
      .pipe(first())
      .subscribe(
        (res) => {
          this.alertifyService.success()
          this.getTemplateList();
          this.headers = [
            {
              header: "",
              order: 1,
            },
          ];

          $("#addModal").modal("hide");
        },
        (error) => {
          this.alertifyService.error()
        }
      );
  }
}
