import { Injectable } from "@angular/core";
import { HttpClient } from "@angular/common/http";

import { BaseService } from "./base.service";
import { environment } from "../../environments/environment";
import { EndPoints } from "./end-points";
import { Template } from "../models/template";
import { isNullOrUndefined } from "util";
import { TemplateDetail } from "app/models/template-detail";

@Injectable()
export class TemplateService {
  constructor(private http: HttpClient, private baseService: BaseService) {}

  create(Template: Template) {
   
    return this.baseService.post<Template>(
      Template,
      environment.serverBaseUrl,
      EndPoints.TEMPLATE
    );
  }

  update(Template: any) {
    return this.baseService.update<Template>(
      Template,
      environment.serverBaseUrl,
      EndPoints.TEMPLATE + "/Update"
    );
  }

  delete(id: any) {
    let data = new Template();
    data.id = id;
    let detail = new TemplateDetail();
    data.templateDetail.push(detail);
    return this.baseService.post(
      data,
      environment.serverBaseUrl,
      EndPoints.TEMPLATE + "/Delete?Id=" + id
    );
  }

  getTemplate(id: any) {
    return this.baseService.get<Template>(
      id,
      environment.serverBaseUrl,
      EndPoints.TEMPLATE
    );
  }

  getAllTemplate() {
    return this.baseService.list<Template>(
      "",
      environment.serverBaseUrl,
      EndPoints.TEMPLATE
    );
  }
}
