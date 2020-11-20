import {
  Component,
  OnInit,
  AfterViewInit,
  AfterViewChecked,
  AfterContentInit,
} from "@angular/core";
import { Router } from "@angular/router";
import { User } from "app/models/user";
import { UserService } from "app/services/user.service";
import { first } from "rxjs/operators";
declare var $: any;

//Metadata
export interface RouteInfo {
  path: string;
  title: string;
  type: string;
  icontype: string;
  // icon: string;
  children?: ChildrenItems[];
}

export interface ChildrenItems {
  path: string;
  title: string;
  ab: string;
  type?: string;
}

//Menu Items
export const ROUTES: RouteInfo[] = [
  {
    path: "/dashboard",
    title: "Dashboard",
    type: "link",
    icontype: "nc-icon nc-bank",
  },
  {
    path: "/retro-start",
    title: "Retro",
    type: "link",
    icontype: "nc-icon nc-chat-33",
  },
  {
    path: "/templates",
    title: "Şablonlar",
    type: "link",
    icontype: "nc-icon nc-layout-11",
  },
  {
    path: "/subjects",
    title: "Konular",
    type: "link",
    icontype: "fa fa-copy",
  },
  {
    path: "/users",
    title: "Kullanıcılar",
    type: "link",
    icontype: "fa fa-users",
  },
  {
    path: "/super-users",
    title: "Super Adminler",
    type: "link",
    icontype: "fa fa-id-card",
  },

  // {
  //   path: "/components",
  //   title: "Components",
  //   type: "sub",
  //   icontype: "nc-icon nc-layout-11",
  //   children: [
  //     { path: "buttons", title: "Buttons", ab: "B" },
  //     { path: "grid", title: "Grid System", ab: "GS" },
  //     { path: "panels", title: "Panels", ab: "P" },
  //     { path: "sweet-alert", title: "Sweet Alert", ab: "SA" },
  //     { path: "notifications", title: "Notifications", ab: "N" },
  //     { path: "icons", title: "Icons", ab: "I" },
  //     { path: "typography", title: "Typography", ab: "T" },
  //   ],
  // },
  // {
  //   path: "/forms",
  //   title: "Forms",
  //   type: "sub",
  //   icontype: "nc-icon nc-ruler-pencil",
  //   children: [
  //     { path: "regular", title: "Regular Forms", ab: "RF" },
  //     { path: "extended", title: "Extended Forms", ab: "EF" },
  //     { path: "validation", title: "Validation Forms", ab: "VF" },
  //     { path: "wizard", title: "Wizard", ab: "W" },
  //   ],
  // },
  // {
  //   path: "/tables",
  //   title: "Tables",
  //   type: "sub",
  //   icontype: "nc-icon nc-single-copy-04",
  //   children: [
  //     { path: "regular", title: "Regular Tables", ab: "RT" },
  //     { path: "extended", title: "Extended Tables", ab: "ET" },
  //     { path: "datatables.net", title: "Datatables.net", ab: "DT" },
  //   ],
  // },
  // {
  //   path: "/maps",
  //   title: "Maps",
  //   type: "sub",
  //   icontype: "nc-icon nc-pin-3",
  //   children: [
  //     { path: "google", title: "Google Maps", ab: "GM" },
  //     { path: "fullscreen", title: "Full Screen Map", ab: "FSM" },
  //     { path: "vector", title: "Vector Map", ab: "VM" },
  //   ],
  // },
  // {
  //   path: "/widgets",
  //   title: "Widgets",
  //   type: "link",
  //   icontype: "nc-icon nc-box",
  // },
  // {
  //   path: "/charts",
  //   title: "Charts",
  //   type: "link",
  //   icontype: "nc-icon nc-chart-bar-32",
  // },
  // {
  //   path: "/calendar",
  //   title: "Calendar",
  //   type: "link",
  //   icontype: "nc-icon nc-calendar-60",
  // },
  // {
  //   path: "/pages",
  //   title: "Pages",
  //   type: "sub",
  //   icontype: "nc-icon nc-book-bookmark",
  //   children: [
  //     { path: "timeline", title: "Timeline Page", ab: "T" },
  //     { path: "user", title: "User Page", ab: "UP" },
  //     { path: "login", title: "Login Page", ab: "LP" },
  //     { path: "register", title: "Register Page", ab: "RP" },
  //     { path: "lock", title: "Lock Screen Page", ab: "LSP" },
  //   ],
  // },
];

@Component({
  moduleId: module.id,
  selector: "sidebar-cmp",
  templateUrl: "sidebar.component.html",
})
export class SidebarComponent {
  constructor(private router: Router, private authService: UserService) { }
  public menuItems: any[];
  users: Array<User> = [];
  isNotMobileMenu() {
    if (window.outerWidth > 991) {
      return false;
    }
    return true;
  }


 
  get isAuthorized() {
    return this.authService.isAuthorized();
  }
   isAdmin() {
  
    return this.authService.hasRole("Admin") || this.authService.hasRole("SuperAdmin");

  }

  isLeader() {
  
    return this.authService.hasRole("Leader");

  }

  ngOnInit() {
   

    if(this.isLeader() || this.isAdmin() ){
      this.getAllUser();
    }

    if(this.isAdmin()){
      this.menuItems = ROUTES.filter((menuItem) => menuItem);
      
    }
   else{
    this.menuItems=[{
      path: "/retro-start",
      title: "Retro",
      type: "link",
      icontype: "nc-icon nc-chat-33",
    },]

   }
  }
  ngAfterViewInit() {}


  
  getAllUser() {
    let filterRoles=["Member"];

    
    this.authService
      .getAllUser(filterRoles)
      .pipe(first())
      .subscribe(
        (res) => {
          this.users = res;
        },
        (error) => {
          $.notify(
            {
              icon: "ti-gift",
              message: "İşlem sırasında hata oluştu.",
            },
            {
              type: "danger",
              timer: 4000,
              placement: {
                from: "top",
                align: "right",
              },
              template:
                '<div data-notify="container" class="col-11 col-md-4 alert alert-{0} alert-with-icon" role="alert"><button type="button" aria-hidden="true" class="close" data-notify="dismiss"><i class="nc-icon nc-simple-remove"></i></button><span data-notify="icon" class="nc-icon nc-bell-55"></span> <span data-notify="title">{1}</span> <span data-notify="message">{2}</span><div class="progress" data-notify="progressbar"><div class="progress-bar progress-bar-{0}" role="progressbar" aria-valuenow="0" aria-valuemin="0" aria-valuemax="100" style="width: 0%;"></div></div><a href="{3}" target="{4}" data-notify="url"></a></div>',
            }
          );
        }
      );
  }

}
