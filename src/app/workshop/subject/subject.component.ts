import { Component, NgZone, OnInit } from "@angular/core";
import { Subject } from "app/models/subject";
import { SubjectsService } from "app/services/subject.service";
import { first } from "rxjs/operators";
import { SharedService } from "app/services/shared.service";
import swal from "sweetalert2";
import { UserService } from "app/services/user.service";
import { ChatService } from "app/services/chat.service";
import { Retro } from "app/models/retro";
import { CompanyService } from "app/services/company.service";
import { Company } from "app/models/company";

declare var $: any;

@Component({
  moduleId: module.id,
  selector: "subject-cmp",
  templateUrl: "subject.component.html",
})
export class SubjectComponent implements OnInit {
  subjects: Array<Subject> = [];
  subject: Subject = new Subject();
  isUpdate: boolean = false;
  isUser:boolean=false;

  companys: Array<Company> = [];
  companyId: string = '';
  

  constructor(
    private subjectService: SubjectsService,
    private authService: UserService,
    private sharedService: SharedService,
    private chatService: ChatService,
    private companyService: CompanyService,
    private _ngZone: NgZone,
  ) {
    this.subscribeToCurrentRetroEvents()
  }
  ngOnInit() {
    this.getSubjects();
    this.existUser()
    this.subject.companyId = this.authService.currentUserValue.companyId;
    this.getAllCompany();
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
      if(this.authService.hasRole("Member")) {
        this.sharedService.tabSource.next("."+retro.currentPage.replace("/",""));

      }
           
    });
  });
}


  getSubjects() {
    let companyId=this.authService.currentUserValue.companyId;
    this.subjectService
      .getAllSubject(companyId)
      .pipe(first())
      .subscribe(
        (res) => {
          this.subjects = res;
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

  editSubject(subjectId: any) {
    this.subjectService
      .getSubject(subjectId)
      .pipe(first())
      .subscribe((res) => {
        this.subject = res;
        this.isUpdate = true;
        $("#subjectModal").modal("show");
      });
  }
  removeSubject(subjectId: any) {
    this.subjectService
      .delete(subjectId)
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
          this.getSubjects();
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

  saveSubject() {
    let data = this.subject;
    this.subject.subjectTitle = this.subject.subjectTitle.replace(
      /[\t\r\n]/g,
      ""
    );
    

    if (!this.isUpdate) {
      this.subjectService
        .create(data)
        .pipe(first())
        .subscribe(
          (res) => {
            this.subject.subjectTitle = "";
            this.subject.subjectDescription = "";
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
            this.getSubjects();

            $("#subjectModal").modal("hide");
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
    } else {
      this.subjectService
        .update(data)
        .pipe(first())
        .subscribe(
          (res) => {
            this.subject.subjectTitle = "";
            this.subject.subjectDescription = "";
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
            this.getSubjects();
            this.isUpdate = false;
            $("#subjectModal").modal("hide");
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

  showSwal(type, id = 0) {
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
    if (type == "warning-message-and-confirmation-delete") {
      swal({
        title: "Uyarı",
        text: "Silmek istediğinizden emin misiniz?",
        type: "warning",
        showCancelButton: true,
        confirmButtonClass: "btn btn-success",
        cancelButtonClass: "btn btn-danger",
        confirmButtonText: "Evet",
        cancelButtonText: "Hayır",
      }).then((result) => {
        if (result.value) {
          this.removeSubject(id);
        }
      });
    }
  }
}
