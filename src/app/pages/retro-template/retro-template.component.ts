import { Component, NgZone, OnInit } from "@angular/core";
import { Template } from "app/models/template";
import { TemplateDetail } from "app/models/template-detail";
import { TemplateService } from "app/services/template.service";
import { first } from "rxjs/operators";
import { SharedService } from "app/services/shared.service";
import Swal  from "sweetalert2";
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
import { SubjectsService } from "app/services/subject.service";
import { RetroConfigurationService } from "app/services/retro-configuration";
import { Router } from "@angular/router";
import { GuidGenerator } from "app/helpers/guid-generator";


declare var $: any;
import * as firebase from 'firebase';
import { snapshotToArray } from "app/helpers/firebase-helper";
import { TranslateService } from "@ngx-translate/core";


@Component({
  selector: 'app-retro-template',
  templateUrl: './retro-template.component.html',
  styleUrls: ['./retro-template.component.css']
})
export class RetroTemplateComponent implements OnInit {

  public headers: TemplateDetail[] = [
    {
      header: "",
      order: 1,
    },
  ];
  selectSubject: Subject=new Subject();
  
  templates: Template[] = [];
  selectTemplateId: string;
  isUser: boolean = false;
  companys: Array<Company> = [];
  companyId: string = '';
  retroId: string = '';

  data = new Template();
  currentUserId:string='';
  /**
   *
   */
  private readonly notifier: NotifierService;
  constructor(
    private templateService: TemplateService,
    private companyService: CompanyService,
    private sharedService: SharedService,
    private authService: UserService,
    private alertifyService: AlertifyService,
    private chatService: ChatService,
    private subjectService: SubjectsService,
    private translate: TranslateService,
    private configureService: RetroConfigurationService,
    private router: Router,
    private _ngZone: NgZone
    ) {

  

  }

  orderlist = [];

  ngOnInit(): void {




    for (let i = 1; i <= 10; i++) {
      this.orderlist.push(i);
    }

    this.existUser();
    this.getAllCompany();

    this.data.companyId = this.authService.currentUserValue.companyId;

    this.retroId=this.authService.currentRetroIdValue;
    if(this.retroId){
      this.getRetroSubject(this.retroId);
      this.getTemplateList();
    }

    this.currentUserId=this.authService.currentUserValue.userId;

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


  

  private getRetroSubject(retroId) {
    this.subjectService
      .getRetroSubject(retroId)
      .pipe(first())
      .subscribe(
        (res) => {

          this.selectSubject = res;
          
        },
        (error) => {

        });
  }






  selectTemplate(templateId) {
 
    if (this.authService.hasRole("Leader")) {

      let retro = new Retro();
      retro.id = this.retroId;
      retro.state = 2;
      retro.subjectId=this.selectSubject.id;
      retro.templateId = templateId;
      retro.currentPage = "/current/brainstorm"

      let generator=new GuidGenerator();

     

      this.configureService.setCurrentRetro(retro).subscribe(
        (res)=>{
          let current = new Retro();
          current.currentPage = "/current/brainstorm";
          current.id = this.retroId;
          const newMessage = firebase.default.database().ref('currentpath/').push();
          newMessage.set(current).then(p=>{
            this.router.navigate(["/current/brainstorm"]);

          });

        }
      );;



    }
  }

  showSwal(type) {
    if (type == "warning-message-and-confirmation") {
      Swal.fire({

        title: this.translate.instant("common.template_not_found") ,
        text:this.translate.instant("common.template_create_request") , 

        icon: 'warning',
        showCancelButton: true,
        
        
        confirmButtonText: this.translate.instant("common.yes"),
        cancelButtonText: this.translate.instant("common.no"),
        buttonsStyling: false,
      }).then((result) => {
        if (result.value) {
          $(".btn-create").click();
        }
      });
    }
  }

  
  isCheckOwner(subject:Subject){
      
    return this.currentUserId==subject.userId;
}


  removeTemplate(template:Template) {
 

    this.templateService
      .delete(template.id)
      .pipe(first())
      .subscribe(
        (res) => {
         
       this.getTemplateList()
          
        },
        (error) => {
          this.alertifyService.error();
        }
      );
  }

  getTemplateList() {
    let filter = new TemplateFilter();
    filter.companyId = this.authService.currentUserValue.companyId;
    filter.retroId = this.retroId;

    this.templateService
      .getAllTemplate(filter)
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
    this.headers = this.headers.filter(p => p.header != "");
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
