import { Component, HostListener, NgZone, OnDestroy, OnInit } from "@angular/core";
import { ChatService } from "./services/chat.service";
import { Message } from "./models/message";

@Component({
  selector: "app-root",
  templateUrl: "./app.component.html",
  styleUrls: ["./app.component.css"],

})
export class AppComponent implements OnInit {
  /**
   *
   */


  constructor(private chatService: ChatService) {

  }

  ngOnInit() {

  }
 
  @HostListener('window:beforeunload')
  onBeforeUnload() {
    this.chatService.userOffline();
  }
 

}
