import { Injectable } from "@angular/core";
import { HttpClient } from "@angular/common/http";

import { BaseService } from "./base.service";
import { environment } from "../../environments/environment";
import { EndPoints } from "./end-points";
import { TemplateDetail } from "../models/template-detail";
import { isNullOrUndefined } from "util";

@Injectable()
export class TemplateDetailService {
  constructor(private http: HttpClient, private baseService: BaseService) {}

  create(TemplateDetail: TemplateDetail) {
 
    return this.baseService.post<TemplateDetail>(
      TemplateDetail,
      environment.serverBaseUrl,
      EndPoints.TEMPLATE_DETAIL
    );
  }

  update(TemplateDetail: any) {
    return this.baseService.update<TemplateDetail>(
      TemplateDetail,
      environment.serverBaseUrl,
      EndPoints.TEMPLATE_DETAIL+"/Update"
    );
  }

  delete(id: number) {
    return this.baseService.delete(
      id,
      environment.serverBaseUrl,
      EndPoints.TEMPLATE_DETAIL
    );
  }

  getTemplateDetail(id: any) {
    return this.baseService.get<TemplateDetail>(
      id,
      environment.serverBaseUrl,
      EndPoints.TEMPLATE_DETAIL
    );
  }

  getAllTemplateDetail() {
    return this.baseService.list<TemplateDetail>(
      "",
      environment.serverBaseUrl,
      EndPoints.TEMPLATE_DETAIL
    );
  }
}
