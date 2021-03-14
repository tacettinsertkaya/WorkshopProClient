import { Component, HostListener, NgZone, OnDestroy, OnInit } from "@angular/core";
import { ChatService } from "./services/chat.service";
import { Message } from "./models/message";
import * as firebase from 'firebase';
import { Subscription } from "rxjs";
import { NavigationStart, Router } from "@angular/router";
export let browserRefresh=false;
// const config = {
//   apiKey: 'AIzaSyAj0b-wjz8RPScqbslxU7ByFBKOk-B37jw',
//   databaseURL: 'https://workshoppro-75580-default-rtdb.firebaseio.com/'
// };

@Component({
  selector: "app-root",
  templateUrl: "./app.component.html",
  styleUrls: ["./app.component.css"],

})
export class AppComponent implements OnInit {
  /**
   *
   */

   subscription:Subscription
  constructor(private chatService: ChatService,private router:Router) {

    // firebase.default.initializeApp(config);

    this.subscription = router.events.subscribe((event) => {
      if (event instanceof NavigationStart) {
        browserRefresh = !router.navigated;
       
      }
    });

  }


  @HostListener('window:beforeunload', ['$event'])
  unloadHandler(event: Event) {
    window.opener.location.reload();
  }

  ngOnInit() {

  }

  @HostListener('window:beforeunload')
  onBeforeUnload() {
    this.chatService.userOffline();
  }



}
