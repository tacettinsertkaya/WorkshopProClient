import { animate, query, stagger, style, transition, trigger } from "@angular/animations";
import { Component, NgZone, OnInit } from "@angular/core";
import { Categorized } from "app/models/categorized";
import { Category } from "app/models/category";
import { CategorizedMessage } from "app/models/dto/categorized-message";

import { Message } from "app/models/message";
import { Retro } from "app/models/retro";
import { Subject } from "app/models/subject";
import { Template } from "app/models/template";
import { AlertifyService } from "app/services/alertify.service";
import { CategoryService } from "app/services/category.service";
import { MessageService } from "app/services/message.service";
import { RetroConfigurationService } from "app/services/retro-configuration";
import { SubjectsService } from "app/services/subject.service";
import { TemplateService } from "app/services/template.service";
import { UserService } from "app/services/user.service";
import { first } from "rxjs/operators";

import * as firebase from 'firebase';


declare var $: any;


@Component({
  selector: 'app-retro-categorize',
  templateUrl: './retro-categorize.component.html',
  styleUrls: ['./retro-categorize.component.css'],
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
export class RetroCategorizeComponent implements OnInit {

  messages = new Array<Message>();
  categorys = new Array<CategorizedMessage>();
  subject: Subject = new Subject();
  selectedMessages1 = new Array<Categorized>();
  selectedMessages = new Array<Message>();
  isUser: boolean = false;

  categorized: Categorized = new Categorized();
  categorizedMessages = new Array<CategorizedMessage>();

  template: Template = new Template();
  currentRetro: Retro;
  selectSubject: Subject = new Subject();


  constructor(
    private messageService: MessageService,
    private templateService: TemplateService,
    private categoryService: CategoryService,
    private alertiftyService: AlertifyService,
    private authService: UserService,
    private subjectService: SubjectsService,
    private configureService: RetroConfigurationService,


  ) {


    // this.subscribeToCurrentRetroEvents();
    // this.subscribeCategorizedMessagesRetroEvents();


    firebase.default.database().ref('categorize/').on('value', (resp: any) => {
      if (this.currentRetro) {
        this.getMessage(this.currentRetro.id);
        this.getCategory(this.currentRetro.id);
      }
    });

  }

  ngOnInit() {

    this.getLastCurrentRetro();
    this.existUser();
  }


  getLastCurrentRetro() {

    this.configureService
      .getLastRetro()
      .pipe(first())
      .subscribe(
        (res) => {

          this.currentRetro = res;


          if (this.currentRetro) {
            this.getRetroSubject(this.currentRetro.id);
            this.getRetroTemplate(this.currentRetro.templateId);
            this.getMessage(this.currentRetro.id);
            this.getCategory(this.currentRetro.id);
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


  private GetHeaderMessage(headerId) {

    let filteredData = this.messages.filter(p => p.clientuniqueid == headerId);
    return filteredData;
  }

  private getRetroTemplate(templateId) {
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
          retro.id = this.currentRetro.id;
          retro.state = 2;
          retro.templateId = this.currentRetro.templateId;
          this.configureService.setCurrentRetro(retro);
          // this.configureService.getCategorizedMessage();     
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




    let isCheck = this.selectedMessages.filter(p => p.clientuniqueid != this.selectedMessages[0].clientuniqueid);
    if (isCheck.length > 0) {
      this.alertiftyService.warning("Farklı başlıktaki fikirler kategorilendirilemez.")

    }
    else {

      if (this.selectedMessages.length == 0)
        this.alertiftyService.warning("Fikir seçiniz.")
      else
        $('#categoryModal').modal("show");

    }

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

          // this.chatService.getCategorizedMessage();
          // const newMessage = firebase.default.database().ref('categorized-message/').push();
          // newMessage.set(this.message);

          let currentUser = this.authService.currentUserValue;


          let message = new Message();
          message.userId = currentUser.userId;
          message.clientuniqueid = this.selectedMessages[0].clientuniqueid;
          message.type = "category";
          message.messageText = this.categorized.title;
          message.subjectId = this.selectedMessages[0].subjectId;
          message.date = new Date();
          message.isCategorized = false;
          message.retroId = this.selectedMessages[0].retroId;

          this.configureService.newMessage(message).subscribe((res) => {
            const newMessage = firebase.default.database().ref('categorize/').push();
            const categorize = firebase.default.database().ref('message/').push();
            newMessage.set(message);
            categorize.set(message);


            this.selectedMessages = [];
            this.categorized.title = "";


          });


        },
        (error) => { }
      );
  }





}
