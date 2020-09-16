import { Injectable } from "@angular/core";
import { HttpClient } from "@angular/common/http";

import { BaseService } from "./base.service";
import { environment } from "../../environments/environment";
import { EndPoints } from "./end-points";
import { Message } from "../models/message";
import { isNullOrUndefined } from "util";

@Injectable()
export class MessageService {
  constructor(private http: HttpClient, private baseService: BaseService) {}

  create(Message: Message) {
    console.log("Endpoint", EndPoints);
    console.log("EndPoints.Message", EndPoints.MESSAGE);
    return this.baseService.post<Message>(
      Message,
      environment.serverBaseUrl,
      EndPoints.MESSAGE
    );
  }

  update(Message: Message) {
    return this.baseService.update<Message>(
      Message,
      environment.serverBaseUrl,
      EndPoints.MESSAGE
    );
  }

  delete(id: number) {
    return this.baseService.delete(
      id,
      environment.serverBaseUrl,
      EndPoints.MESSAGE
    );
  }

  getMessage(id: number) {
    return this.baseService.get<Message>(
      id,
      environment.serverBaseUrl,
      EndPoints.MESSAGE
    );
  }

  getAllMessage() {
    return this.baseService.list<Message>(
      "",
      environment.serverBaseUrl,
      EndPoints.MESSAGE
    );
  }
}
