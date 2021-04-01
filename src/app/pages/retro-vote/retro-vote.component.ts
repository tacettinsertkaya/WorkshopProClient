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
import { RetroConfigurationService } from "app/services/retro-configuration";
import { SharedService } from "app/services/shared.service";
import { SubjectsService } from "app/services/subject.service";
import { TemplateService } from "app/services/template.service";
import { UserService } from "app/services/user.service";
import { first } from "rxjs/operators";

declare var $: any;

import * as firebase from 'firebase';
import { snapshotToArray } from "app/helpers/firebase-helper";

@Component({
  selector: 'app-retro-vote',
  templateUrl: './retro-vote.component.html',
  styleUrls: ['./retro-vote.component.css'],
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

    trigger('fade', [
      transition('* => *', [ // using status here for transition
        style({ opacity: 0 }),
        animate(1000, style({ opacity: 1 }))
      ]),
      transition('* => void', [
        animate(1000, style({ opacity: 0 }))
      ])
    ])
  
  ]
})
export class RetroVoteComponent implements OnInit {

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

  currentRetro: Retro;
  selectSubject: Subject = new Subject();
  
  constructor(
    private _ngZone: NgZone,
    private chatService: ChatService,
    private messageService: MessageService,
    private categoryService: CategoryService,
    private sharedService: SharedService,
    private authService: UserService,
    private templateService: TemplateService,
    private subjectService: SubjectsService,
    private configureService: RetroConfigurationService,

  ) {


    firebase.default.database().ref('vote/').limitToLast(1).on('value', (resp: any) => {
      if (this.currentRetro) {
        var data = snapshotToArray(resp);
console.log("data-vote",data);
        if (data.length>0) {
          this.messageService
          .getAllNonCategoryMessage(this.currentRetro.id)
          .pipe(first())
          .subscribe(
            (data) => {
              this.messages = data;
            },
            (error) => { }
          );

        }
      }
    });

  }

  ngOnInit() {
    this.getLastCurrentRetro();
    this.existUser();

  }

  getLastCurrentRetro() {

    this.configureService
      .getLastRetro()
      .pipe(first())
      .subscribe(
        (res) => {

          this.currentRetro = res;


          if (this.currentRetro) {
            this.getRetroSubject(this.currentRetro.id);
            this.getRetroTemplate(this.currentRetro.id);
            this.getCategory();
            this.getUserRight(this.currentRetro.id);
            this.getAllMessage();
          }
        },
        (error) => {

        });
  }

  getAllMessage(){
    
    this.messageService
    .getAllNonCategoryMessage(this.currentRetro.id)
    .pipe(first())
    .subscribe(
      (data) => {
        this.messages = data;
      },
      (error) => { }
    );
  }

  private getRetroSubject(retroId) {
    this.subjectService
      .getRetroSubject(retroId)
      .pipe(first())
      .subscribe(
        (res) => {

          this.selectSubject = res;

        },
        (error) => {

        });
  }

  getUserRight(retroId) {
    let retro = new Retro();
    retro.id = retroId;
    retro.userId = this.authService.currentUserValue.userId;

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





  existUser() {
    this.isUser = this.authService.hasRole("Member");
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

    this.configureService.newVote(data).subscribe((res) => {
      const newMessage = firebase.default.database().ref('vote/').push();
      newMessage.set(data);
      this.retroRight=res;
      
    });

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




  private getCategory() {

    this.messageService
      .getAllNonCategoryMessage(this.currentRetro.id)
      .pipe(first())
      .subscribe(
        (data) => {
          this.messages = data;
        },
        (error) => { }
      );
  }





}
