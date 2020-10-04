import { Component, NgZone, OnInit } from "@angular/core";
import { Categorized } from "app/models/categorized";
import { Category } from "app/models/category";
import { CategorizedMessage } from "app/models/dto/categorized-message";
import { VoteDto } from "app/models/dto/vote-dto";

import { Message } from "app/models/message";
import { Subject } from "app/models/subject";
import { CategoryService } from "app/services/category.service";
import { ChatService } from "app/services/chat.service";
import { MessageService } from "app/services/message.service";
import { SharedService } from "app/services/shared.service";
import { first } from "rxjs/operators";

declare var $: any;

@Component({
  selector: "app-vote-cmp",
  templateUrl: "./vote.component.html"
})
export class VoteComponent implements OnInit {
  message = new Message();
  categorys = new Array<CategorizedMessage>();
  subject: Subject = new Subject();
 
  categorized: Categorized = new Categorized();
  categorizedMessages = new Array<CategorizedMessage>();
  comments=new Array<any>();

  constructor(
    private _ngZone: NgZone,
    private chatService: ChatService,
    private messageService: MessageService,
    private categoryService: CategoryService,
    private sharedService: SharedService,
  ) {
    this.subscribeToEvents();
  }

  ngOnInit() {
   
    this.getCategory();
  }

  getComment(message:any){
   console.log("comment",message);
   this.getMessage(message.id);
    $('#modalComment').modal('show');
  }


  setVote(message:any){
      let data=new VoteDto();
      data.messageId=message.id;
      data.vote=true;
    this.chatService.setVote(data);
  }

  private getMessage(messageId:number) {
    this.messageService
      .getMessageById(messageId)
      .pipe(first())
      .subscribe(
        (data) => {
         console.log("data",data);
          this.message = data;
          
        },
        (error) => {}
      );
  }

  private subscribeToEvents(): void {
    this.chatService.voteReceived.subscribe((message: Message) => {
      this._ngZone.run(() => {
        
        this.messageService
        .getAllCategoryMessageOrderVote()
        .pipe(first())
        .subscribe(
          (data) => {
            console.log("xxxx", data);
            this.categorizedMessages = data;
            console.log(" this.categorizedMessages",  this.categorizedMessages);
          },
          (error) => {}
        );
      });
    });
  }


  private getCategory() {
    this.messageService
      .getAllCategoryMessage()
      .pipe(first())
      .subscribe(
        (data) => {
          console.log("xxxx", data);
          this.categorizedMessages = data;
          console.log(" this.categorizedMessages",  this.categorizedMessages);
        },
        (error) => {}
      );
  }



  
  


}
