import { Injectable } from "@angular/core";
import { HttpClient, HttpHeaders } from "@angular/common/http";

import { BaseService } from "./base.service";
import { environment } from "../../environments/environment";
import { EndPoints } from "./end-points";
import { RetroConfigration } from "../models/retro-configuration";
import { isNullOrUndefined } from "util";
import { Retro } from "app/models/retro";
import { UserRight } from "app/models/userRight";
import { Report } from "app/models/dto/report";
import { SubjectDto } from "app/models/dto/subject-dto";
import { Subject } from "app/models/subject";
import * as firebase from 'firebase';
import { Message } from "app/models/message";
import { Comment } from "app/models/comment";
import { VoteDto } from "app/models/dto/vote-dto";


@Injectable()
export class RetroConfigurationService {
  constructor(private http: HttpClient, private baseService: BaseService) { }

  create(RetroConfigration: RetroConfigration) {
    return this.baseService.post<RetroConfigration>(
      RetroConfigration,
      environment.serverBaseUrl,
      EndPoints.RETRO_CONFIGURATION
    );
  }

  setSelectedSubject(subject: SubjectDto) {




    return this.baseService.post<Subject>(
      subject,
      environment.serverBaseUrl,
      EndPoints.RETRO_CONFIGURATION+'/SetSelectedSubject'
    );
  }

  getSelectedSubject(subject: SubjectDto) {
    return this.baseService.post<Subject>(
      subject,
      environment.serverBaseUrl,
      EndPoints.RETRO_CONFIGURATION+'/GetSelectedSubject'
    );
  }

  newMessage(message: Message) {

    // const currentRetro = firebase.default.database().ref('currentRetro/').push();
    // currentRetro.set(retro);

    return this.baseService.post<UserRight>(
      message,
      environment.serverBaseUrl,
      EndPoints.RETRO_CONFIGURATION+'/NewMessage'
    );
  }

  newComment(comment:Comment) {

    // const currentRetro = firebase.default.database().ref('currentRetro/').push();
    // currentRetro.set(retro);

    return this.baseService.post<UserRight>(
      comment,
      environment.serverBaseUrl,
      EndPoints.RETRO_CONFIGURATION+'/NewComment'
    );
  }

  newVote(vote: VoteDto) {

    // const currentRetro = firebase.default.database().ref('currentRetro/').push();
    // currentRetro.set(retro);

    return this.baseService.post<UserRight>(
      vote,
      environment.serverBaseUrl,
      EndPoints.RETRO_CONFIGURATION+'/NewVote'
    );
  }

  
  setCurrentRetro(retro: Retro) {

    // const currentRetro = firebase.default.database().ref('currentRetro/').push();
    // currentRetro.set(retro);

    return this.baseService.post<Retro>(
      retro,
      environment.serverBaseUrl,
      EndPoints.RETRO_CONFIGURATION+'/setCurrentRetro'
    );
  }
  

  // getLastRetro(){
  //   return this.baseService.get<Retro>(
  //     "",
  //     environment.serverBaseUrl,
  //     EndPoints.RETRO_CONFIGURATION+'/GetCurrentRetro'
  //   );
  // }

  update(RetroConfigration: any) {
    return this.baseService.update<RetroConfigration>(
      RetroConfigration,
      environment.serverBaseUrl,
      EndPoints.RETRO_CONFIGURATION + "/Update"
    );
  }

  delete(id: any) {
    let data = new RetroConfigration();
    data.id = id;

    return this.baseService.post(
      data,
      environment.serverBaseUrl,
      EndPoints.RETRO_CONFIGURATION + "/Delete?Id=" + id
    );
  }

  getUserRight(retro: Retro) {
    return this.baseService.post<UserRight>(
      retro,
      environment.serverBaseUrl,
      EndPoints.RETRO_CONFIGURATION + '/GetUserRight'
    );
  }

  getRetroConfigration(id: any) {
    return this.baseService.get<RetroConfigration>(
      id,
      environment.serverBaseUrl,
      EndPoints.RETRO_CONFIGURATION
    );
  }

  getRetroReport(data:any) {

  const httpOptions = {
    responseType: 'blob' as 'json',
  };

  return this.http.post<any>(`${environment.serverBaseUrl}/RetroConfiguration/CreatePDF`,data, httpOptions);
  }

  getCurrentRetro(retroId) {
    return this.baseService.get<Retro>(
      retroId,
      environment.serverBaseUrl,
      EndPoints.RETRO_CONFIGURATION + '/GetCurrentRetro'
    );
  }

  getCurrentRetroStep(retroId) {
    return this.baseService.get<Retro>(
      retroId,
      environment.serverBaseUrl,
      EndPoints.RETRO_CONFIGURATION + '/GetCurrentRetroStep'
    );
  }


  createUserRight(userRight:UserRight) {
    return this.baseService.post<UserRight>(
      userRight,
      environment.serverBaseUrl,
      EndPoints.RETRO_CONFIGURATION + '/createUserRight'
    );
  }


  getAllRetroConfigration() {
    return this.baseService.list<RetroConfigration>(
      "",
      environment.serverBaseUrl,
      EndPoints.RETRO_CONFIGURATION
    );
  }
}
