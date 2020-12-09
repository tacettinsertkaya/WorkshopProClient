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

  editTemplate(templateId: any) {
    this.templateService
      .getTemplate(templateId)
      .pipe(first())
      .subscribe(
        (res) => {
          this.template = res;
          $('#templateEditModal').modal('show');
        },
        (error) => {
          $.notify(
            {
              icon: 'ti-gift',
              message: 'İşlem sırasında hata oluştu.',
            },
            {
              type: 'danger',
              timer: 4000,
              placement: {
                from: 'top',
                align: 'right',
              },
              template:
                '<div data-notify="container" class="col-11 col-md-4 alert alert-{0} alert-with-icon" role="alert"><button type="button" aria-hidden="true" class="close" data-notify="dismiss"><i class="nc-icon nc-simple-remove"></i></button><span data-notify="icon" class="nc-icon nc-bell-55"></span> <span data-notify="title">{1}</span> <span data-notify="message">{2}</span><div class="progress" data-notify="progressbar"><div class="progress-bar progress-bar-{0}" role="progressbar" aria-valuenow="0" aria-valuemin="0" aria-valuemax="100" style="width: 0%;"></div></div><a href="{3}" target="{4}" data-notify="url"></a></div>',
            }
          );
        }
      );
  }

  deleteTemplate(templateId: any) {
    this.templateService
      .delete(templateId)
      .pipe(first())
      .subscribe(
        (res) => {
          $.notify(
            {
              icon: 'ti-gift',
              message: 'İşlem başarılı bir şekilde gerçekleşti.',
            },
            {
              type: 'success',
              timer: 4000,
              placement: {
                from: 'top',
                align: 'right',
              },
              template:
                '<div data-notify="container" class="col-11 col-md-4 alert alert-{0} alert-with-icon" role="alert"><button type="button" aria-hidden="true" class="close" data-notify="dismiss"><i class="nc-icon nc-simple-remove"></i></button><span data-notify="icon" class="nc-icon nc-bell-55"></span> <span data-notify="title">{1}</span> <span data-notify="message">{2}</span><div class="progress" data-notify="progressbar"><div class="progress-bar progress-bar-{0}" role="progressbar" aria-valuenow="0" aria-valuemin="0" aria-valuemax="100" style="width: 0%;"></div></div><a href="{3}" target="{4}" data-notify="url"></a></div>',
            }
          );
          this.getTemplateList();
        },
        (error) => {
          $.notify(
            {
              icon: 'ti-gift',
              message: 'İşlem sırasında hata oluştu.',
            },
            {
              type: 'danger',
              timer: 4000,
              placement: {
                from: 'top',
                align: 'right',
              },
              template:
                '<div data-notify="container" class="col-11 col-md-4 alert alert-{0} alert-with-icon" role="alert"><button type="button" aria-hidden="true" class="close" data-notify="dismiss"><i class="nc-icon nc-simple-remove"></i></button><span data-notify="icon" class="nc-icon nc-bell-55"></span> <span data-notify="title">{1}</span> <span data-notify="message">{2}</span><div class="progress" data-notify="progressbar"><div class="progress-bar progress-bar-{0}" role="progressbar" aria-valuenow="0" aria-valuemin="0" aria-valuemax="100" style="width: 0%;"></div></div><a href="{3}" target="{4}" data-notify="url"></a></div>',
            }
          );
        }
      );
  }

  selectTemplate(templateId) {
    localStorage.setItem('templateId', templateId);
    this.sharedService.messageSource.next(templateId);
    this.sharedService.tabSource.next('.brainstorm');


    
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
   let companyId = this.authService.currentUserValue.companyId;

    this.templateService
      .getAllTemplate(companyId)
      .pipe(first())
      .subscribe(
        (res) => {
          this.templates = res;
        },
        (error) => {
          $.notify(
            {
              icon: 'ti-gift',
              message: 'İşlem sırasında hata oluştu.',
            },
            {
              type: 'danger',
              timer: 4000,
              placement: {
                from: 'top',
                align: 'right',
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

    this.data.templateDetail = this.headers;
    this.data.templateName = new Date().getTime().toString();
    this.templateService
      .create(this.data)
      .pipe(first())
      .subscribe(
        (res) => {
          $.notify(
            {
              icon: 'ti-gift',
              message: 'İşlem başarılı bir şekilde gerçekleşti.',
            },
            {
              type: 'success',
              timer: 4000,
              placement: {
                from: 'top',
                align: 'right',
              },
              template:
                '<div data-notify="container" class="col-11 col-md-4 alert alert-{0} alert-with-icon" role="alert"><button type="button" aria-hidden="true" class="close" data-notify="dismiss"><i class="nc-icon nc-simple-remove"></i></button><span data-notify="icon" class="nc-icon nc-bell-55"></span> <span data-notify="title">{1}</span> <span data-notify="message">{2}</span><div class="progress" data-notify="progressbar"><div class="progress-bar progress-bar-{0}" role="progressbar" aria-valuenow="0" aria-valuemin="0" aria-valuemax="100" style="width: 0%;"></div></div><a href="{3}" target="{4}" data-notify="url"></a></div>',
            }
          );
          this.getTemplateList();
          this.headers = [
            {
              header: '',
              order: 1,
            },
          ];

          $('#templateModal').modal('hide');
        },
        (error) => {
          $.notify(
            {
              icon: 'ti-gift',
              message: 'İşlem sırasında hata oluştu.',
            },
            {
              type: 'danger',
              timer: 4000,
              placement: {
                from: 'top',
                align: 'right',
              },
              template:
                '<div data-notify="container" class="col-11 col-md-4 alert alert-{0} alert-with-icon" role="alert"><button type="button" aria-hidden="true" class="close" data-notify="dismiss"><i class="nc-icon nc-simple-remove"></i></button><span data-notify="icon" class="nc-icon nc-bell-55"></span> <span data-notify="title">{1}</span> <span data-notify="message">{2}</span><div class="progress" data-notify="progressbar"><div class="progress-bar progress-bar-{0}" role="progressbar" aria-valuenow="0" aria-valuemin="0" aria-valuemax="100" style="width: 0%;"></div></div><a href="{3}" target="{4}" data-notify="url"></a></div>',
            }
          );
        }
      );
  }

  updateTemplate() {

    let templateId = this.template.id;
    this.templateService
      .delete(templateId)
      .pipe(first())
      .subscribe((res) => {

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
              $.notify(
                {
                  icon: 'ti-gift',
                  message: 'İşlem başarılı bir şekilde gerçekleşti.',
                },
                {
                  type: 'success',
                  timer: 4000,
                  placement: {
                    from: 'top',
                    align: 'right',
                  },
                  template:
                    '<div data-notify="container" class="col-11 col-md-4 alert alert-{0} alert-with-icon" role="alert"><button type="button" aria-hidden="true" class="close" data-notify="dismiss"><i class="nc-icon nc-simple-remove"></i></button><span data-notify="icon" class="nc-icon nc-bell-55"></span> <span data-notify="title">{1}</span> <span data-notify="message">{2}</span><div class="progress" data-notify="progressbar"><div class="progress-bar progress-bar-{0}" role="progressbar" aria-valuenow="0" aria-valuemin="0" aria-valuemax="100" style="width: 0%;"></div></div><a href="{3}" target="{4}" data-notify="url"></a></div>',
                }
              );
              this.getTemplateList();
              this.headers = [
                {
                  header: '',
                  order: 1,
                },
              ];

              $('#templateEditModal').modal('hide');
            },
            (error) => {
              $.notify(
                {
                  icon: 'ti-gift',
                  message: 'İşlem sırasında hata oluştu.',
                },
                {
                  type: 'danger',
                  timer: 4000,
                  placement: {
                    from: 'top',
                    align: 'right',
                  },
                  template:
                    '<div data-notify="container" class="col-11 col-md-4 alert alert-{0} alert-with-icon" role="alert"><button type="button" aria-hidden="true" class="close" data-notify="dismiss"><i class="nc-icon nc-simple-remove"></i></button><span data-notify="icon" class="nc-icon nc-bell-55"></span> <span data-notify="title">{1}</span> <span data-notify="message">{2}</span><div class="progress" data-notify="progressbar"><div class="progress-bar progress-bar-{0}" role="progressbar" aria-valuenow="0" aria-valuemin="0" aria-valuemax="100" style="width: 0%;"></div></div><a href="{3}" target="{4}" data-notify="url"></a></div>',
                }
              );
            }
          );
      });
  }
}
