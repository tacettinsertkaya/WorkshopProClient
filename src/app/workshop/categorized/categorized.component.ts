import { animate, query, stagger, style, transition, trigger } from "@angular/animations";
import { Component, NgZone, OnInit } from "@angular/core";
import { Categorized } from "app/models/categorized";
import { Category } from "app/models/category";
import { CategorizedMessage } from "app/models/dto/categorized-message";

import { Message } from "app/models/message";
import { Retro } from "app/models/retro";
import { RetroConfigration } from "app/models/retro-configuration";
import { Subject } from "app/models/subject";
import { Template } from "app/models/template";
import { AlertifyService } from "app/services/alertify.service";
import { CategoryService } from "app/services/category.service";
import { ChatService } from "app/services/chat.service";
import { MessageService } from "app/services/message.service";
import { SharedService } from "app/services/shared.service";
import { TemplateService } from "app/services/template.service";
import { UserService } from "app/services/user.service";
import { first } from "rxjs/operators";

declare var $: any;

@Component({
  selector: "app-categorized-cmp",
  templateUrl: "./categorized.component.html",
  styleUrls: ["./categorized.component.css"],
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
export class CategorizedComponent implements OnInit {
  messages = new Array<Message>();
  categorys = new Array<CategorizedMessage>();
  subject: Subject = new Subject();
  selectedMessages1 = new Array<Categorized>();
  selectedMessages = new Array<Message>();
  isUser: boolean = false;

  categorized: Categorized = new Categorized();
  categorizedMessages = new Array<CategorizedMessage>();
  retroRight: RetroConfigration = new RetroConfigration();
  retro: Retro = new Retro();
  template: Template = new Template();
  


  constructor(
    private messageService: MessageService,
    private templateService: TemplateService,
    private categoryService: CategoryService,
    private sharedService: SharedService,
    private alertiftyService: AlertifyService,
    private authService: UserService,
    private chatService: ChatService,
    private _ngZone: NgZone,

  ) {

    this.sharedService.currentRetro.subscribe((retro: Retro) => {
      this.retro = retro;
    });

    this.subscribeToCurrentRetroEvents();
    this.subscribeCategorizedMessagesRetroEvents();

    this.sharedService.allMessage.subscribe((data) => {
      this.getMessage(this.retro.id);
    });

    this.sharedService.retroRight.subscribe((right: RetroConfigration) => {
      this.retroRight = this.sharedService.retroRightValue;
    });

  }

  ngOnInit() {
    this.getMessage(this.retro.id);
    this.getCategory(this.retro.id);
    this.existUser();
    this.getRetroTemplate(this.retro.templateId);
  }

  private GetHeaderMessage(headerId){

      let filteredData=this.messages.filter(p=>p.clientuniqueid==headerId);
    return filteredData;
  }

  private getRetroTemplate(templateId){
    this.templateService
    .getTemplate(templateId)
    .pipe(first())
    .subscribe(
      (data) => {
        this.template = data;
        this.sortedlist();
      },
      (error) => { 
        this.alertiftyService.error();
      }
    );
  }

  private subscribeToCurrentRetroEvents(): void {
    this.chatService.currentRetroReceived.subscribe((retro: Retro) => {
      this._ngZone.run(() => {
        this.retro=retro;
          this.sharedService.currentRetro.next(retro);
        if(this.authService.hasRole("Member") && retro.currentPage!=null) 
           this.sharedService.tabSource.next(retro.currentPage);

      });
    });
  }

  private subscribeCategorizedMessagesRetroEvents(): void {
    this.chatService.categorizedMessage.subscribe((retro: Retro) => {
      this._ngZone.run(() => {
        this.getMessage(this.retro.id);
        this.getCategory(this.retro.id);
        this.getRetroTemplate(this.retro.templateId);
      });
    });
  }

  existUser() {
    this.isUser = this.authService.hasRole("Member");
  }

  private getMessage(retroId) {

    this.messageService
      .getAllNonCategoryMessage(retroId)
      .pipe(first())
      .subscribe(
        (data) => {
          this.messages = data;
          this.sortedlist();
        },
        (error) => { 
          this.alertiftyService.error();

        }
      );
  }

  private getCategory(retroId) {
    this.messageService
      .getAllCategoryMessage(retroId)
      .pipe(first())
      .subscribe(
        (data) => {

          this.categorizedMessages = data;
        },
        (error) => {
          this.alertiftyService.error();

         }
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

          let retro = new Retro();
          retro.id = this.retroRight.retroId;
          retro.state = 2;
          retro.templateId=this.retro.templateId;
          // this.chatService.setCurrentRetro(retro);
          // this.chatService.getCategorizedMessage();     
        },
        (error) => { }
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
  
          $("#categoryModal").modal("hide");
         
          //  this.chatService.getCategorizedMessage();     
           let currentUser=this.authService.currentUserValue;
     
        
           let message= new Message();
           message.userId=currentUser.userId;
           message.clientuniqueid = this.selectedMessages[0].clientuniqueid;
           message.type = "category";
           message.messageText = this.categorized.title;
           message.subjectId = this.selectedMessages[0].subjectId;
           message.date = new Date();
           message.isCategorized = false;
           message.retroId =  this.selectedMessages[0].retroId;
          //  this.chatService.sendMessage(message);

           this.selectedMessages = [];
           this.categorized.title = "";
           this.getMessage(this.retro.id);
          //  this.getCategory(this.retro.id);

        },
        (error) => { }
      );
  }

  Vote() {
    // this.sharedService.tabSource.next(".comments");
    // if(this.authService.hasRole("Leader")){
    
    //       let retro=new Retro();
    //       retro.id=this.retroRight.retroId;
    //       retro.state=2;
    //       retro.currentPage="/comments"
    //       this.chatService.setCurrentRetro(retro);
    // }

  }
}
