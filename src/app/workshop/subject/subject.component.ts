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
import { SubjectFilter } from "app/models/dto/subject-filter";
import { AlertifyService } from "app/services/alertify.service";

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
    private alertifyService: AlertifyService,
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
       this.alertifyService.error();
      }
    );
}


 private subscribeToCurrentRetroEvents(): void {
  this.chatService.currentRetroReceived.subscribe((retro: Retro) => {
    this._ngZone.run(() => {
      if(this.authService.hasRole("Member")) {
        this.sharedService.tabSource.next(retro.currentPage);

      }
           
    });
  });
}


  getSubjects() {
    let filter=new SubjectFilter();
    filter.companyId=this.authService.currentUserValue.companyId;
     
    this.subjectService
      .getAllSubject(filter)
      .pipe(first())
      .subscribe(
        (res) => {
          this.subjects = res;
        },
        (error) => {
          this.alertifyService.error();

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
        $("#addModal").modal("show");
      });
  }
  removeSubject(subjectId: any) {
    this.subjectService
      .delete(subjectId)
      .pipe(first())
      .subscribe(
        (res) => {
          this.alertifyService.success();

          this.getSubjects();
        },
        (error) => {
          this.alertifyService.error();

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
      data.createRole='Admin';
      data.userId=this.authService.currentUserValue.userId;
      this.subjectService
        .create(data)
        .pipe(first())
        .subscribe(
          (res) => {
            this.subject.subjectTitle = "";
            this.subject.subjectDescription = "";
            this.alertifyService.success();

            this.getSubjects();

            $("#addModal").modal("hide");
          },
          (error) => {
            this.alertifyService.error();

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
            this.alertifyService.success();

            this.getSubjects();
            this.isUpdate = false;
            $("#addModal").modal("hide");
          },
          (error) => {
            this.alertifyService.error();

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
