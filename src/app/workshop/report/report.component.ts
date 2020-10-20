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
import {Router} from "@angular/router"

declare var $: any;

@Component({
    selector: "app-report-cmp",
    templateUrl: "./report.component.html",
})
export class ReportComponent implements OnInit {
    message = new Message();
    categorys = new Array<CategorizedMessage>();
    subject: Subject = new Subject();
    archiveMessagesList=Array<Message>();
    categorized: Categorized = new Categorized();
    categorizedMessages = new Array<CategorizedMessage>();
    categorizedFavoriMessages = new Array<CategorizedMessage>();
    comments = new Array<any>();

    constructor(
        private _ngZone: NgZone,
        private router: Router,
        private chatService: ChatService,
        private messageService: MessageService,
        private categoryService: CategoryService,
        private sharedService: SharedService,
    ) {
    }

    ngOnInit() {
        this.getArchive();
        this.getArchiveFavorite();

    }




  

    private getArchive() {
        this.messageService
            .getArchiveMessage()
            .pipe(first())
            .subscribe(
                (data) => {

                    this.categorizedMessages = data;
                },
                (error) => { }
            );
    }
 



    private getArchiveFavorite() {
        this.messageService
            .getFavoriteArchiveMessagea()
            .pipe(first())
            .subscribe(
                (data) => {

                    this.categorizedFavoriMessages = data;
                },
                (error) => { }
            );
    }

    changeCategory(message, category) {
       
        for (var i = category.messages.length - 1; i >= 0; i--) {
            if (category.messages[i].id === message.id) {
                category.messages.splice(i, 1);
            }
           }
        
         

        let cat = this.categorizedFavoriMessages.filter(p => p.category.id == category.category.id)[0];
      
        if (cat != undefined) {
            cat.messages.push(message);
        }
        else {
            let fav = new CategorizedMessage();
            fav.category = category.category;
            fav.messages.push(message);

            this.categorizedFavoriMessages.push(fav);
        }


    }

    
    changeCategoryRemove(message, category) {
       

        for (var i = category.messages.length - 1; i >= 0; i--) {
            if (category.messages[i].id === message.id) {
                category.messages.splice(i, 1);
            }
           }
        
         

        let cat = this.categorizedMessages.filter(p => p.category.id == category.category.id)[0];
     
        if (cat != undefined) {
            cat.messages.push(message);
        }
        else {
            let fav = new CategorizedMessage();
            fav.category = category.category;
            fav.messages.push(message);

            this.categorizedMessages.push(fav);
        }


    }

    archiveMessage(){
        
        this.getSplitMessage(this.categorizedMessages);
        this.getSplitMessage(this.categorizedFavoriMessages);

        this.messageService
            .messageArchive(this.archiveMessagesList)
            .pipe(first())
            .subscribe(
                (data) => {
                    this.router.navigate(['/'])

                },
                (error) => { }
            );
    }

    getSplitMessage(data){
        data.forEach(category => {
            category.messages.forEach(message => {
                this.archiveMessagesList.push(message);  
            });
           
        });

    }



}
