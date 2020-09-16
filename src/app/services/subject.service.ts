import { Injectable } from "@angular/core";
import { HttpClient } from "@angular/common/http";

import { BaseService } from "./base.service";
import { environment } from "../../environments/environment";
import { EndPoints } from "./end-points";
import { Subject } from "../models/subject";
import { isNullOrUndefined } from "util";

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

  getAllSubject() {
    return this.baseService.list<Subject>(
      "",
      environment.serverBaseUrl,
      EndPoints.SUBJECT
    );
  }
}
