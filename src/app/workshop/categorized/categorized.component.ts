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

  private getCategory() {
    this.categoryService
      .getAllCategory()
      .pipe(first())
      .subscribe(
        (data) => {
          console.log("category", data);
          // this.categorys = data;
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

  createCategoryMessage(category) {
    let data = new CategorizedMessage();

    let categoryMessages = Array<Message>();

    this.selectedMessages.forEach((item) => {
      item.categoryId = item.id;

      this.messageService
        .update(item)
        .pipe(first())
        .subscribe(
          (res) => {
            // categoryMessages.push(item);
            // const index = this.messages.indexOf(item);
            // this.messages.splice(index, 1);
          },
          (error) => {}
        );
    });

    // data.category = category;
    // data.categoryMessages = categoryMessages;

    // this.categorizedMessages.push(data);

    this.getMessage();
    this.getCategory();

    this.categorized.title = "";
    this.selectedMessages = [];
  }

  saveCategorized() {
    console.log("save categorized");

    let category = new Category();

    category.categoryTitle = this.categorized.title;

    this.categoryService
      .create(category)
      .pipe(first())
      .subscribe(
        (data) => {
          console.log("category", data);
          let category = data;
          this.createCategoryMessage(category);
        },
        (error) => {}
      );
  }
}
