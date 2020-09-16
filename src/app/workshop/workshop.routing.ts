import { Routes } from "@angular/router";

import { RetrospectivesComponent } from "./retrospectives/retrospectives.component";
import { LoginComponent } from "./login/login.component";
import { AuthLayoutComponent } from "app/layouts/auth/auth-layout.component";
import { TemplatesComponent } from "./templates/templates.component";
import { SubjectComponent } from "./subject/subject.component";

export const WorkshopRoutes: Routes = [
  {
    path: "",
    children: [
      {
        path: "retrospectives",
        component: RetrospectivesComponent,
      },
      {
        path: "templates",
        component: TemplatesComponent,
      },
      {
        path: "subjects",
        component: SubjectComponent,
      },
    ],
  },
];
