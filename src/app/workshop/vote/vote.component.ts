import { animate, query, stagger, style, transition, trigger } from "@angular/animations";
import { Component, NgZone, OnInit } from "@angular/core";
import { Categorized } from "app/models/categorized";
import { Category } from "app/models/category";
import { CategorizedMessage } from "app/models/dto/categorized-message";
import { VoteDto } from "app/models/dto/vote-dto";

import { Message } from "app/models/message";
import { Retro } from "app/models/retro";
import { RetroConfigration } from "app/models/retro-configuration";
import { Subject } from "app/models/subject";
import { Template } from "app/models/template";
import { UserRight } from "app/models/userRight";
import { CategoryService } from "app/services/category.service";
import { ChatService } from "app/services/chat.service";
import { MessageService } from "app/services/message.service";
import { SharedService } from "app/services/shared.service";
import { TemplateService } from "app/services/template.service";
import { UserService } from "app/services/user.service";
import { first } from "rxjs/operators";

declare var $: any;

@Component({
  selector: "app-vote-cmp",
  templateUrl: "./vote.component.html",
  animations: [
    trigger('slideDownUp', [
      transition("* => *", [
        query(":leave", [stagger(500, [animate("0.5s", style({ opacity: 0 }))])], {
          optional: true
        }),
        query(
          ":enter",
          [
            style({ opacity: 0 }),
            stagger(500, [animate("0.5s", style({ opacity: 1 }))])
          ],
          { optional: true }
        )
      ])
     
    ]),
  
  ]
})
export class VoteComponent implements OnInit {
  message = new Message();
  categorys = new Array<CategorizedMessage>();
  subject: Subject = new Subject();

  categorized: Categorized = new Categorized();
  categorizedMessages = new Array<CategorizedMessage>();
  comments = new Array<any>();
  retroRight: RetroConfigration = new RetroConfigration();
  isUser: boolean = false;
  votedMessages = new Array<any>();
  messages:Array<Message>=[];

  retro: Retro = new Retro();
  template: Template = new Template();
  
  constructor(
    private _ngZone: NgZone,
    private chatService: ChatService,
    private messageService: MessageService,
    private categoryService: CategoryService,
    private sharedService: SharedService,
    private authService: UserService,
    private templateService: TemplateService,

  ) {
    this.retroConfigurationToEvents();
    this.subscribeToEvents();
    this.subscribeToCurrentRetroEvents();
    this.sharedService.retroRight.subscribe((right: RetroConfigration) => {
      this.retroRight = this.sharedService.retroRightValue;
    });
  }

  ngOnInit() {

    this.getCategory();
    this.existUser();
    this.getRetroTemplate( this.retroRight.retroId);

  }

  getComment(message: any) {

    this.getMessage(message.id);
    $('#modalComment').modal('show');
  }

  private GetHeaderMessage(headerId){

      let filteredData=this.messages.filter(p=>p.clientuniqueid==headerId);
    return filteredData;
  }

  private getRetroTemplate(retroId){
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


  private retroConfigurationToEvents(): void {
    let currentUser = this.authService.currentUserValue;
    this.chatService.retroConfigurationReceived.subscribe(
      (retro: UserRight) => {
        this._ngZone.run(() => {

          if (currentUser.userId == retro.userId)
            this.retroRight = retro;
        });
      }
    );
  }



  private subscribeToCurrentRetroEvents(): void {
    this.chatService.currentRetroReceived.subscribe((retro: Retro) => {
      this._ngZone.run(() => {
        this.messageService
          .getAllCategoryMessageOrderVote(this.retroRight.retroId)
          .pipe(first())
          .subscribe(
            (data) => {
              this.categorizedMessages = data;
            },
            (error) => { }
          );
        if (this.authService.hasRole("Member"))
          this.sharedService.tabSource.next(retro.currentPage);

      });
    });
  }
  existUser() {
    this.isUser = this.authService.hasRole("Member");
  }

  nextReport() {
    // this.sharedService.tabSource.next(".idea-archive");
    // if (this.authService.hasRole("Leader")) {

    //   let retro = new Retro();
    //   retro.id = this.retroRight.retroId;
    //   retro.state = 2;
    //   retro.currentPage = "/idea-archive"
    //   this.chatService.setCurrentRetro(retro);
    // }


  }


  isVotedCheck(messageId:any){

    let existVoted = this.votedMessages.filter(p => p == messageId)[0];
    if (existVoted == null || existVoted == undefined) {
          return false
    }
    else{
      return true;
    }

     
  }

  setVote(message: any) {
    let data = new VoteDto();
    let currentUser = this.authService.currentUserValue;

    let existVoted = this.votedMessages.filter(p => p == message.id)[0];

    if (existVoted == null || existVoted == undefined) {
      data.vote = true;
      this.votedMessages.push(message.id);
    }
    else {
      const index: number = this.votedMessages.indexOf(existVoted);
      this.votedMessages.splice(index, 1);
      data.vote = false;
    }

    data.messageId = message.id;
    data.retroId = this.retroRight.retroId;
    data.userId = currentUser.userId;

    // this.chatService.setVote(data);
  }

  private getMessage(messageId: number) {
    this.messageService
      .getMessageById(messageId)
      .pipe(first())
      .subscribe(
        (data) => {
          this.message = data;

        },
        (error) => { }
      );
  }

  private subscribeToEvents(): void {
    this.chatService.voteReceived.subscribe((message: Message) => {
      this._ngZone.run(() => {

        this.messageService
          .getAllNonCategoryMessage(this.retroRight.retroId)
          .pipe(first())
          .subscribe(
            (data) => {
              this.messages = data;
            },
            (error) => { }
          );
      });
    });
  }


  private getCategory() {

    this.messageService
      .getAllNonCategoryMessage(this.retroRight.retroId)
      .pipe(first())
      .subscribe(
        (data) => {
          this.messages = data;
        },
        (error) => { }
      );
  }







}
