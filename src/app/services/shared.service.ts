import { Injectable } from "@angular/core";
import { BehaviorSubject } from "rxjs";
import { Subject } from "app/models/subject";
import { Message } from "app/models/message";
import { RetroConfigration } from "app/models/retro-configuration";
import { Retro } from "app/models/retro";
import { UserRight } from "app/models/userRight";

@Injectable()
export class SharedService {
  messageSource: BehaviorSubject<string> = new BehaviorSubject("");
  selectSubject: BehaviorSubject<Subject> = new BehaviorSubject(new Subject());
  retroRight: BehaviorSubject<UserRight> = new BehaviorSubject(new UserRight());
  currentRetro: BehaviorSubject<Retro> = new BehaviorSubject(new Retro());
  isShowSubject: BehaviorSubject<boolean> = new BehaviorSubject(false);
  tabSource: BehaviorSubject<string> = new BehaviorSubject(".select-subject");
  allMessage: BehaviorSubject<Array<Message>> = new BehaviorSubject(
    new Array<Message>()
  );

  constructor() {}

  public get selectSubjectValue(): Subject {
    return this.selectSubject.value;
  }

  // tslint:disable-next-line:typedef
  public selectSubjectSetValue(value) {
    this.selectSubject.next(value);
  }

  public get retroRightValue(): UserRight {
    return this.retroRight.value;
  }

  // tslint:disable-next-line:typedef
  public retroRightSetValue(value) {
    this.retroRight.next(value);
  }

  public get currentRetroValue(): Retro {
    return this.currentRetro.value;
  }

  // tslint:disable-next-line:typedef
  public currentRetroSetValue(value) {
    this.currentRetro.next(value);
  }

  public get allMessageValue(): Array<Message> {
    return this.allMessage.value;
  }

  // tslint:disable-next-line:typedef
  public allMessageSetValue(value) {
    this.allMessage.next(value);
  }
  public get messageSourceValue(): string {
    return this.messageSource.value;
  }

  // tslint:disable-next-line:typedef
  public messageSourceSetValue(value) {
    this.messageSource.next(value);
  }



}
