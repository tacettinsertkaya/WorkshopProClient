import { Injectable } from "@angular/core";
import { HttpClient } from "@angular/common/http";

import { BaseService } from "./base.service";
import { environment } from "../../environments/environment";
import { EndPoints } from "./end-points";
import { RetroConfigration } from "../models/retro-configuration";
import { isNullOrUndefined } from "util";

@Injectable()
export class RetroConfigurationService {
  constructor(private http: HttpClient, private baseService: BaseService) {}

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

  getRetroConfigration(id: any) {
    return this.baseService.get<RetroConfigration>(
      id,
      environment.serverBaseUrl,
      EndPoints.RETRO_CONFIGURATION
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
