import { Component, NgZone, OnInit } from "@angular/core";
import { ChatService } from "../../services/chat.service";
import { Message } from "../../models/message";
import { Comment } from "../../models/comment";
import { MessageService } from "../../services/message.service";
import { first } from "rxjs/operators";
import { TemplateService } from "app/services/template.service";
import { Template } from "app/models/template";
import { SharedService } from "app/services/shared.service";
import { Subject } from "app/models/subject";
import { RetroConfigration } from "app/models/retro-configuration";
import { Retro } from "app/models/retro";
import { UserService } from "app/services/user.service";
import { UserRight } from "app/models/userRight";
import { animate, query, stagger, style, transition, trigger } from "@angular/animations";
import { SubjectsService } from "app/services/subject.service";
import { RetroConfigurationService } from "app/services/retro-configuration";
import * as firebase from 'firebase';
import { snapshotToArray } from "app/helpers/firebase-helper";
import { convertActionBinding } from "@angular/compiler/src/compiler_util/expression_converter";

declare var $: any;

declare interface DataTable {
  headerRow: string[];
  footerRow: string[];
  dataRows: string[][];
}

@Component({
  selector: 'app-retro-comment',
  templateUrl: './retro-comment.component.html',
  styleUrls: ['./retro-comment.component.css'],
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
export class RetroCommentComponent implements OnInit {

  messages = new Array<Message>();
  selectedMessage = new Message();
  messageCount = 0;
  commentText: string = "";
  comment: Comment = new Comment();
  retroRight: UserRight = new UserRight();
  isUser: boolean = false;

  template: Template = new Template();


  currentRetro: Retro;
  retroId:string='';
  selectSubject: Subject = new Subject();


  constructor(
    private chatService: ChatService,
    private _ngZone: NgZone,
    private authService: UserService,
    private messageService: MessageService,
    private templateService: TemplateService,
    private sharedService: SharedService,
    private subjectService: SubjectsService,
    private configureService: RetroConfigurationService,
  ) {

    firebase.default.database().ref('comment/').limitToLast(1).on('value', (resp: any) => {
      if (this.currentRetro) {
        var data = snapshotToArray(resp);

        if (data.length > 0) {
          let comment = data[0];
          let message = this.messages.filter((p) => p.id == comment.messageId);

          if (message.length > 0 && message[0].comments != null) {
            
            console.log("message[0].comments",message[0].comments)
            message[0].comments.unshift(comment);
            console.log("message[0].comments.reverse()",message[0].comments)

          }
        }
      }
    });


  }

  ngOnInit() {

    this.retroId = this.authService.currentRetroIdValue;
    if (this.retroId) {
      this.getLastCurrentRetro(this.retroId);
    }



    this.existUser();

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
            this.getRetroTemplate(this.currentRetro.id);
            this.getMessage();
            this.getUserRight(this.currentRetro.id);

          }
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
          this.sortedlist();
        },
        (error) => { }
      );
  }




  sortedlist() {
    this.messages.sort(function (a, b) {
      return new Date(b.date).getTime() - new Date(a.date).getTime();
    });
  }

  filterTrim(x) {
    return x.replace(/^\s+|\s+$/gm, "");
  }

  addCommentModal(message) {
    this.selectedMessage = message;
    $("#commentModal").modal("show");
    this.commentText = "";
  }

  sendComment() {
    let currentUser = this.authService.currentUserValue;

    if (this.filterTrim(this.commentText) != "") {
      this.comment = new Comment();
      this.comment.userId = currentUser.userId;
      this.comment.messageId = this.selectedMessage.id;
      this.comment.commentText = this.commentText;
      this.comment.date = new Date();
      this.comment.retroId = this.currentRetro.id;

      this.configureService.newComment(this.comment).subscribe((res) => {
        const newMessage = firebase.default.database().ref('comment/').push();
        newMessage.set(this.comment);
        this.retroRight = res;
        this.commentText = "";
      });


      $("#commentModal").modal("hide");
    }
  }
  existUser() {
    this.isUser = this.authService.hasRole("Member");
  }









  private getMessage() {

    this.messageService
      .getAllNonCategoryMessage(this.currentRetro.id)
      .pipe(first())
      .subscribe(
        (data) => {
          this.messages = data.filter(p => p.isCategorized == false);

          console.log(" this.messages", this.messages);
          this.messages.forEach(item=>{
            item.comments=item.comments.reverse();
          })
          

          this.messageCount = this.messages.length;
          this.sortedlist();
        },
        (error) => { }
      );

  }

}
