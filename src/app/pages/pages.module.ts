import { NgModule } from '@angular/core';
import { RouterModule } from '@angular/router';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';

import { PagesRoutes } from './pages.routing';
import { RetroStartComponent } from './retro-start/retro-start.component';
import { RetroSubjectComponent } from './retro-subject/retro-subject.component';
import { RetroTemplateComponent } from './retro-template/retro-template.component';
import { RetroBrainstormComponent } from './retro-brainstorm/retro-brainstorm.component';
import { RetroCommentComponent } from './retro-comment/retro-comment.component';
import { RetroCategorizeComponent } from './retro-categorize/retro-categorize.component';
import { RetroVoteComponent } from './retro-vote/retro-vote.component';
import { RetroReportComponent } from './retro-report/retro-report.component';
import { SubjectHeaderComponent } from 'app/shared/subject-header/subject-header.component';
import { TabHeaderComponent } from 'app/shared/tab-header/tab-header.component';
import { CompanyService } from 'app/services/company.service';
import { TemplateDetailService } from 'app/services/template-detail.service';
import { HttpClient } from '@angular/common/http';
import { TemplateService } from 'app/services/template.service';
import { SubjectsService } from 'app/services/subject.service';
import { SharedService } from 'app/services/shared.service';
import { CommentService } from 'app/services/comment.service';
import { CategoryService } from 'app/services/category.service';
import { RetroHubService } from 'app/services/hub/retro-hub.service';
import { UserHubService } from 'app/services/hub/user-hub.service';


@NgModule({
    imports: [
        CommonModule,
        RouterModule.forChild(PagesRoutes),
        FormsModule,
        FormsModule
    ],
    declarations: [
   
    RetroStartComponent,
   
    RetroSubjectComponent,
   
    RetroTemplateComponent,
   
    RetroBrainstormComponent,
   
    RetroCommentComponent,
   
    RetroCategorizeComponent,
    RetroVoteComponent,
    RetroReportComponent,
    SubjectHeaderComponent,
    TabHeaderComponent,
],
providers:[
    HttpClient,
    TemplateService,
    SubjectsService,
    CommentService,
    SharedService,
    CategoryService,
    TemplateDetailService,
    CompanyService,
    
    RetroHubService,
    UserHubService
]
})

export class PagesModule {}
