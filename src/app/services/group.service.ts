import { Injectable } from "@angular/core";
import { HttpClient } from "@angular/common/http";

import { BaseService } from "./base.service";
import { environment } from "../../environments/environment";
import { EndPoints } from "./end-points";
import { Group } from "../models/group";
import { isNullOrUndefined } from "util";
import { GroupDto } from "app/models/dto/group-dto";

@Injectable()
export class GroupService {
  constructor(private http: HttpClient, private baseService: BaseService) {}

  create(Group: Group) {
   
    return this.baseService.post<Group>(
      Group,
      environment.serverBaseUrl,
      EndPoints.GROUP+'/Create'
    );
  }

  update(Group: any) {
    return this.baseService.update<Group>(
      Group,
      environment.serverBaseUrl,
      EndPoints.GROUP + "/Update"
    );
  }

  delete(id: any) {
   
    return this.baseService.get(
      id,
      environment.serverBaseUrl,
      EndPoints.GROUP + "/Delete"
    );
  }

  getGroup(id: any) {
    return this.baseService.get<Group>(
      id,
      environment.serverBaseUrl,
      EndPoints.GROUP+'/GetById'
    );
  }

  getAllGroup(filter) {
    return this.baseService.listpost<GroupDto>(
      filter,
      environment.serverBaseUrl,
      EndPoints.GROUP+'/GetByFilterList'
    );
  }

  getReset(filter) {
    return this.baseService.listpost<GroupDto>(
      filter,
      environment.serverBaseUrl,
      EndPoints.GROUP+'/GroupReset'
    );
  }
}
