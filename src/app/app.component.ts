import { Component, HostListener, NgZone, OnDestroy, OnInit } from "@angular/core";
import { ChatService } from "./services/chat.service";
import { Message } from "./models/message";
import * as firebase from 'firebase';
import { Subscription } from "rxjs";
import { NavigationStart, Router } from "@angular/router";
import { TranslateService } from "@ngx-translate/core";
import { UserService } from "./services/user.service";
export let browserRefresh = false;
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

  subscription: Subscription
  constructor(private chatService: ChatService,
    private userService: UserService,
    private translate: TranslateService,
    private router: Router) {

    // firebase.default.initializeApp(config);

    this.subscription = router.events.subscribe((event) => {
      if (event instanceof NavigationStart) {
        browserRefresh = !router.navigated;

      }
    });

    let currentLang=this.userService.currentLangValue;
    if(JSON.stringify(currentLang)==='{}'){
      currentLang='tr'
        this.userService.currentLangSetValue(currentLang);

    }
    this.translate.use(currentLang);
    this.translate.setDefaultLang(currentLang);

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
