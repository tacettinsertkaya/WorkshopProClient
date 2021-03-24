import { Component, NgZone, OnInit } from "@angular/core";
import { Subject } from "app/models/subject";
import { SubjectsService } from "app/services/subject.service";
import { first } from "rxjs/operators";
import { SharedService } from "app/services/shared.service";
import swal from "sweetalert2";
import { UserService } from "app/services/user.service";
import { ChatService } from "app/services/chat.service";
import { Retro } from "app/models/retro";
import { RetroConfigration } from "app/models/retro-configuration";
import { SubjectDto } from "app/models/dto/subject-dto";
import { CompanyService } from "app/services/company.service";
import { Company } from "app/models/company";
import { SubjectFilter } from "app/models/dto/subject-filter";
import { AlertifyService } from "app/services/alertify.service";
import { Router } from "@angular/router";

declare var $: any;

@Component({
  selector: 'app-retro-subject',
  templateUrl: './retro-subject.component.html',
  styleUrls: ['./retro-subject.component.css']
})
export class RetroSubjectComponent implements OnInit {
  subjects: Array<Subject> = [];
  subject: Subject = new Subject();
  isUpdate: boolean = false;
  isUser:boolean=false;
  retroRight: RetroConfigration = new RetroConfigration();
  retro:Retro=new Retro();
  selectSubjectId:any="";
  companys: Array<Company> = [];
  companyId: string = '';
  
  constructor(
    private subjectService: SubjectsService,
    private sharedService: SharedService,
    private authService: UserService,
    private chatService: ChatService,
    private alertifyService: AlertifyService,
    private companyService: CompanyService,
    private router: Router,
    

    private _ngZone: NgZone
  ) { }

  ngOnInit() {
    this.getSubjects();
    this.existUser();

    this.subject.companyId = this.authService.currentUserValue.companyId;
    this.getAllCompany();
  }


  selectSubject(subject: any) {
  
   
    if(this.authService.hasRole("Leader")){
      
      this.selectSubjectId=subject.id;
      let retro=new Retro();
      retro.id=this.retroRight.retroId;
      retro.state=2;
      retro.currentPage="/retro/template";
      retro.templateId=this.retro.templateId? this.retro.templateId:"";
      console.log("retro",retro);
      this.chatService.setCurrentRetro(retro);

      let selectSubjectDto=new SubjectDto();
      selectSubjectDto.id=subject.id;
      selectSubjectDto.subjectTitle=subject.subjectTitle;
      selectSubjectDto.subjectDescription=subject.subjectDescription;
      selectSubjectDto.retroId=this.retroRight.retroId;
  
      this.chatService.setSelectedSubject(selectSubjectDto);
  
      this.router.navigate(["/current/template"]);
     }
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
        this.alertifyService.error()
      }
    );
}

getSubjects() {
  let filter=new SubjectFilter();
  filter.companyId=this.authService.currentUserValue.companyId;
  
  this.subjectService
    .getAllSubject(filter)
    .pipe(first())
    .subscribe(
      (res) => {
        if (res.length > 0) {
          this.subjects = res;
        } else {
          this.showSwal("warning-message-and-confirmation");
        }
      },
      (error) => {
        this.alertifyService.error()
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
        this.alertifyService.success()
        this.getSubjects();
      },
      (error) => {
        this.alertifyService.error()
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
      data.createRole="Leader";
      data.userId=this.authService.currentUserValue.userId;

      this.subjectService
        .create(data)
        .pipe(first())
        .subscribe(
          (res) => {
            this.subject.subjectTitle = "";
            this.subject.subjectDescription = "";
            this.alertifyService.success()
            this.getSubjects();

            $("#addModal").modal("hide");
          },
          (error) => {
            this.alertifyService.error()
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
            this.alertifyService.success()
            this.getSubjects();
            this.isUpdate = false;
            $("#addModal").modal("hide");
          },
          (error) => {
            this.alertifyService.error()
          }
        );
    }
  }

  showSwal(type, id = 0) {
    if (type == "warning-message-and-confirmation") {
      swal({
        title: "Herhangi bir konu bulunamadı",
        text: "Şimdi konu oluşturmak ister misin?",
        type: "warning",
        showCancelButton: true,
        confirmButtonClass: "btn btn-success",
        cancelButtonClass: "btn btn-danger",
        confirmButtonText: "Evet",
        cancelButtonText: "Hayır",
        buttonsStyling: false,
      }).then((result) => {
        if (result.value) {
          $(".btn-subject-create").click();
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
