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

  constructor(
    private chatService: ChatService,
    private _ngZone: NgZone,
    private messageService: MessageService,
    private templateService: TemplateService,
    private sharedService: SharedService
  ) {
    this.subscribeToEvents();
    this.commentToEvents();
  }

  ngOnInit() {
    this.getMessage();
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
    if (this.filterTrim(this.commentText) != "") {
      console.log("txt", this.commentText);
      this.comment = new Comment();

      this.comment.messageId = this.selectedMessage.id;
      this.comment.commentText = this.commentText;
      this.comment.date = new Date();

      this.chatService.sendComment(this.comment);
      this.commentText = "";
      $("#commentModal").modal("hide");
    }
  }

  private subscribeToEvents(): void {
    this.chatService.messageReceived.subscribe((message: Message) => {
      this._ngZone.run(() => {
        this.messages.push(message);
        this.sortedlist();
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

  private getMessage() {
    this.messageService
      .getAllMessage()
      .pipe(first())
      .subscribe(
        (data) => {
          console.log("message", data);
          this.messages = data;
          this.messageCount = this.messages.length;
          this.sortedlist();
        },
        (error) => {}
      );
  }
}
