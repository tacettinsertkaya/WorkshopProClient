import { Component, OnInit } from "@angular/core";
import { Categorized } from "app/models/categorized";
import { Category } from "app/models/category";
import { CategorizedMessage } from "app/models/dto/categorized-message";

import { Message } from "app/models/message";
import { Subject } from "app/models/subject";
import { CategoryService } from "app/services/category.service";
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
  categorys = new Array<CategorizedMessage>();
  subject: Subject = new Subject();
  selectedMessages1 = new Array<Categorized>();
  selectedMessages = new Array<Message>();

  categorized: Categorized = new Categorized();
  categorizedMessages = new Array<CategorizedMessage>();

  constructor(
    private messageService: MessageService,
    private categoryService: CategoryService
  ) {}

  ngOnInit() {
    this.getMessage();
    this.getCategory();
  }

  private getMessage() {
    this.messageService
      .getAllNonCategoryMessage()
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

  private getCategory() {
    this.messageService
      .getAllCategoryMessage()
      .pipe(first())
      .subscribe(
        (data) => {
          console.log("xxxx", data);
          this.categorizedMessages = data;
        },
        (error) => {}
      );
  }

  sortedlist() {
    this.messages.sort(function (a, b) {
      return new Date(b.date).getTime() - new Date(a.date).getTime();
    });
  }

  deleteCategory(item) {
    this.categoryService
      .delete(item.category.id)
      .pipe(first())
      .subscribe(
        (data) => {
          this.getMessage();
          this.getCategory();
        },
        (error) => {}
      );
  }

  selectMessage() {
    this.selectedMessages = [];
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

    let categoryMessage = new CategorizedMessage();
    let category = new Category();
    category.categoryTitle = this.categorized.title;

    categoryMessage.category = category;
    categoryMessage.messages = this.selectedMessages;

    this.categoryService
      .createCategoryMessage(categoryMessage)
      .pipe(first())
      .subscribe(
        (data) => {
          console.log("category", data);
          this.selectedMessages = [];
          this.categorized.title = "";
          this.getMessage();
          this.getCategory();
          $("#categorizeModal").modal("hide");
        },
        (error) => {}
      );
  }
}
