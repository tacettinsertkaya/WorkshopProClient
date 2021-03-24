import { Component, NgZone, OnInit } from '@angular/core';
import { Template } from 'app/models/template';
import { TemplateDetail } from 'app/models/template-detail';
import { TemplateService } from 'app/services/template.service';
import { first } from 'rxjs/operators';
import { SharedService } from 'app/services/shared.service';
import swal from 'sweetalert2';
import { TemplateDetailService } from 'app/services/template-detail.service';
import { ChatService } from 'app/services/chat.service';
import { UserService } from 'app/services/user.service';
import { Retro } from 'app/models/retro';
import { CompanyService } from 'app/services/company.service';
import { Company } from 'app/models/company';
import { TemplateFilter } from 'app/models/dto/template-filter';
import { AlertifyService } from 'app/services/alertify.service';

declare var $: any;

@Component({
  moduleId: module.id,
  selector: 'templates-cmp',
  templateUrl: 'templates.component.html',
})
export class TemplatesComponent implements OnInit {
  public headers: TemplateDetail[] = [
    {
      header: '',
      order: 1,
    },
  ];

  public updateHeaders: TemplateDetail[] = [];
   data = new Template();
  templates: Template[] = [];
  template: Template = new Template();
  selectTemplateId: string;
  isUpdate: boolean = false;
  isUser:boolean=false;

  companys: Array<Company> = [];
  companyId: string = '';
  /**
   *
   */
  constructor(
    private templateService: TemplateService,
    private companyService:CompanyService,
    private templateDetailService: TemplateDetailService,
    private sharedService: SharedService,
    private alertifyService: AlertifyService,
    private chatService: ChatService,
    private _ngZone: NgZone,
    private authService: UserService,

  ) {
    this.subscribeToCurrentRetroEvents();
  }
  orderlist = [];

  ngOnInit(): void {
    this.getTemplateList();

    for (let i = 1; i <= 10; i++) {
      this.orderlist.push(i);
    }
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
       this.alertifyService.error();
      }
    );
}


  private subscribeToCurrentRetroEvents(): void {
    this.chatService.currentRetroReceived.subscribe((retro: Retro) => {
      this._ngZone.run(() => {
        
        if(this.authService.hasRole("Member")) 
        this.sharedService.tabSource.next(retro.currentPage);
  
      });
    });
  }

  editTemplate(templateId: any) {
    this.templateService
      .getTemplate(templateId)
      .pipe(first())
      .subscribe(
        (res) => {
          this.template = res;
          $('#editModal').modal('show');
        },
        (error) => {
          this.alertifyService.error();
        }
      );
  }

  deleteTemplate(templateId: any) {
    this.templateService
      .delete(templateId)
      .pipe(first())
      .subscribe(
        (res) => {
          this.alertifyService.success();
          this.getTemplateList();
        },
        (error) => {
          this.alertifyService.error();
        }
      );
  }

  selectTemplate(templateId) {
    localStorage.setItem('templateId', templateId);
    this.sharedService.messageSource.next(templateId);
    this.sharedService.tabSource.next('/retro/brainstorm');


    
  }

  showSwal(type, id = 0) {
    if (type == 'warning-message-and-confirmation') {
      swal({
        title: 'Herhangi bir şablon bulunamadı',
        text: 'Şimdi şablon oluşturmak ister misin?',
        type: 'warning',
        showCancelButton: true,
        confirmButtonClass: 'btn btn-success',
        cancelButtonClass: 'btn btn-danger',
        confirmButtonText: 'Evet',
        cancelButtonText: 'Hayır',
        buttonsStyling: false,
      }).then((result) => {
        if (result.value) {
          $('.btn-template-create').click();
        }
      });
    }
    if (type == 'warning-message-and-confirmation-delete') {
      swal({
        title: 'Uyarı',
        text: 'Silmek istediğinizden emin misiniz?',
        type: 'warning',
        showCancelButton: true,
        confirmButtonClass: 'btn btn-success',
        cancelButtonClass: 'btn btn-danger',
        confirmButtonText: 'Evet',
        cancelButtonText: 'Hayır',
      }).then((result) => {
        if (result.value) {
          this.deleteTemplate(id);
        }
      });
    }
  }

  getTemplateList() {
   let filter=new TemplateFilter();
   filter.companyId=this.authService.currentUserValue.companyId;

    this.templateService
      .getAllTemplate(filter)
      .pipe(first())
      .subscribe( 
        (res) => {
          this.templates = res;
        },
        (error) => {
          this.alertifyService.error();
        }
      );
  }

  addHeader() {
    this.headers.push({
      header: '',
      order: this.headers.length + 1,
    });
  }

  addUpdateHeader() {
    this.template.templateDetail.push({
      header: '',
      order: this.template.templateDetail.length + 1,
    });
  }
  changeSort() {
    this.headers.sort(function (a, b) {
      return a.order - b.order;
    });
  }
  changeUpdateSort() {
    this.template.templateDetail.sort(function (a, b) {
      return a.order - b.order;
    });
  }

  removeHeader(i: number) {
    this.headers.splice(i, 1);
  }

  removeUpdateHeader(i: number) {
    this.template.templateDetail.splice(i, 1);
  }

  saveTemplate() {
    if(this.headers.length>6){
      this.alertifyService.warning("6 ' dan fazla  başlık tanımlanamaz. ") 
    }

    this.data.templateDetail = this.headers;
    this.data.templateName = new Date().getTime().toString();
    this.data.createRole='Admin';
    this.data.userId=this.authService.currentUserValue.userId;

   

    this.templateService
      .create(this.data)
      .pipe(first())
      .subscribe(
        (res) => {
          this.alertifyService.success();
          this.getTemplateList();
          this.headers = [
            {
              header: '',
              order: 1,
            },
          ];

          $('#addModal').modal('hide');
        },
        (error) => {
          this.alertifyService.error();
        }
      );
  }

  updateTemplate() {

    if(this.template.templateDetail.length>6){
      this.alertifyService.warning("6 ' dan fazla  başlık tanımlanamaz. ") 
      return;
    }

    let templateId = this.template.id;
    this.templateService
      .delete(templateId)
      .pipe(first())
      .subscribe((res) => {
        this.data.templateDetail=[];
        this.data.templateName = this.template.templateName;
        this.template.templateDetail.forEach((item) => {
          let detail = new TemplateDetail();
          detail.header = item.header;
          detail.order = item.order;

          this.data.templateDetail.push(detail);
        });

        this.templateService
          .create(this.data)
          .pipe(first())
          .subscribe(
            (res) => {
              this.alertifyService.success();
              this.getTemplateList();
              this.headers = [
                {
                  header: '',
                  order: 1,
                },
              ];

              $('#editModal').modal('hide');
            },
            (error) => {
              this.alertifyService.error();
            }
          );
      });
  }
}
