import { Routes } from "@angular/router";

import { RetrospectivesComponent } from "./retrospectives/retrospectives.component";
import { RetrospectivesInitComponent } from "./retrospectives/retrospectives-init.component";
import { LoginComponent } from "./login/login.component";
import { AuthLayoutComponent } from "app/layouts/auth/auth-layout.component";
import { TemplatesComponent } from "./templates/templates.component";
import { SubjectComponent } from "./subject/subject.component";
import { UserManagementComponent } from "./user-management/user-management.component";

export const WorkshopRoutes: Routes = [
  {
    path: "",
    children: [
      {
        path: "retro",
        component: RetrospectivesComponent,
      },
      {
        path: "retro-start",
        component: RetrospectivesInitComponent,
      },
      {
        path: "templates",
        component: TemplatesComponent,
      },
      {
        path: "subjects",
        component: SubjectComponent,
      },
      {
        path: "users",
        component: UserManagementComponent,
      },
    ],
  },
];
