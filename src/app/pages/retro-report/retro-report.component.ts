import { Component, ModuleWithComponentFactories, NgZone, OnInit } from "@angular/core";
import { Categorized } from "app/models/categorized";
import { Category } from "app/models/category";
import { CategorizedMessage } from "app/models/dto/categorized-message";
import { VoteDto } from "app/models/dto/vote-dto";

import { Message } from "app/models/message";
import { Subject } from "app/models/subject";
import { CategoryService } from "app/services/category.service";
import { ChatService } from "app/services/chat.service";
import { MessageService } from "app/services/message.service";
import { SharedService } from "app/services/shared.service";
import { first } from "rxjs/operators";
import { Router } from "@angular/router"
import { Retro } from "app/models/retro";
import { SubjectsService } from "app/services/subject.service";
import * as moment from 'moment'

import { ViewChild, ElementRef } from '@angular/core';
import { RetroConfigurationService } from "app/services/retro-configuration";
import { NgxSpinnerService } from "ngx-spinner";
import { TemplateService } from "app/services/template.service";
import { Template } from "app/models/template";
import { UserService } from "app/services/user.service";
import { Company } from "app/models/company";
import { CompanyService } from "app/services/company.service";
import { GroupService } from "app/services/group.service";
import { GroupFilter } from "app/models/dto/group-filter";
import { AlertifyService } from "app/services/alertify.service";
import swal from "sweetalert2";
import { RetroConfigration } from "app/models/retro-configuration";
import { UserRight } from "app/models/userRight";
import { snapshotToArray } from "app/helpers/firebase-helper";
import * as firebase from 'firebase';
import { ReportFile } from "app/models/dto/report-file";
import { OnlineUser } from "app/models/dto/online-user";
import { FirebaseOnlineUser } from "app/models/firebase-online-user";
import { RetroReset } from "app/models/dto/retro-reset";
import { dynamicSort } from "app/helpers/object-short";

declare var $: any;


@Component({
  selector: 'app-retro-report',
  templateUrl: './retro-report.component.html',
  styleUrls: ['./retro-report.component.css']
})
export class RetroReportComponent implements OnInit {

  message = new Message();
  messages = new Array<Message>();

  categorys = new Array<CategorizedMessage>();
  subject: Subject = new Subject();
  archiveMessagesList = Array<Message>();
  categorized: Categorized = new Categorized();
  categorizedMessages = new Array<Message>();
  allMessages = new Array<Message>();
  nonCategorizedMessages = new Array<CategorizedMessage>();
  comments = new Array<any>();
  retro: Retro = new Retro();

  public showOverlay = true;

  currentCompany: Company;

  template: Template = new Template();

  retroRight: UserRight = new UserRight();
  currentRetro: Retro;

  onlineUsers: Array<FirebaseOnlineUser> = [];
  retroId: string = '';


  constructor(

    private _ngZone: NgZone,
    private router: Router,
    private chatService: ChatService,
    private groupService: GroupService,
    private alertifyService: AlertifyService,
    private userService: UserService,
    private messageService: MessageService,
    private companyService: CompanyService,
    private retroConfigurationService: RetroConfigurationService,
    private subjectService: SubjectsService,
    private categoryService: CategoryService,
    private templateService: TemplateService,
    private configureService: RetroConfigurationService,
    private sharedService: SharedService) {







  }



  ngOnInit() {
    if (this.isLeader()) {
      this.currentCompany = this.userService.currentUserValue.company;
    }

    this.retroId = this.userService.currentRetroIdValue;

    if (this.retroId) {
      this.getLastCurrentRetro(this.retroId);
    }




  }

  getLastCurrentRetro(retroId) {

    this.configureService
      .getCurrentRetro(retroId)
      .pipe(first())
      .subscribe(
        (res) => {

          this.currentRetro = res;


          if (this.currentRetro) {

            // this.getFirebaseMessage();
            this.getRetroSubject(this.currentRetro.id);
            this.getRetroTemplate(this.currentRetro.id);

            this.getUserRight(this.currentRetro.id);
            this.getOnlineUser();
          }
        },
        (error) => {

        });
  }




  getUserRight(retroId) {
    let retro = new Retro();
    retro.id = retroId;
    retro.userId = this.userService.currentUserValue.userId;

    this.configureService
      .getUserRight(retro)
      .pipe(first())
      .subscribe(
        (res) => {

          this.retroRight = res;

        },
        (error) => {

        });

  }

