import { Component, NgZone, OnInit } from "@angular/core";
import { Subject } from "app/models/subject";
import { SubjectsService } from "app/services/subject.service";
import { first } from "rxjs/operators";
import { SharedService } from "app/services/shared.service";
import Swal  from "sweetalert2";
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
import { RetroHubService } from "app/services/hub/retro-hub.service";
import { UserHubService } from "app/services/hub/user-hub.service";
import { RetroConfigurationService } from "app/services/retro-configuration";
import { GuidGenerator } from "app/helpers/guid-generator";

declare var $: any;
import * as firebase from 'firebase';
import { snapshotToArray } from "app/helpers/firebase-helper";
import { TranslateService } from "@ngx-translate/core";

@Component({
  selector: 'app-retro-subject',
  templateUrl: './retro-subject.component.html',
  styleUrls: ['./retro-subject.component.css']
})
export class RetroSubjectComponent implements OnInit {
  subjects: Array<Subject> = [];
  subject: Subject = new Subject();
  isUpdate: boolean = false;
  isUser: boolean = false;
  retroRight: RetroConfigration = new RetroConfigration();
  retro: Retro = new Retro();
  selectSubjectId: any = "";
  companys: Array<Company> = [];
  companyId: string = '';

  retroId: string = '';
  currentUserId: string = '';

  constructor(
    private subjectService: SubjectsService,
    private sharedService: SharedService,
    private authService: UserService,
    private chatService: ChatService,
    private configurationService: RetroConfigurationService,
    private retroHubService: RetroHubService,
    private userHubService: UserHubService,
    private alertifyService: AlertifyService,
    private companyService: CompanyService,
    private translate: TranslateService,
    private router: Router,


    private _ngZone: NgZone
  ) { }

  ngOnInit() {

    this.existUser();

    this.subject.companyId = this.authService.currentUserValue.companyId;
    this.getAllCompany();
    this.retroId = this.authService.currentRetroIdValue;

    if (this.retroId) {
      this.getSubjects();
    }

    this.currentUserId = this.authService.currentUserValue.userId

  }




  selectSubject(subject: any) {


    if (this.authService.hasRole("Leader")) {


      this.selectSubjectId = subject.id;

      let retro = new Retro();
      retro.id = this.retroId;
      retro.state = 2;
      retro.subjectId = this.selectSubjectId;
      retro.currentPage = "/current/template";

      this.configurationService.setCurrentRetro(retro).subscribe((res) => {
        let selectSubjectDto = new SubjectDto();
        selectSubjectDto.id = subject.id;
        selectSubjectDto.subjectTitle = subject.subjectTitle;
        selectSubjectDto.subjectDescription = subject.subjectDescription;
        selectSubjectDto.retroId = this.retroId;


        let current = new Retro();
        current.currentPage = "/current/template";
        current.id = this.retroId;
        const newMessage = firebase.default.database().ref('currentpath/').push();
        newMessage.set(current);


        this.configurationService.setSelectedSubject(selectSubjectDto).subscribe(
          (res) => {
            this.router.navigate(["/current/template"]);
          }
        );

      });



    }
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
          this.alertifyService.error()
        }
      );
  }

  isCheckOwner(subject: Subject) {

    return this.currentUserId == subject.userId;
  }

  getSubjects() {
    let filter = new SubjectFilter();
    filter.companyId = this.authService.currentUserValue.companyId;
    filter.retroId = this.retroId;

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

  getTitle() {
    if (this.isUpdate)
      return this.translate.instant("subject.edit_subject");
    else
      return this.translate.instant("subject.add_subject");
  }

  saveSubject() {
    let data = this.subject;
    this.subject.subjectTitle = this.subject.subjectTitle.replace(
      /[\t\r\n]/g,
      ""
    );


    if (!this.isUpdate) {
      data.createRole = "Leader";
      data.userId = this.authService.currentUserValue.userId;

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
      Swal.fire({
        title: this.translate.instant("common.topic_not_found"),
        text: this.translate.instant("common.topic_create_request"),
        icon: 'warning',
        showCancelButton: true,
        
        
        confirmButtonText: this.translate.instant('common.yes'),
        cancelButtonText: this.translate.instant('common.no'),
        buttonsStyling: false,
      }).then((result) => {
        if (result.value) {
          $(".btn-subject-create").click();
        }
      });
    }
    if (type == "warning-message-and-confirmation-delete") {
      Swal.fire({
        title: this.translate.instant("common.warning"),
        text: this.translate.instant("common.confirm_delete"),
        icon: 'warning',
        showCancelButton: true,
        
        
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
