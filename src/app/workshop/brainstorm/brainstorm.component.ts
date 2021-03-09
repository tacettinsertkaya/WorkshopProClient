import { Component, ElementRef, NgZone, OnInit, ViewChild } from "@angular/core";
import { ChatService } from "../../services/chat.service";
import { Message } from "../../models/message";
import { MessageService } from "../../services/message.service";
import { first } from "rxjs/operators";
import { TemplateService } from "app/services/template.service";
import { Template } from "app/models/template";
import { SharedService } from "app/services/shared.service";
import { Subject } from "app/models/subject";
import { RetroConfigration } from "app/models/retro-configuration";
import { UserService } from "app/services/user.service";
import { Retro } from "app/models/retro";
import { Router } from "@angular/router";
import { UserRight } from "app/models/userRight";
import { RetroConfigurationService } from "app/services/retro-configuration";
import { AlertifyService } from "app/services/alertify.service";
import { animate, query, stagger, state, style, transition, trigger } from "@angular/animations";
import * as firebase from 'firebase';
import { snapshotToArray } from "app/helpers/firebase-helper";

declare var $: any;
@Component({
  moduleId: module.id,
  // tslint:disable-next-line: component-selector
  selector: "brainstorm-cmp",
  templateUrl: "brainstorm.component.html",
  animations: [
    trigger('slideDownUp', [
      transition("* => *", [
        // each time the binding value changes
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
      // transition(':enter', [style({ opacity: 0 }), animate('.5s ease-out')]),
      // transition(':leave', [animate('.5s ease-out', style({ opacity: 1 }))]),
    ]),
    // trigger(
    //   'inOutAnimation', 
    //   [
    //     transition(
    //       ':enter', 
    //       [
    //         style({  opacity: 0 }),
    //         animate('1s ease-out', 
    //                 style({ opacity: 1 }))
    //       ]
    //     ),
    //     transition(
    //       ':leave', 
    //       [
    //         style({ opacity: 1 }),
    //         animate('1s ease-in', 
    //                 style({  opacity: 0 }))
    //       ]
    //     )
    //   ]
    // )
  ]
})
export class BrainstormComponent implements OnInit {
  title = "ClientApp";
  txtMessage = "";
  uniqueID: string = new Date().getTime().toString();
  messages = new Array<Message>();
  message = new Message();
  inputText = {};
  retroRight: UserRight = new UserRight();
  selectedSubject: Subject;
  template = new Template();
  isUser:boolean=false;
  retro:Retro=new Retro();
  templateId:string;
  @ViewChild("myDiv") divView: ElementRef;

  constructor(
    private chatService: ChatService,
    private _ngZone: NgZone,
    private retroService: RetroConfigurationService,
    private messageService: MessageService,
    private authService: UserService,
    private alertifyService:AlertifyService,
    private templateService: TemplateService,
    private sharedService: SharedService,
    private router: Router,
  ) {

    this.subscribeToEvents();
    this.retroConfigurationToEvents();
    this.subscribeToCurrentRetroEvents();

    this.sharedService.messageSource.subscribe((message: string) => {
      this.getTemplate(message);
    });

    this.sharedService.selectSubject.subscribe((subject: Subject) => {
      this.selectedSubject = subject;
    });

    this.sharedService.retroRight.subscribe((right: UserRight) => {
      this.retroRight = right;
    });
    this.sharedService.currentRetro.subscribe((retro: Retro) => {
      this.retro = retro;
    });



    this.firebaseMessage();


  }

  firebaseMessage(){
    firebase.default.database().ref('chats/').on('value', resp => {
      console.log("message",snapshotToArray(resp));
      // this.chats = [];
      // this.chats = snapshotToArray(resp);
      // setTimeout(() => this.scrolltop = this.chatcontent.nativeElement.scrollHeight, 500);
    });
  }

  ngOnInit(): void {
    this.getMessage();    
    this.existUser();
    this.getTemplate(this.retro.templateId);
  }

  existUser() {
    this.isUser=this.authService.hasRole("Member");
 }


 

  private subscribeToCurrentRetroEvents(): void {
    this.chatService.currentRetroReceived.subscribe((retro: Retro) => {
      this._ngZone.run(() => {
        this.retro=retro;
          this.sharedService.currentRetro.next(retro);
          this.getTemplate(retro.templateId);
        if(this.authService.hasRole("Member")) 
           this.sharedService.tabSource.next("."+retro.currentPage.replace("/",""));

      });
    });
  }

  getTemplate(templateId: any) {

    this.templateService
      .getTemplate(templateId)
      .pipe(first())
      .subscribe(
        (data) => {
          this.template = data;
        
        },
        (error) => {}
      );
  }

  filterTrim(x) {
    return x.replace(/^\s+|\s+$/gm, "");
  }

  nextComment() {
    // this.sharedService.tabSource.next(".categorize");
    // if(this.authService.hasRole("Leader")){
    
    //       let retro=new Retro();
    //       retro.id=this.retroRight.retroId;
    //       retro.state=2;
    //       retro.currentPage="/categorize"
    //       this.chatService.setCurrentRetro(retro);
    // }

  }

  sendMessage(headerId: string): void {
    const msg = this.inputText[headerId];
    if (this.filterTrim(msg) !== "") {

      let currentUser=this.authService.currentUserValue;
     
    
      this.message = new Message();
      this.message.userId=currentUser.userId;
      this.message.clientuniqueid = headerId;
      this.message.type = "sent";
      this.message.messageText = msg;
      this.message.subjectId = this.selectedSubject.id;
      this.message.date = new Date();
      this.message.isCategorized = false;
      this.message.retroId = this.retro.id;
      this.chatService.sendMessage(this.message);
      this.inputText[headerId] = "";

      const newMessage = firebase.default.database().ref('messages/').push();
      newMessage.set(this.message);

    }
  }
  private subscribeToEvents(): void {
    this.chatService.messageReceived.subscribe((message: Message) => {
      this._ngZone.run(() => {
        message.subjectId = this.selectedSubject.id;
        this.messages.push(message);
        this.sharedService.allMessage.next(this.messages);
        this.sortedlist();
      });
    });
  }

  sortedlist() {
    this.messages.sort(function (a, b) {
      return new Date(b.date).getTime() - new Date(a.date).getTime();
    });
  }

  private retroConfigurationToEvents(): void {
    let currentUser=this.authService.currentUserValue;
    this.chatService.retroConfigurationReceived.subscribe(
      (retro: UserRight) => {
        this._ngZone.run(() => {

         if(currentUser.userId==retro.userId)
          this.retroRight = retro;
        });
      }
    );
  }

  private getMessage() {

    this.messageService
      .getAllMessage(this.retroRight.retroId)
      .pipe(first())
      .subscribe(
        (data) => {
          this.messages = data;
          
          this.sortedlist();
        },
        (error) => {}
      );
  }
}
