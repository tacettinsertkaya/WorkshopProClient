import { CUSTOM_ELEMENTS_SCHEMA, NgModule } from "@angular/core";
import { BrowserAnimationsModule } from "@angular/platform-browser/animations";
import { RouterModule } from "@angular/router";
import { CommonModule } from "@angular/common";
import { FormsModule, ReactiveFormsModule } from "@angular/forms";
import { NgbModule } from "@ng-bootstrap/ng-bootstrap";

import { AppComponent } from "./app.component";
import { LoginComponent } from "./workshop/login/login.component";

import { SidebarModule } from "./sidebar/sidebar.module";
import { FixedPluginModule } from "./shared/fixedplugin/fixedplugin.module";
import { FooterModule } from "./shared/footer/footer.module";
import { NavbarModule } from "./shared/navbar/navbar.module";
import { AdminLayoutComponent } from "./layouts/admin/admin-layout.component";
import { AuthLayoutComponent } from "./layouts/auth/auth-layout.component";
import { AppRoutes } from "./app.routing";




import { JwtInterceptor } from './helpers/jwt.interceptor';
import { ErrorInterceptor } from './helpers/error.interceptor';
import { UserService } from "./services/user.service";
import { BaseService } from "./services/base.service";

import { UserDirectiveDirective } from "./workshop/directive/user-directive.directive";
import { UserRoleDirective } from "./workshop/directive/user-role-directive.directive";


import { LoaderInterceptorService } from './helpers/loaderinceptor.service';
import { LoaderComponent } from "./workshop/loader/loader.component";
import { NgxSpinnerModule } from "ngx-spinner";
import { ChatService } from "./services/chat.service";
import { MessageService } from "./services/message.service";
import { MemberLoginComponent } from "./workshop/member-login/member-login.component";
import { RetroConfigurationService } from "./services/retro-configuration";
import { GroupService } from "./services/group.service";
import { SharedService } from "./services/shared.service";
import { AlertifyService } from "./services/alertify.service";
import * as firebase from 'firebase';
import { DashboardComponent } from "./workshop/dashboard/dashboard.component";
import { RetroFinishComponent } from "./workshop/retro-finish/retro-finish.component";

import {TranslateLoader, TranslateModule} from '@ngx-translate/core';
import {TranslateHttpLoader} from '@ngx-translate/http-loader';
import { HttpClient, HttpClientModule, HTTP_INTERCEPTORS } from "@angular/common/http";
import { BrowserModule } from "@angular/platform-browser";

const config = {
  apiKey: 'AIzaSyDZqPnzXZbtXQUH7umv30cAPL3bJLYiPC8',
  databaseURL: 'https://workshoppro3-default-rtdb.europe-west1.firebasedatabase.app/'
};



firebase.default.initializeApp(config);

@NgModule({
  imports: [
    BrowserAnimationsModule,
    FormsModule,
    ReactiveFormsModule, 
    RouterModule.forRoot(AppRoutes, { useHash: true, relativeLinkResolution: 'legacy' }),
    NgbModule,
    HttpClientModule,
    SidebarModule,
    NavbarModule,
    FooterModule,
    FixedPluginModule,
    BrowserModule,
    NgxSpinnerModule,
    TranslateModule.forRoot({
      loader: {
          provide: TranslateLoader,
          useFactory: HttpLoaderFactory,
          deps: [HttpClient]
      }
    })
  ],
  declarations: [
    AppComponent,
    AdminLayoutComponent,
    AuthLayoutComponent,
    LoginComponent,
    MemberLoginComponent,
    UserRoleDirective,
    UserDirectiveDirective,
    LoaderComponent,
    DashboardComponent,
    RetroFinishComponent,
    
  ],
  providers: [
    UserService,
    BaseService,
    GroupService,
    SharedService,
    ChatService,
    AlertifyService,
    MessageService,
    RetroConfigurationService,
    { provide: HTTP_INTERCEPTORS, useClass: JwtInterceptor, multi: true },
    { provide: HTTP_INTERCEPTORS, useClass: ErrorInterceptor, multi: true },
    {
      provide: HTTP_INTERCEPTORS,
      useClass: LoaderInterceptorService,
      multi: true
    }
  ],
  exports: [
    CommonModule,
    FormsModule,
    ReactiveFormsModule,
  ],
  bootstrap: [AppComponent],
  schemas: [ CUSTOM_ELEMENTS_SCHEMA ]

})
export class AppModule {}


export function HttpLoaderFactory(http: HttpClient): TranslateHttpLoader {
  return new TranslateHttpLoader(http);
}
