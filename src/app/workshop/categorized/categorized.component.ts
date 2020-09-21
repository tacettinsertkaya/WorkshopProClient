import { Component, OnInit } from "@angular/core";
import { Categorized } from "app/models/categorized";
import { Message } from "app/models/message";
import { Subject } from "app/models/subject";
import { MessageService } from "app/services/message.service";
import { first } from "rxjs/operators";

declare var $: any;

@Component({
  selector: "app-categorized-cmp",
  templateUrl: "./categorized.component.html",
  styleUrls: ["./categorized.component.css"],
})
export class CategorizedComponent implements OnInit {
  messages = new Array<Message>();
  subject: Subject = new Subject();
  selectedMessages1 = new Array<Categorized>();
  selectedMessages = new Array<Message>();

  categorized: Categorized = new Categorized();

  constructor(private messageService: MessageService) {}

  ngOnInit() {
    this.getMessage();
  }

  private getMessage() {
    this.messageService
      .getAllMessage()
      .pipe(first())
      .subscribe(
        (data) => {
          console.log("message", data);
          this.messages = data;
          this.sortedlist();
        },
        (error) => {}
      );
  }

  sortedlist() {
    this.messages.sort(function (a, b) {
      return new Date(b.date).getTime() - new Date(a.date).getTime();
    });
  }

  selectMessage() {
    this.messages.filter((p) => {
      console.log("isCategorized -->:", p.isCategorized);
      if (p.isCategorized) {
        this.selectedMessages.push(p);
        console.log("selected  messages -->:", this.selectedMessages);
      }
    });
    console.log("denememe", this.categorized);
    console.log("messages --->:", this.messages);
  }

  saveCategorized() {
    console.log("save categorized");
  }
}
