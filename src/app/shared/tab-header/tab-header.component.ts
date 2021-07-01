import { Component, OnInit, ViewChild } from '@angular/core';
import { Router } from '@angular/router';
import { UserService } from 'app/services/user.service';

import * as firebase from 'firebase';
import { snapshotToArray } from "app/helpers/firebase-helper";
import { Subscription } from "rxjs";
import { Retro } from 'app/models/retro';
import { GuidGenerator } from 'app/helpers/guid-generator';
import { filter } from 'rxjs/operators';

@Component({
  selector: 'app-tab-header',
  templateUrl: './tab-header.component.html',
  styleUrls: ['./tab-header.component.css']
})
export class TabHeaderComponent implements OnInit {

  @ViewChild("widgetsContent") widgetsContent;
  currentTab: string = "";
  pathIndex: number = 0;
  retroId: string = '';
  ngAfterViewInit(): void {
    const width = window.innerWidth;
    if (width <= 576)
      this.widgetsContent.nativeElement.scrollLeft += 150;


  }

  constructor(
    private router: Router,
    private authService: UserService,) {

    this.retroId = this.authService.currentRetroIdValue;
    firebase.default.database().ref('currentpath/').orderByChild("id").equalTo(this.retroId).limitToLast(1).on('value', (resp: any) => {

      var data = snapshotToArray(resp);
      if (data.length > 0) {
        let currentPage = data[0].currentPage;
        let scrollDestination = currentPage.split("/");
        if (data[0].id == this.retroId) {
          if (scrollDestination.length >= 2) {
            const elementList = document.querySelectorAll('.' + scrollDestination[2]);
            const element = elementList[0] as HTMLElement;

            if (element != undefined)
              element.scrollIntoView({ behavior: 'smooth' });
          }



          if (currentPage != "/current/finish") {

            this.router.navigate([currentPage])
          }
          else {

            if (this.isLeader()) {
              firebase.default.database().ref("/currentPath").remove();

             
             this.router.navigate(["/current/start"])
           
             
            }
            else {
              this.authService.logout();
              this.router.navigate(["/current/finish"])
            }





          }
        }
      }
    });


  }

  ngOnInit() {
    this.currentTab = this.router.url;


    this.retroId = this.authService.currentRetroIdValue;
    if (this.retroId) {
      this.clickTab(this.currentTab, false)
    }
  }

  isActive(currentTab) {
    return this.router.url == currentTab;
  }

  isLeader() {
    return this.authService.hasRole("Leader")
  }




  clickTab(tab: string, isAuto = true) {

    this.currentTab = tab;
    let generator = new GuidGenerator();
    let current = new Retro();
    current.currentPage = this.currentTab;
    current.id = this.retroId;

    if (this.isLeader()) {
      const newMessage = firebase.default.database().ref('currentpath/').push();
      newMessage.set(current);

      let scrollDestination = tab.split("/");
      if (scrollDestination.length >= 2) {
        const elementList = document.querySelectorAll('.' + scrollDestination[2]);
        const element = elementList[0] as HTMLElement;
        if (element != undefined)
          element.scrollIntoView({ behavior: 'smooth' });
      }

      if ("/current/subject" == this.currentTab) {
        if (this.authService.hasRole("Leader")) {
          this.pathIndex = 1;


        }
      }

      if ("/current/template" == this.currentTab) {
        if (this.authService.hasRole("Leader")) {
          this.pathIndex = 2;

        }
      }

      if ("/current/brainstorm" == this.currentTab) {
        if (this.authService.hasRole("Leader")) {
          this.pathIndex = 3;

        }
      }

      if ("/current/comment" == this.currentTab) {
        if (this.authService.hasRole("Leader")) {
          this.pathIndex = 4;


        }
      }
      if ("/current/categorize" == this.currentTab) {
        if (this.authService.hasRole("Leader")) {
          this.pathIndex = 5;

        }


      }
      if ("/current/vote" == this.currentTab) {
        if (this.authService.hasRole("Leader")) {
          this.pathIndex = 6;

        }
      }
      if ("/current/report" == this.currentTab) {
        if (this.authService.hasRole("Leader")) {
          this.pathIndex = 7;

        }

      }

      if (isAuto)
        this.router.navigate([this.currentTab])
    }





  }

}
