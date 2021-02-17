import { CUSTOM_ELEMENTS_SCHEMA, NgModule } from "@angular/core";
import { BrowserAnimationsModule } from "@angular/platform-browser/animations";
import { RouterModule } from "@angular/router";
import { HttpModule } from "@angular/http";
import { APP_BASE_HREF, CommonModule } from "@angular/common";
import { FormBuilder, FormControl, FormGroup, FormsModule, ReactiveFormsModule, Validators } from "@angular/forms";
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

import { HttpClientModule, HTTP_INTERCEPTORS } from "@angular/common/http";

import { BrowserModule } from '@angular/platform-browser';


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
import { DatetimePipe } from './pipes/datetime.pipe';
import { SharedService } from "./services/shared.service";
import { AlertifyService } from "./services/alertify.service";


@NgModule({
  imports: [
    BrowserAnimationsModule,
    FormsModule,
    ReactiveFormsModule, 
    RouterModule.forRoot(AppRoutes, { useHash: true }),
    NgbModule.forRoot(),
    HttpModule,
    HttpClientModule,
    SidebarModule,
    NavbarModule,
    FooterModule,
    FixedPluginModule,
    BrowserModule,
    NgxSpinnerModule,
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
    DatetimePipe,

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
    ReactiveFormsModule
  ],
  bootstrap: [AppComponent],
  schemas: [ CUSTOM_ELEMENTS_SCHEMA ]

})
export class AppModule {}
