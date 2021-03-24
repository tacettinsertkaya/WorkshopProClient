import { Routes } from "@angular/router";

import { RetrospectivesComponent } from "./retrospectives/retrospectives.component";
import { RetrospectivesInitComponent } from "./retrospectives/retrospectives-init.component";
import { LoginComponent } from "./login/login.component";
import { AuthLayoutComponent } from "app/layouts/auth/auth-layout.component";
import { TemplatesComponent } from "./templates/templates.component";
import { SubjectComponent } from "./subject/subject.component";
import { UserManagementComponent } from "./user-management/user-management.component";
import { SuperUserManagementComponent } from "./super-user-management/super-user-management.component";
import { CompanyManagementComponent } from "./company-management/company-management.component";
import { GroupsComponent } from "./groups/groups.component";
import { AdminComponent } from "./admin/admin.component";
import { SubjectListComponent } from "./subject/subject-list/subject-list.component";
import { SchemaComponent } from "./schema/schema.component";
import { BrainstormComponent } from "./brainstorm/brainstorm.component";
import { CategorizedComponent } from "./categorized/categorized.component";
import { CommentsComponent } from "./comments/comments.component";
import { VoteComponent } from "./vote/vote.component";

export const WorkshopRoutes: Routes = [
  {
    path: "",
    children: [
      {
        path: "retro",
        component: RetrospectivesComponent,
        children: [
        
          {
            path: "subject",
            component: SubjectListComponent,
          },
          {
            path: "subject/:id",
            component: SubjectListComponent,
          },
          {
            path: "template",
            component: SchemaComponent,
          },
          {
            path: "brainstorm",
            component: BrainstormComponent,
          },
          {
            path: "categorize",
            component: CategorizedComponent,
          },
          {
            path: "comment",
            component: CommentsComponent,
          },
          {
            path: "vote",
            component: VoteComponent,
          },


        ]
      },
      {
        path: "retro/start",
        component: RetrospectivesInitComponent,
      },
      // {
      //   path: "retro/:id",
      //   component: RetrospectivesComponent,
      // },
     
     
      {
        path: "templates",
        component: TemplatesComponent,
      }, 
      {
        path: "groups",
        component: GroupsComponent,
      },
      {
        path: "subjects",
        component: SubjectComponent,
      },
      {
        path: "companys",
        component: CompanyManagementComponent,
      },
      {
        path: "users",
        component: UserManagementComponent,
      },
      {
        path: "admins",
        component: AdminComponent,
      }, {
        path: "super-users",
        component: SuperUserManagementComponent,
      },
      
    ],
  },
];
