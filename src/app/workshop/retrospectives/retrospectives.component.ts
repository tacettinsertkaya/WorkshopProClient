import { Component, OnInit } from "@angular/core";
import { SharedService } from "app/services/shared.service";
import { Subject } from "app/models/subject";

declare var $: any;
@Component({
  moduleId: module.id,
  selector: "retro-cmp",
  templateUrl: "retrospectives.component.html",
})
export class RetrospectivesComponent implements OnInit {
  /**
   *
   */
  selectSubject: Subject = null;
  isShow: boolean = false;
  constructor(private sharedService: SharedService) {
    this.sharedService.tabSource.subscribe((tab: string) => {
      $(tab).click();
      $(".tab-progress").find(".nav-item").removeClass("active");
    });

    this.sharedService.selectSubject.subscribe((subject: any) => {
      console.log("subject", subject);
      this.selectSubject = subject;
    });

    this.sharedService.isShowSubject.subscribe((isShow: any) => {
      console.log("isShow", isShow);
      this.isShow = isShow;
    });
  }

  ngOnInit(): void {}
}
