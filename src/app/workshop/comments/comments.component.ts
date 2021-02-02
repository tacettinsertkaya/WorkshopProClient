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

declare var $: any;

declare interface DataTable {
  headerRow: string[];
  footerRow: string[];
  dataRows: string[][];
}

@Component({
  moduleId: module.id,
  // tslint:disable-next-line:component-selector
  selector: "comments-cmp",
  templateUrl: "comments.component.html",
})
export class CommentsComponent implements OnInit {
  messages = new Array<Message>();
  selectedMessage = new Message();
  messageCount = 0;
  commentText: string = "";
  comment: Comment = new Comment();
  retroRight: UserRight;
  isUser:boolean=false;

  retro: Retro = new Retro();
  template: Template = new Template();
  
  constructor(
    private chatService: ChatService,
    private _ngZone: NgZone,
    private authService: UserService,
    private messageService: MessageService,
    private templateService: TemplateService,
    private sharedService: SharedService
  ) {
    this.subscribeToEvents();
    this.commentToEvents();
    this.retroConfigurationToEvents();
    this.sharedService.retroRight.subscribe((right: UserRight) => {
      this.retroRight = right;
    });
    this.subscribeToCurrentRetroEvents();
  }

  ngOnInit() {
    this.getMessage();
    this.existUser();
    this.getRetroTemplate( this.retroRight.retroId);

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
        this.sortedlist();
      },
      (error) => { }
    );
  }

  
  private subscribeToCurrentRetroEvents(): void {
    this.chatService.currentRetroReceived.subscribe((retro: Retro) => {
      this._ngZone.run(() => {
        
        if(this.authService.hasRole("Member")) 
        this.sharedService.tabSource.next("."+retro.currentPage.replace("/",""));

      });
    });
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
    let currentUser=this.authService.currentUserValue;

    if (this.filterTrim(this.commentText) != "") {
      this.comment = new Comment();
      this.comment.userId=currentUser.userId;
      this.comment.messageId = this.selectedMessage.id;
      this.comment.commentText = this.commentText;
      this.comment.date = new Date();
      this.comment.retroId = this.retroRight.retroId;
      this.chatService.sendComment(this.comment);
      this.commentText = "";
      $("#commentModal").modal("hide");
    }
  }
  existUser() {
    this.isUser=this.authService.hasRole("Member");
 }

  private subscribeToEvents(): void {
    this.chatService.messageReceived.subscribe((message: Message) => {
      this._ngZone.run(() => {
  
        if(message.isCategorized==false){
        this.messages.push(message);
        this.sortedlist();
        }
      });
    });
  }

  private commentToEvents(): void {
    this.chatService.commentReceived.subscribe((comment: Comment) => {
      this._ngZone.run(() => {
        let message = this.messages.filter((p) => p.id == comment.messageId);

        message[0].comments.push(comment);
      });
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



  nextCategorize(){
    // this.sharedService.tabSource.next(".vote");
    // if(this.authService.hasRole("Leader")){
    
    //   let retro=new Retro();
    //   retro.id=this.retroRight.retroId;
    //   retro.state=2;
    //   retro.currentPage="/vote"
    //   this.chatService.setCurrentRetro(retro);
    //  }
  }
  private getMessage() {

    this.messageService
    .getAllNonCategoryMessage(this.retroRight.retroId)
    .pipe(first())
    .subscribe(
      (data) => {
        this.messages = data.filter(p=>p.isCategorized==false);
        this.messageCount =  this.messages.length;
        this.sortedlist();
      },
      (error) => { }
    );

  }
}
