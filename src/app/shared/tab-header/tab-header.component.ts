import { Component, OnInit, ViewChild } from '@angular/core';
import { Router } from '@angular/router';
import { UserService } from 'app/services/user.service';

@Component({
  selector: 'app-tab-header',
  templateUrl: './tab-header.component.html',
  styleUrls: ['./tab-header.component.css']
})
export class TabHeaderComponent implements OnInit {

  @ViewChild("widgetsContent") widgetsContent;
  currentTab: string = "";
  pathIndex: number = 0;

  ngAfterViewInit(): void {
    const width = window.innerWidth;
    if (width <= 576)
      this.widgetsContent.nativeElement.scrollLeft += 150;


  }

  constructor(private router: Router,
    private authService: UserService,) { }

  ngOnInit() {
    this.currentTab = this.router.url;
  }

  isActive(currentTab) {
    return this.router.url == currentTab;
  }

  clickTab(tab: string) {
    this.currentTab = tab;
    console.log("asdasd ", this.currentTab);
    if ("/current/subject" == this.currentTab) {
      if (this.authService.hasRole("Leader")) {
        this.pathIndex = 1;
        // let current = new current();
        // current.id = this.currentRight.currentId;
        // current.state = 2;
        // current.currentPage = "/current/comment"
        // current.templateId = this.currentcurrent.templateId;
        // current.subjectId = this.sharedService.selectSubjectValue.id;
        // this.chatService.setCurrentcurrent(current);

      }
    }

    if ("/current/template" == this.currentTab) {
      if (this.authService.hasRole("Leader")) {
        this.pathIndex = 2;
        // let current = new current();
        // current.id = this.currentRight.currentId;
        // current.state = 2;
        // current.currentPage = "/current/comment"
        // current.templateId = this.currentcurrent.templateId;
        // current.subjectId = this.sharedService.selectSubjectValue.id;
        // this.chatService.setCurrentcurrent(current);

      }
    }

    if ("/current/brainstorm" == this.currentTab) {
      if (this.authService.hasRole("Leader")) {
        this.pathIndex = 3;
        // let current = new current();
        // current.id = this.currentRight.currentId;
        // current.state = 2;
        // current.currentPage = "/current/comment"
        // current.templateId = this.currentcurrent.templateId;
        // current.subjectId = this.sharedService.selectSubjectValue.id;
        // this.chatService.setCurrentcurrent(current);

      }
    }

    if ("/current/comment" == this.currentTab) {
      if (this.authService.hasRole("Leader")) {
        this.pathIndex = 4;
        // let current = new current();
        // current.id = this.currentRight.currentId;
        // current.state = 2;
        // current.currentPage = "/current/comment"
        // current.templateId = this.currentcurrent.templateId;
        // current.subjectId = this.sharedService.selectSubjectValue.id;
        // this.chatService.setCurrentcurrent(current);

      }
    }
    if ("/current/categorize" == this.currentTab) {
      if (this.authService.hasRole("Leader")) {
        this.pathIndex = 5;
        // let current = new current();
        // current.id = this.currentRight.currentId;
        // current.state = 2;
        // current.currentPage = "/current/categorize"
        // current.templateId = this.currentcurrent.templateId;
        // this.chatService.setCurrentcurrent(current);
      }


    }
    if ("/current/vote" == this.currentTab) {
      if (this.authService.hasRole("Leader")) {
        this.pathIndex = 6;
        // let current = new current();
        // current.id = this.currentRight.currentId;
        // current.state = 2;
        // current.currentPage = "/current/vote"
        // current.templateId = this.currentcurrent.templateId;
        // this.chatService.setCurrentcurrent(current);
      }
    }
    if ("/current/report" == this.currentTab) {
      if (this.authService.hasRole("Leader")) {
        this.pathIndex = 7;
        // let current = new current();
        // current.id = this.currentRight.currentId;
        // current.state = 2;
        // current.currentPage = "/current/report"
        // current.templateId = this.currentcurrent.templateId;
        // this.chatService.setCurrentcurrent(current);
      }

    }


    this.router.navigate[tab];



    const width = window.innerWidth;
    if (width <= 576)
      this.widgetsContent.nativeElement.scrollLeft += 150;



   
  }

}
