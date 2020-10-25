import { Injectable } from "@angular/core";
import { BehaviorSubject } from "rxjs";
import { Subject } from "app/models/subject";
import { Message } from "app/models/message";
import { RetroConfigration } from "app/models/retro-configuration";
import { Retro } from "app/models/retro";

@Injectable()
export class SharedService {
  messageSource: BehaviorSubject<string> = new BehaviorSubject("");
  selectSubject: BehaviorSubject<Subject> = new BehaviorSubject(new Subject());
  retroRight: BehaviorSubject<RetroConfigration> = new BehaviorSubject(new RetroConfigration());
  currentRetro: BehaviorSubject<Retro> = new BehaviorSubject(new Retro());
  isShowSubject: BehaviorSubject<boolean> = new BehaviorSubject(false);
  tabSource: BehaviorSubject<string> = new BehaviorSubject(".select-subject");
  allMessage: BehaviorSubject<Array<Message>> = new BehaviorSubject(
    new Array<Message>()
  );

  constructor() {}
}