  private getRetroSubject(retroId) {
    this.subjectService
      .getRetroSubject(retroId)
      .pipe(first())
      .subscribe(
        (res) => {

          this.subject = res;

        },
        (error) => {

        });
  }






  isLeader() {
    return this.userService.hasRole("Leader");

  }




  getOnlineUser() {
    firebase.default.database().ref('onlineuser/').on('value', (resp: any) => {

      var res = snapshotToArray(resp);
      if (this.currentRetro) {
        console.log("onlineUser-res", res);

        if (res.length > 0) {

          this.onlineUsers = res.filter(p => p.retroId == this.currentRetro.id);
          console.log("onlineUser", this.onlineUsers);

        }

      }
    });
  }








  private GetHeaderCategorizedMessages(headerId) {

    let filteredData = this.categorizedMessages.filter(p => p.clientuniqueid == headerId);
    return filteredData;
  }

  private GetHeaderMessage(headerId) {

    let filteredData = this.messages.filter(p => p.clientuniqueid == headerId);
    return filteredData;
  }

  private getRetroTemplate(retroId) {
    this.templateService
      .getTemplateByRetroId(retroId)
      .pipe(first())
      .subscribe(
        (data) => {
          this.template = data;
          this.getMessage(this.currentRetro.id);
        },
        (error) => { }
      );
  }

  private getMessage(retroId) {

    this.messageService
      .getAllNonCategoryMessage(retroId)
      .pipe(first())
      .subscribe(
        (data) => {
          this.messages = data.filter(p => p.voteCount == 0);
          this.categorizedMessages = data.filter(p => p.voteCount > 0);

          if (this.categorizedMessages.length > 10) {
            let overdata = this.categorizedMessages.slice(11, this.categorizedMessages.length);
            this.categorizedMessages = this.categorizedMessages.slice(0, 10);
           

            this.messages.push(...overdata);
           

            console.log("this.messages",this.messages);
          }
          // this.sortedlist();
          this.messages.sort(dynamicSort("voteCount"))
          this.categorizedMessages.sort(dynamicSort("voteCount"));
          this.showOverlay = false;
        },
        (error) => { }
      );
  }



  sortedlist() {
    this.messages.sort(function (a, b) {
      return new Date(b.date).getTime() - new Date(a.date).getTime();
    });
  }


  createPdf() {
    this.showOverlay = true;
    let data = new ReportFile();
    data.retroId = this.currentRetro.id;
    data.onlineUsers = this.onlineUsers;

    this.retroConfigurationService.getRetroReport(data).subscribe((data) => {

      let blob = new Blob([data], { type: 'application/pdf' });

      var downloadURL = window.URL.createObjectURL(data);
      var link = document.createElement('a');
      link.href = downloadURL;
      link.download = "report.pdf";
      link.click();
      this.showOverlay = false;

    });
  }



  finishRetro() {

    if (this.isLeader()) {

      this.currentCompany.retroCount = this.currentCompany.retroCount - 1;
      this.updateCompany(this.currentCompany);

      if (this.userService.hasRole("Leader")) {

        let retro = new Retro();
        retro.id = this.currentRetro.id;
        retro.state = 2;
        retro.currentPage = "/current/report"
        retro.templateId = this.retro.templateId;


      }

    }
  }

  updateCompany(company: Company) {
    this.companyService.update(company).pipe().subscribe((res) => {

      let currentUser = this.userService.currentUserValue;
      currentUser.company = res;
      this.userService.currentUserSetValue(currentUser);

      let filter = new GroupFilter();
      filter.companyId = this.userService.currentUserValue.companyId;
      filter.leaderId = this.userService.currentUserValue.userId;

      let resetData = new RetroReset();
      resetData.filter = filter;

      let userIds = this.onlineUsers.map(function (item) { return item.userId; });
      resetData.users = userIds;

      
      this.groupService.getReset(resetData).pipe().subscribe((res) => {

      

      });

      let retro = new Retro();
      retro.id = this.currentRetro.id;
      retro.currentPage = "/current/finish"

      const newMessage = firebase.default.database().ref('currentpath/').push();
      newMessage.set(retro);



    });
  }

}
