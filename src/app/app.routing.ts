import { Routes } from "@angular/router";

import { AdminLayoutComponent } from "./layouts/admin/admin-layout.component";
import { AuthLayoutComponent } from "./layouts/auth/auth-layout.component";

import { LoginComponent } from "./workshop/login/login.component";

export const AppRoutes: Routes = [
  {
    path: "",
    redirectTo: "dashboard",
    pathMatch: "full",
  },
  {
    path: "",
    component: AdminLayoutComponent,
    children: [
      {
        path: "",
        loadChildren: "./dashboard/dashboard.module#DashboardModule",
      },
      {
        path: "components",
        loadChildren: "./components/components.module#ComponentsModule",
      },

      {
        path: "",
        loadChildren: "./workshop/workshop.module#WorkshopModule",
      },
      {
        path: "forms",
        loadChildren: "./forms/forms.module#Forms",
      },
      {
        path: "tables",
        loadChildren: "./tables/tables.module#TablesModule",
      },
      {
        path: "maps",
        loadChildren: "./maps/maps.module#MapsModule",
      },

      {
        path: "calendar",
        loadChildren: "./calendar/calendar.module#CalendarModule",
      },
      {
        path: "",
        loadChildren: "./userpage/user.module#UserModule",
      },
      {
        path: "",
        loadChildren: "./timeline/timeline.module#TimelineModule",
      },
      {
        path: "",
        loadChildren: "./widgets/widgets.module#WidgetsModule",
      },
    ],
  },
  {
    path: "",
    component: AuthLayoutComponent,
    children: [
      {
        path: "login",
        component: LoginComponent,
      },
    ],
  },
];
