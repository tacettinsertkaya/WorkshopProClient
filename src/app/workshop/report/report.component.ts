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
import { jsPDF } from "jspdf";
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

declare var $: any;


@Component({
  selector: "app-report-cmp",
  templateUrl: "./report.component.html",
  styleUrls: ["./report.component.css"]
})
export class ReportComponent implements OnInit {
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
  selectSubject: Subject = null;
  retro: Retro = new Retro();

  public showOverlay = true;

  currentCompany: Company;

  template: Template = new Template();
  retroRight: RetroConfigration;

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
    private sharedService: SharedService) {
    this.sharedService.currentRetro.subscribe((retro: Retro) => {
      this.retro = retro;
    });

    this.sharedService.retroRight.subscribe((right: RetroConfigration) => {
      this.retroRight = this.sharedService.retroRightValue;
    });


    this.sharedService.tabSource.subscribe((tab: string) => {
      if (".idea-archive" == tab) {
        this.getMessage(this.retro.id);
        this.getSubject(this.retro.id);
        this.getRetroTemplate(this.retro.id);

      }

    });
    this.subscribeToCurrentRetroEvents();

  }

  isLeader() {
    return this.userService.hasRole("Leader");

  }

  private subscribeToCurrentRetroEvents(): void {
    this.chatService.currentRetroReceived.subscribe((retro: Retro) => {
      this._ngZone.run(() => {
        if (retro.currentPage == "/finish") {
          this.chatService.userOffline();

          localStorage.removeItem('currentUser');
          localStorage.removeItem('retroRight');
          localStorage.removeItem('selectSubject');
          this.userService.currentUserSetValue(null);
          this.router.navigate(['/login']);
          
          this.alertifyService.success()

          swal({
            title: "Başarılı",
            text: "Retro tamamlandı. Üyelerin sistemden cıkışı sağlandı",
            type: "success",
            timer:2000
          })
         
        }
      })
    });
  }

  @ViewChild('content', { static: true }) content: ElementRef;
  public SavePDF(): void {

    var pdf = new jsPDF('l', 'pt', 'a4');
    var options = {
      pagesplit: true
    };

    pdf.addHTML(document.getElementById('report-content'), 0, 0, options, function () {
      pdf.save("report.pdf");
    });


  }




  ngOnInit() {
    if (this.isLeader()) {
      this.currentCompany = this.userService.currentUserValue.company;
    }

    this.getRetroTemplate(this.retro.id);

  }




  private getSubject(retroId) {
    this.subjectService
      .getRetroSubject(retroId)
      .pipe(first())
      .subscribe(
        (data) => {

          this.subject = data;
          this.sortedlist();
        },
        (error) => { }
      );
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

          }
          this.sortedlist();
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
    this.retroConfigurationService.getRetroReport(this.retro.id).subscribe((data) => {

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

      this.sharedService.tabSource.next("");
      if (this.userService.hasRole("Leader")) {

        let retro = new Retro();
        retro.id = this.retroRight.retroId;
        retro.state = 2;
        retro.currentPage = "/retro/report"
        retro.templateId=this.retro.templateId;
        // this.chatService.setCurrentRetro(retro);
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
      this.groupService.getReset(filter).pipe().subscribe((res) => {

        let retro = new Retro();
        retro.id = this.retro.id;
        retro.state = 3;
        retro.currentPage = "/finish"
        retro.templateId=this.retro.templateId;
        // this.chatService.setCurrentRetro(retro);

      });
    });
  }



}








