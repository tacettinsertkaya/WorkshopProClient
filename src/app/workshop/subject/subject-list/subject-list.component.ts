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
import { TranslateService } from "@ngx-translate/core";

declare var $: any;

@Component({
  moduleId: module.id,
  selector: "subject-list-cmp",
  templateUrl: "subject-list.component.html",
})
export class SubjectListComponent implements OnInit {
  subjects: Array<Subject> = [];
  subject: Subject = new Subject();
  isUpdate: boolean = false;
  isUser:boolean=false;
  retroRight: RetroConfigration = new RetroConfigration();
  retro:Retro=new Retro();

  companys: Array<Company> = [];
  companyId: string = '';
  
  constructor(
    private subjectService: SubjectsService,
    private sharedService: SharedService,
    private translate:TranslateService,
    private authService: UserService,
    private chatService: ChatService,
    private alertifyService: AlertifyService,
    private companyService: CompanyService,
    private _ngZone: NgZone
  ) {
    this.subscribeToCurrentRetroEvents();
    this.getSelectedSubjectEvents();
  
    this.sharedService.retroRight.subscribe((right: RetroConfigration) => {
    
      this.retroRight = right;
    });
    
    this.sharedService.currentRetro.subscribe((retro: Retro) => {
      this.retro = retro;
    });
    
  }
  ngOnInit() {
   
    this.getSubjects();
    this.existUser();

    this.subject.companyId = this.authService.currentUserValue.companyId;
    this.getAllCompany();
  }

  selectSubject(subject: any) {
    this.sharedService.selectSubject.next(subject);
    this.sharedService.isShowSubject.next(false);
    this.sharedService.tabSource.next("/retro/template");
    if(this.authService.hasRole("Leader")){
      
     
      let retro=new Retro();
      retro.id=this.retroRight.retroId;
      retro.state=2;
      retro.currentPage="/retro/template";
      retro.templateId=this.retro.templateId? this.retro.templateId:"";
      // this.chatService.setCurrentRetro(retro);
      let selectSubjectDto=new SubjectDto();
      selectSubjectDto.id=subject.id;
      selectSubjectDto.subjectTitle=subject.subjectTitle;
      selectSubjectDto.subjectDescription=subject.subjectDescription;
      selectSubjectDto.retroId=this.retroRight.retroId;
  
      this.chatService.setSelectedSubject(selectSubjectDto);
     }
  }

  existUser() {
    this.isUser=this.authService.hasRole("Member");
 }

 private subscribeToCurrentRetroEvents(): void {
  this.chatService.currentRetroReceived.subscribe((retro: Retro) => {
    this._ngZone.run(() => {
    
      if(this.authService.hasRole("Member")) {

        this.sharedService.currentRetro.next(retro);
        this.sharedService.tabSource.next(retro.currentPage);
      }
         

    });
  });
}

private getSelectedSubjectEvents(): void {
  this.chatService.subjectReceived.subscribe((subject: Subject) => {
    this._ngZone.run(() => {
    
        this.sharedService.selectSubjectSetValue(subject);
        

    });
  });
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
    // filter.retroId=this.retroRight.retroId;

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
        title: this.translate.instant("common.topic_not_found") ,
        text: this.translate.instant("common.topic_create_request"), 
     
        type: "warning",
        showCancelButton: true,
        confirmButtonClass: "btn btn-success",
        cancelButtonClass: "btn btn-danger",
        confirmButtonText: this.translate.instant("common.yes"),
        cancelButtonText: this.translate.instant("common.no"),
        buttonsStyling: false,
      }).then((result) => {
        if (result.value) {
          $(".btn-subject-create").click();
        }
      });
    }
    if (type == "warning-message-and-confirmation-delete") {
      swal({
        title: this.translate.instant("common.warning"),
        text: this.translate.instant("common.confirm_delete"),

        type: "warning",
        showCancelButton: true,
        confirmButtonClass: "btn btn-success",
        cancelButtonClass: "btn btn-danger",
        confirmButtonText: this.translate.instant("common.yes"),
        cancelButtonText: this.translate.instant("common.no"),
      }).then((result) => {
        if (result.value) {
          this.removeSubject(id);
        }
      });
    }
  }
}
