import { Component, NgZone, OnInit } from "@angular/core";
import { Categorized } from "app/models/categorized";
import { Category } from "app/models/category";
import { CategorizedMessage } from "app/models/dto/categorized-message";
import { VoteDto } from "app/models/dto/vote-dto";

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
  retroRight: RetroConfigration = new RetroConfigration();
  isUser:boolean=false;
  constructor(
    private _ngZone: NgZone,
    private chatService: ChatService,
    private messageService: MessageService,
    private categoryService: CategoryService,
    private sharedService: SharedService,
    private authService: UserService,
  ) {
    this.subscribeToEvents();
    this.subscribeToCurrentRetroEvents();
    this.sharedService.retroRight.subscribe((right: RetroConfigration) => {
      this.retroRight = right;
    });
  }

  ngOnInit() {
   
    this.getCategory();
  }

  getComment(message:any){
  
   this.getMessage(message.id);
    $('#modalComment').modal('show');
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

  nextReport(){
    this.sharedService.tabSource.next(".idea-archive");
    if(this.authService.hasRole("Leader")){
    
      let retro=new Retro();
      retro.id=this.retroRight.retroId;
      retro.state=2;
      retro.currentPage="/idea-archive"
      this.chatService.setCurrentRetro(retro);
     }

     
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
            this.categorizedMessages = data;
          },
          (error) => {}
        );
      });
    });
  }


  private getCategory() {
    this.messageService
      .getAllCategoryMessage(1)
      .pipe(first())
      .subscribe(
        (data) => {
          this.categorizedMessages = data;
          console.log(" this.categorizedMessages",  this.categorizedMessages);
        },
        (error) => {}
      );
  }



  
  


}
