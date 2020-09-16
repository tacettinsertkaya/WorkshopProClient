import { Injectable } from "@angular/core";
import { HttpClient } from "@angular/common/http";

import { BaseService } from "./base.service";
import { environment } from "../../environments/environment";
import { EndPoints } from "./end-points";
import { Comment } from "../models/Comment";
import { isNullOrUndefined } from "util";

@Injectable()
export class CommentService {
  constructor(private http: HttpClient, private baseService: BaseService) {}

  create(comment: Comment) {
    console.log("Endpoint", EndPoints);
    console.log("EndPoints.Comment", EndPoints.COMMENT);
    return this.baseService.post<Comment>(
      comment,
      environment.serverBaseUrl,
      EndPoints.COMMENT
    );
  }

  update(comment: Comment) {
    return this.baseService.update<Comment>(
      comment,
      environment.serverBaseUrl,
      EndPoints.COMMENT
    );
  }

  delete(id: number) {
    return this.baseService.delete(
      id,
      environment.serverBaseUrl,
      EndPoints.COMMENT
    );
  }

  getComment(id: number) {
    return this.baseService.get<Comment>(
      id,
      environment.serverBaseUrl,
      EndPoints.COMMENT
    );
  }

  getAllComment() {
    return this.baseService.list<Comment>(
      "",
      environment.serverBaseUrl,
      EndPoints.COMMENT
    );
  }
}
