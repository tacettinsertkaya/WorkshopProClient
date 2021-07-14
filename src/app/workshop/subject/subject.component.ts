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
import { RetroUserReport } from "app/models/dto/retro-user-report";
import { RetroConfigurationService } from "app/services/retro-configuration";
import { ReportFile } from "app/models/dto/report-file";
import * as moment from 'moment'

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
  isUser: boolean = false;

  companys: Array<Company> = [];
  companyId: string = '';

  retroList: Array<RetroUserReport> = [];
  showOverlay = false;

  constructor(
    private subjectService: SubjectsService,
    private authService: UserService,
    private sharedService: SharedService,
    private alertifyService: AlertifyService,
    private retroConfigurationService: RetroConfigurationService,
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
        if (this.authService.hasRole("Member")) {
          this.sharedService.tabSource.next(retro.currentPage);

        }

      });
    });
  }


  getDate(startDate: Date, endDate: Date) {
    var date1: any = new Date(moment(endDate).format());
    var date2: any = new Date(moment(startDate).format());

    let diffMs = (date1 - date2); // milliseconds
    let diffDays = Math.floor(diffMs / 86400000); // days
    let diffHrs = Math.floor((diffMs % 86400000) / 3600000); // hours
    let diffMins = Math.round(((diffMs % 86400000) % 3600000) / 60000);

    if (diffMins < 0)
      return 0;
      
    return diffMins;
    // let diff = {
    //   seconds: 0,
    //   minutes: diffMins,
    //   hours: diffHrs,
    //   days: diffDays,
    // };

    // return diff;
  }



  getRetro(subjectId: string) {

    this.subjectService
      .getRetroListBySubject(subjectId)
      .pipe(first())
      .subscribe(
        (res) => {
          this.retroList = res;
          console.log("this.retrolist", this.retroList);




          $('#retroModal').modal('show');
        },
        (error) => {
          this.alertifyService.error();

        }
      );
  }
  getRetroReport(retroId: string) {

    this.showOverlay = true;


    let data = new ReportFile();
    data.retroId = retroId;

    this.retroConfigurationService.getRetroUserReport(data).subscribe((data) => {
      let blob = new Blob([data], { type: 'application/pdf' });
      var downloadURL = window.URL.createObjectURL(data);
      var link = document.createElement('a');
      link.href = downloadURL;
      link.download = "report.pdf";
      link.click();
      this.showOverlay = false;

    });



  }


  getSubjects() {
    let filter = new SubjectFilter();
    filter.companyId = this.authService.currentUserValue.companyId;
    filter.isAdmin = true;

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

    console.log("data", data);

    if (!this.isUpdate) {
      data.createRole = 'Admin';
      data.userId = this.authService.currentUserValue.userId;
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
