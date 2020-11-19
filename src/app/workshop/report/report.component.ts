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

declare var $: any;


@Component({
  selector: "app-report-cmp",
  templateUrl: "./report.component.html",
  styleUrls:["./report.component.css"]
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


  constructor(
    
    private _ngZone: NgZone,
    private router: Router,
    private chatService: ChatService,
    private messageService: MessageService,
    private retroConfigurationService: RetroConfigurationService,
    private subjectService: SubjectsService,
    private categoryService: CategoryService,
    private sharedService: SharedService) {
    this.sharedService.currentRetro.subscribe((retro: Retro) => {
      this.retro = retro;
    });

    this.sharedService.tabSource.subscribe((tab: string) => {
      if (".idea-archive" == tab) {
        this.getMessage(this.retro.id);
        this.getSubject(this.retro.id);
      }

    });

  }


  @ViewChild('content') content: ElementRef;
  public SavePDF(): void {

    var pdf = new jsPDF('l', 'pt', 'a4');
    console.log("test", pdf);
    var options = {
      pagesplit: true
    };

    pdf.addHTML(document.getElementById('report-content'), 0, 0, options, function () {
      pdf.save("report.pdf");
    });


  }




  ngOnInit() {
   

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


  private getMessage(retroId) {

    this.messageService
      .getAllNonCategoryMessage(retroId)
      .pipe(first())
      .subscribe(
        (data) => {
          console.log("non-category", data);
          this.messages = data.filter(p=>p.voteCount==0);
          this.categorizedMessages=data.filter(p=>p.voteCount>0);

          if(this.categorizedMessages.length>10){
            let  overdata =this.categorizedMessages.slice(11,this.categorizedMessages.length);
            this.categorizedMessages=this.categorizedMessages.slice(0,10);;
            this.messages.push(...overdata);

          }
          this.sortedlist();
          this.showOverlay = false;
        },
        (error) => { }
      );
  }

  // private getCategory(retroId) {
  //   this.messageService
  //     .getAllCategoryMessage(retroId)
  //     .pipe(first())
  //     .subscribe(
  //       (data) => {
  //         console.log("category", data);
  //         data.forEach(item => {
  //           this.categorizedMessages.push(...item.messages);
  //         });
  //        
  //       },
  //       (error) => { }
  //     );
  // }

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







}
