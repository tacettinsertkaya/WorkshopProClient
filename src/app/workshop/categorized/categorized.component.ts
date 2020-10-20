import { Component, NgZone, OnInit } from "@angular/core";
import { Categorized } from "app/models/categorized";
import { Category } from "app/models/category";
import { CategorizedMessage } from "app/models/dto/categorized-message";

import { Message } from "app/models/message";
import { Retro } from "app/models/retro";
import { RetroConfigration } from "app/models/retro-configuration";
import { Subject } from "app/models/subject";
import { CategoryService } from "app/services/category.service";
import { ChatService } from "app/services/chat.service";
import { MessageService } from "app/services/message.service";
import { SharedService } from "app/services/shared.service";
import { UserService } from "app/services/user.service";
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
  isUser:boolean=false;

  categorized: Categorized = new Categorized();
  categorizedMessages = new Array<CategorizedMessage>();
  retroRight: RetroConfigration = new RetroConfigration();

  constructor(
    private messageService: MessageService,
    private categoryService: CategoryService,
    private sharedService: SharedService,
    private authService: UserService,
    private chatService: ChatService,
    private _ngZone: NgZone,

  ) {
    this.subscribeToCurrentRetroEvents();
    this.sharedService.allMessage.subscribe((data) => {
      this.getMessage();
    });

    this.sharedService.retroRight.subscribe((right: RetroConfigration) => {
      this.retroRight = right;
    });
  }

  ngOnInit() {
    this.getMessage();
    this.getCategory();
    this.existUser();
  }

  
  private subscribeToCurrentRetroEvents(): void {
    this.chatService.currentRetroReceived.subscribe((retro: Retro) => {
      this._ngZone.run(() => {
      
        if(this.authService.hasRole("Member")) 
        this.sharedService.tabSource.next("."+retro.currentPage.replace("/",""));

      });
    });
  }

  existUser() {
    this.isUser=this.authService.hasRole("Member");
 }

  private getMessage() {
    this.messageService
      .getAllNonCategoryMessage()
      .pipe(first())
      .subscribe(
        (data) => {
         
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
      .deleteCategoryMessage(item)
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
     
      if (p.isCategorized) {
        this.selectedMessages.push(p);
      }
    });
    
  }

  saveCategorized() {

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
          this.selectedMessages = [];
          this.categorized.title = "";
          this.getMessage();
          this.getCategory();
          $("#categorizeModal").modal("hide");
        },
        (error) => {}
      );
  }

  Vote(){
    this.sharedService.tabSource.next(".multi-vote");
    if(this.authService.hasRole("Leader")){
    
      let retro=new Retro();
      retro.id=this.retroRight.retroId;
      retro.state=2;
      retro.currentPage="/multi-vote"
      this.chatService.setCurrentRetro(retro);
     }
  }
}
