import { Routes } from "@angular/router";
import { AuthGuard } from "./helpers/auth.guard";

import { AdminLayoutComponent } from "./layouts/admin/admin-layout.component";
import { AuthLayoutComponent } from "./layouts/auth/auth-layout.component";
import { DashboardComponent } from "./workshop/dashboard/dashboard.component";

import { LoginComponent } from "./workshop/login/login.component";
import { MemberLoginComponent } from "./workshop/member-login/member-login.component";
import { RetroFinishComponent } from "./workshop/retro-finish/retro-finish.component";

export const AppRoutes: Routes = [
  // {
  //   path: "",
  //   redirectTo: "dashboard",
  //   pathMatch: "full",
  // },
  {
    path: "",
    component: AdminLayoutComponent,
    canActivate: [AuthGuard],
    children: [
      // {
      //   path: "dashboard",
      //   component: DashboardComponent,
      // },
     

      {
        path: "",
        loadChildren: "./workshop/workshop.module#WorkshopModule",
      },
      {
        path: "current",
        loadChildren: "./pages/pages.module#PagesModule",
      },

     
    

     
    ],
  },
  {
    path: "",
    component: AuthLayoutComponent,
    children: [
      {
        path: "member/:id",
        component: MemberLoginComponent,
      },
      {
        path: "login",
        component: LoginComponent,
      },
      {
        path: "current/finish",
        component: RetroFinishComponent
      },
    ],
  },
];
