import { Injectable } from "@angular/core";
import { BehaviorSubject } from "rxjs";
import { Subject } from "app/models/subject";

@Injectable()
export class SharedService {
  messageSource: BehaviorSubject<string> = new BehaviorSubject("");
  selectSubject: BehaviorSubject<Subject> = new BehaviorSubject(new Subject());
  isShowSubject: BehaviorSubject<boolean> = new BehaviorSubject(false);
  tabSource: BehaviorSubject<string> = new BehaviorSubject(".select-subject");

  constructor() {}
}
