import { Injectable } from "@angular/core";
import { HttpClient } from "@angular/common/http";

import { BaseService } from "./base.service";
import { environment } from "../../environments/environment";
import { EndPoints } from "./end-points";
import { Subject } from "../models/subject";
import { isNullOrUndefined } from "util";
import { SubjectFilter } from "app/models/dto/subject-filter";
import { Retro } from "app/models/retro";
import { RetroUserReport } from "app/models/dto/retro-user-report";
import { RetroUser } from "app/models/retro-user";

@Injectable()
export class SubjectsService {
  constructor(private http: HttpClient, private baseService: BaseService) {}

  create(subject: Subject) {
    return this.baseService.post<Subject>(
      subject,
      environment.serverBaseUrl,
      EndPoints.SUBJECT
    );
  }

  update(subject: any) {
    return this.baseService.update<Subject>(
      subject,
      environment.serverBaseUrl,
      EndPoints.SUBJECT + "/Update"
    );
  }

  delete(id: any) {
    let data = new Subject();
    data.id = id;

    return this.baseService.post(
      data,
      environment.serverBaseUrl,
      EndPoints.SUBJECT + "/Delete?Id=" + id
    );
  }

  getSubject(id: any) {
    return this.baseService.get<Subject>(
      id,
      environment.serverBaseUrl,
      EndPoints.SUBJECT
    );
  }

  getRetroSubject(id: any) {
    return this.baseService.get<Subject>(
      id,
      environment.serverBaseUrl,
      EndPoints.SUBJECT+'/RetroSubject'
    );
  }


  getAllSubject(filter:SubjectFilter) {
    return this.baseService.listpost<Subject>(
      filter,
      environment.serverBaseUrl,
      EndPoints.SUBJECT+'/GetListByFilter'
    );
  }

  getRetroListBySubject(id:string) {
    return this.baseService.list<RetroUserReport>(
      "",
      environment.serverBaseUrl,
      EndPoints.RETRO_CONFIGURATION+'/GetListRetroBySubjectId/'+id
    );
  }

  getRetroReport(id:string) {
    return this.baseService.list<any>(
      "",
      environment.serverBaseUrl,
      EndPoints.RETRO_CONFIGURATION+'/GetListRetroBySubjectId/'+id
    );
  }


  
  getListRetroUser(id:string) {
    return this.baseService.list<RetroUser>(
      "",
      environment.serverBaseUrl,
      EndPoints.RETRO_CONFIGURATION+'/GetListRetroUser/'+id
    );
  }
}
