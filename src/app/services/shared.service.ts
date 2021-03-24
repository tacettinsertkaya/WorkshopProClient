import { Injectable } from "@angular/core";
import { BehaviorSubject } from "rxjs";
import { Subject } from "app/models/subject";
import { Message } from "app/models/message";
import { RetroConfigration } from "app/models/retro-configuration";
import { Retro } from "app/models/retro";
import { UserRight } from "app/models/userRight";
import * as firebase from 'firebase';
import { snapshotToArray } from "app/helpers/firebase-helper";

@Injectable()
export class SharedService {
  messageSource: BehaviorSubject<string> = new BehaviorSubject("");
  selectSubject: BehaviorSubject<Subject> = new BehaviorSubject(new Subject());

  retroRight: BehaviorSubject<UserRight> = new BehaviorSubject(new UserRight());

  currentRetro: BehaviorSubject<Retro> = new BehaviorSubject(new Retro());
  isShowSubject: BehaviorSubject<boolean> = new BehaviorSubject(false);
  tabSource: BehaviorSubject<string> = new BehaviorSubject("/retro/subject");
  allMessage: BehaviorSubject<Array<Message>> = new BehaviorSubject(
    new Array<Message>()
  );

  constructor() {
    this.retroRight = new BehaviorSubject<UserRight>(JSON.parse(localStorage.getItem('retroRight')));

  }

  getCurrentRetroFirebase(){
  
      firebase.default.database().ref('currentRetro/').limitToLast(1).on('value', (resp: any) => {
      
        var data = snapshotToArray(resp);
        console.log("data",data);
        if (data !== undefined) {
          this.currentRetro.next(data[0]);
        }
      });
    
  }

  

  public get selectSubjectValue(): Subject {
    if (this.selectSubject.value.id) {
      
      return this.selectSubject.value;
    }
    else{
      let data = new BehaviorSubject<Subject>(JSON.parse(localStorage.getItem('selectSubject')));
      return data.value;
    }
  }

  // tslint:disable-next-line:typedef
  public selectSubjectSetValue(value) {
    localStorage.setItem('selectSubject', JSON.stringify(value));
    this.selectSubject.next(value);
  }

  public get retroRightValue(): UserRight {
    if (this.retroRight.value) {
      return this.retroRight.value;
    }
    else {
      let data = new BehaviorSubject<UserRight>(JSON.parse(localStorage.getItem('retroRight')));
      return data.value;
    }
  }

  // tslint:disable-next-line:typedef
  public retroRightSetValue(value) {
    localStorage.setItem('retroRight', JSON.stringify(value));
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
