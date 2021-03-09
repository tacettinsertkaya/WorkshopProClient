import { Component, HostListener, NgZone, OnDestroy, OnInit } from "@angular/core";
import { ChatService } from "./services/chat.service";
import { Message } from "./models/message";
import * as firebase from 'firebase';

const config = {
  apiKey: 'AIzaSyAj0b-wjz8RPScqbslxU7ByFBKOk-B37jw',
  databaseURL: 'https://workshoppro-75580-default-rtdb.firebaseio.com/'
};

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

    firebase.default.initializeApp(config);
  }

  ngOnInit() {

  }

  @HostListener('window:beforeunload')
  onBeforeUnload() {
    this.chatService.userOffline();
  }


}
