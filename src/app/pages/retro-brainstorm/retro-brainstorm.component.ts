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
import { NavigationStart, Router } from "@angular/router";
import { UserRight } from "app/models/userRight";
import { RetroConfigurationService } from "app/services/retro-configuration";
import { AlertifyService } from "app/services/alertify.service";
import { animate, query, stagger, state, style, transition, trigger } from "@angular/animations";
import * as firebase from 'firebase';
import { snapshotToArray } from "app/helpers/firebase-helper";
import { Subscription } from "rxjs";
import { SubjectsService } from "app/services/subject.service";
declare var $: any;


@Component({
  selector: 'app-retro-brainstorm',
  templateUrl: './retro-brainstorm.component.html',
  styleUrls: ['./retro-brainstorm.component.css'],
  animations: [

    trigger('slideDownUp', [
      transition("* => *",
        [
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
export class RetroBrainstormComponent implements OnInit {

  title = "ClientApp";
  txtMessage = "";
  uniqueID: string = new Date().getTime().toString();
  messages = new Array<Message>();
  message = new Message();
  inputText = {};
  selectedSubject: Subject;
  template = new Template();
  isUser: boolean = false;
  templateId: string;
  @ViewChild("myDiv") divView: ElementRef;
  subscription: Subscription
  retroRight: UserRight = new UserRight();

  currentRetro: Retro;
  retroId: string = '';

  isDisabled:boolean=false;

  constructor(
    private chatService: ChatService,
    private _ngZone: NgZone,
    private retroService: RetroConfigurationService,
    private messageService: MessageService,
    private authService: UserService,
    private alertifyService: AlertifyService,
    private templateService: TemplateService,
    private sharedService: SharedService,
    private router: Router,
    private subjectService: SubjectsService,
    private configureService: RetroConfigurationService,
  ) {


    firebase.default.database().ref('messages/').on('value', (resp: any) => {
      if (this.currentRetro) {
        var data = snapshotToArray(resp);
        const messages = data.find(x => x.retroId === this.currentRetro.id);
        if (messages !== undefined) {
          this.messages = messages;
          // this.sortedlist();
        }
      }
    });
  }


  ngOnInit(): void {

    this.existUser();

    this.retroId = this.authService.currentRetroIdValue;
    if (this.retroId) {
      this.getLastCurrentRetro(this.retroId);
    }
  }

  existUser() {
    this.isUser = this.authService.hasRole("Member");
  }



  getLastCurrentRetro(retroId) {

    this.configureService
      .getCurrentRetro(retroId)
      .pipe(first())
      .subscribe(
        (res) => {

          this.currentRetro = res;


          if (this.currentRetro) {

            this.getRetroSubject(this.currentRetro.id);
            this.getTemplate(this.currentRetro.templateId);
            this.getUserRight(this.currentRetro.id);
          }
        },
        (error) => {

        });
  }

  getFirebaseMessage() {

    firebase.default.database().ref('messages/').on('value', (resp: any) => {

      var data = snapshotToArray(resp);
      let messages = data.filter(x => x.retroId === this.currentRetro.id);

      if (messages !== undefined) {
        this.messages = messages.reverse();

      }
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

  private getRetroSubject(retroId) {
    this.subjectService
      .getRetroSubject(retroId)
      .pipe(first())
      .subscribe(
        (res) => {

          this.selectedSubject = res;

        },
        (error) => {

        });
  }





  getTemplate(templateId: any) {

    this.templateService
      .getTemplate(templateId)
      .pipe(first())
      .subscribe(
        (data) => {
          this.template = data;
          this.getFirebaseMessage();
        },
        (error) => { }
      );
  }

  filterTrim(x) {
    return x.replace(/^\s+|\s+$/gm, "");
  }



  sendMessage(headerId: string): void {
    const msg = this.inputText[headerId];
    
    if (this.filterTrim(msg) !== "") {

      let currentUser = this.authService.currentUserValue;


      this.message = new Message();
      this.message.userId = currentUser.userId;
      this.message.clientuniqueid = headerId;
      this.message.type = "sent";
      this.message.messageText = msg;
      this.message.subjectId = this.selectedSubject.id;
      this.message.date = new Date();
      this.message.isCategorized = false;
      this.message.retroId = this.currentRetro.id;

      this.configureService.newMessage(this.message).subscribe((res) => {
        this.retroRight = res;
        this.inputText[headerId] = "";
        const newMessage = firebase.default.database().ref('messages/').push();
        newMessage.set(this.message);
      });




    }
  }


  sortedlist() {
    this.messages.sort(function (a, b) {
      return new Date(b.date).getTime() - new Date(a.date).getTime();
    });
  }


  // private getMessage() {

  //   this.messageService
  //     .getAllMessage(this.currentRetro.id)
  //     .pipe(first())
  //     .subscribe(
  //       (data) => {
  //         this.messages = data;

  //         this.sortedlist();
  //       },
  //       (error) => { }
  //     );
  // }


}
