import { Injectable } from "@angular/core";
import { HttpClient } from "@angular/common/http";

import { BaseService } from "./base.service";
import { environment } from "../../environments/environment";
import { EndPoints } from "./end-points";
import { Company } from "../models/Company";
import { isNullOrUndefined } from "util";

@Injectable()
export class CompanyService {
  constructor(private http: HttpClient, private baseService: BaseService) {}

  create(Company: Company) {
   
    return this.baseService.post<Company>(
      Company,
      environment.serverBaseUrl,
      EndPoints.COMPANY+'/Create'
    );
  }

  update(Company: any) {
    return this.baseService.update<Company>(
      Company,
      environment.serverBaseUrl,
      EndPoints.COMPANY + "/Update"
    );
  }

  delete(id: any) {
   
    return this.baseService.delete(
      id,
      environment.serverBaseUrl,
      EndPoints.COMPANY + "/Delete"
    );
  }

  getCompany(id: any) {
    return this.baseService.get<Company>(
      id,
      environment.serverBaseUrl,
      EndPoints.COMPANY+'/GetById'
    );
  }

  getAllCompany() {
    return this.baseService.list<Company>(
      "",
      environment.serverBaseUrl,
      EndPoints.COMPANY+'/GetList'
    );
  }
}
