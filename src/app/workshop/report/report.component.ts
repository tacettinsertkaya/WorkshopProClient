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


  template: Template = new Template();

  constructor(

    private _ngZone: NgZone,
    private router: Router,
    private chatService: ChatService,
    private userService: UserService,
    private messageService: MessageService,
    private retroConfigurationService: RetroConfigurationService,
    private subjectService: SubjectsService,
    private categoryService: CategoryService,
    private templateService: TemplateService,
    private sharedService: SharedService) {
    this.sharedService.currentRetro.subscribe((retro: Retro) => {
      this.retro = retro;
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


  private subscribeToCurrentRetroEvents(): void {
    this.chatService.currentRetroReceived.subscribe((retro: Retro) => {
      this._ngZone.run(() => {
        if (retro.currentPage == "/finish") {
          localStorage.removeItem('currentUser');
          this.userService.currentUserSetValue(null);
          this.router.navigate(['/login']);
          $.notify(
            {
              icon: "ti-gift",
              message: "Retro tamamlandı. Üyelerin sistemden cıkışı sağlandı",
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
      })
    });
  }

  @ViewChild('content') content: ElementRef;
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
            this.categorizedMessages = this.categorizedMessages.slice(0, 10);;
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

    if (this.userService.hasRole("Leader")) {

      let retro = new Retro();
      retro.id = this.retro.id;
      retro.state = 3;
      retro.currentPage = "/finish"
      this.chatService.setCurrentRetro(retro);
    }
  }



}








