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

  getRetroReport(id: string) {

  const httpOptions = {
    responseType: 'blob' as 'json',
  };

  return this.http.get<any>(`${environment.serverBaseUrl}/RetroConfiguration/CreatePDF/${id}`, httpOptions);
  }

  getCurrentRetro() {
    return this.baseService.get<RetroConfigration>(
      "",
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
