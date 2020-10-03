import { Component, NgZone, OnInit } from "@angular/core";
import { ChatService } from "../../services/chat.service";
import { Message } from "../../models/message";
import { MessageService } from "../../services/message.service";
import { first } from "rxjs/operators";
import { TemplateService } from "app/services/template.service";
import { Template } from "app/models/template";
import { SharedService } from "app/services/shared.service";
import { Subject } from "app/models/subject";
import { RetroConfigration } from "app/models/retro-configuration";

declare var $: any;
@Component({
  moduleId: module.id,
  // tslint:disable-next-line: component-selector
  selector: "brainstorm-cmp",
  templateUrl: "brainstorm.component.html",
})
export class BrainstormComponent implements OnInit {
  title = "ClientApp";
  txtMessage = "";
  uniqueID: string = new Date().getTime().toString();
  messages = new Array<Message>();
  message = new Message();
  inputText = {};
  retroRight: RetroConfigration = new RetroConfigration();
  selectedSubject: Subject;
  template = new Template();
  constructor(
    private chatService: ChatService,
    private _ngZone: NgZone,
    private messageService: MessageService,
    private templateService: TemplateService,
    private sharedService: SharedService
  ) {
    this.subscribeToEvents();
    this.retroConfigurationToEvents();

    this.sharedService.messageSource.subscribe((message: string) => {
      this.getTemplate(message);
    });

    this.sharedService.selectSubject.subscribe((subject: Subject) => {
      this.selectedSubject = subject;
    });

    this.sharedService.retroRight.subscribe((right: RetroConfigration) => {
      this.retroRight = right;
    });
  }

  ngOnInit(): void {
    this.getMessage();
    console.log("retroRight", this.retroRight);
  }

  getTemplate(templateId: any) {
    this.templateService
      .getTemplate(templateId)
      .pipe(first())
      .subscribe(
        (data) => {
          this.template = data;
          console.log("this.template", this.template);
        },
        (error) => {}
      );
  }

  filterTrim(x) {
    return x.replace(/^\s+|\s+$/gm, "");
  }

  nextComment() {
    this.sharedService.tabSource.next(".comments");
  }

  sendMessage(headerId: string): void {
    const msg = this.inputText[headerId];
    console.log("this.selectedSubject", this.selectedSubject);
    if (this.filterTrim(msg) !== "") {
      console.log("txt", msg);
      this.message = new Message();
      this.message.clientuniqueid = headerId;
      this.message.type = "sent";
      this.message.messageText = msg;
      this.message.subjectId = this.selectedSubject.id;
      this.message.date = new Date();
      this.message.isCategorized = false;
      this.message.retroId = this.retroRight.retroId;
      console.log("this.message", this.message);
      this.chatService.sendMessage(this.message);
      this.inputText[headerId] = "";
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
    this.chatService.retroConfigurationReceived.subscribe(
      (retro: RetroConfigration) => {
        this._ngZone.run(() => {
          this.retroRight = retro;
        });
      }
    );
  }

  private getMessage() {
    this.messageService
      .getAllMessage()
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
