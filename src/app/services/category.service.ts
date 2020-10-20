import { Injectable } from "@angular/core";
import { HttpClient } from "@angular/common/http";

import { BaseService } from "./base.service";
import { environment } from "../../environments/environment";
import { EndPoints } from "./end-points";
import { Category } from "../models/Category";
import { isNullOrUndefined } from "util";
import { CategorizedMessage } from "app/models/dto/categorized-message";

@Injectable()
export class CategoryService {
  constructor(private http: HttpClient, private baseService: BaseService) {}

  create(category: Category) {
   
    return this.baseService.post<Category>(
      category,
      environment.serverBaseUrl,
      EndPoints.CATEGORY
    );
  }

  createCategoryMessage(categoryMessage: CategorizedMessage) {
    
    return this.baseService.post<Category>(
      categoryMessage,
      environment.serverBaseUrl,
      EndPoints.CATEGORY + "/CreateCategoryMessage"
    );
  }

  deleteCategoryMessage(category: CategorizedMessage) {
  
    return this.baseService.post<CategorizedMessage>(
      category,
      environment.serverBaseUrl,
      EndPoints.CATEGORY + "/DeleteCategoryMessage"
    );
  }

  update(Category: Category) {
    return this.baseService.update<Category>(
      Category,
      environment.serverBaseUrl,
      EndPoints.CATEGORY
    );
  }

  delete(id: number) {
    return this.baseService.delete(
      id,
      environment.serverBaseUrl,
      EndPoints.CATEGORY
    );
  }

  getCategory(id: number) {
    return this.baseService.get<Category>(
      id,
      environment.serverBaseUrl,
      EndPoints.CATEGORY
    );
  }

  getAllCategory() {
    return this.baseService.list<Category>(
      "",
      environment.serverBaseUrl,
      EndPoints.CATEGORY
    );
  }
}
