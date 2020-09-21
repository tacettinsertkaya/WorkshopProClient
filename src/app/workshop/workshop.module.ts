import { NgModule } from "@angular/core";
import { RouterModule } from "@angular/router";
import { CommonModule } from "@angular/common";
import { FormsModule } from "@angular/forms";
import { HttpClient, HttpClientModule } from "@angular/common/http";

import { RetrospectivesComponent } from "./retrospectives/retrospectives.component";

import { SchemaComponent } from "./schema/schema.component";
import { BrainstormComponent } from "./brainstorm/brainstorm.component";
import { CommentsComponent } from "./comments/comments.component";
import { TemplatesComponent } from "./templates/templates.component";
import { SubjectComponent } from "./subject/subject.component";
import { SubjectListComponent } from "./subject/subject-list/subject-list.component";
import { CategorizedComponent } from "./categorized/categorized.component";

import { WorkshopRoutes } from "./workshop.routing";

import { ChatService } from "../services/chat.service";
import { MessageService } from "../services/message.service";
import { BaseService } from "../services/base.service";
import { TemplateService } from "../services/template.service";
import { TemplateDetailService } from "../services/template-detail.service";
import { SubjectsService } from "../services/subject.service";
import { CommentService } from "../services/comment.service";
import { CategoryService } from "../services/category.service";
import { SharedService } from "../services/shared.service";

@NgModule({
  imports: [CommonModule, RouterModule.forChild(WorkshopRoutes), FormsModule],
  declarations: [
    RetrospectivesComponent,
    SchemaComponent,
    BrainstormComponent,
    CommentsComponent,
    TemplatesComponent,
    SubjectComponent,
    SubjectListComponent,
    CategorizedComponent,
  ],
  providers: [
    ChatService,
    MessageService,
    HttpClient,
    BaseService,
    TemplateService,
    SubjectsService,
    CommentService,
    SharedService,
    CategoryService,

    TemplateDetailService,
  ],
})
export class WorkshopModule {}
