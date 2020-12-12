import { ElementSchemaRegistry } from "@angular/compiler";
import {
  Component,
  OnInit,
  AfterViewInit,
  AfterViewChecked,
  AfterContentInit,
  ViewChild,
  ElementRef,
} from "@angular/core";
import { NgZone } from "@angular/core";

import { Router } from "@angular/router";
import { UserFilter } from "app/models/dto/user-filter";
import { User } from "app/models/user";
import { ChatService } from "app/services/chat.service";
import { UserService } from "app/services/user.service";
import { first } from "rxjs/operators";
declare var $: any;
import * as _ from 'lodash';
import { RetroAnnouncement } from "app/models/retro-announcement";
import { Retro } from "app/models/retro";
import { SharedService } from "app/services/shared.service";

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

export const SUPER_ADMIN_ROUTES: RouteInfo[] = [

  {
    path: "/dashboard",
    title: "Dashboard",
    type: "link",
    icontype: "nc-icon nc-bank",

  },
  {
    path: "/companys",
    title: "Şirketler",
    type: "link",
    icontype: "fa fa-building",
  },
  {
    path: "/admins",
    title: "Adminler",
    type: "link",
    icontype: "fa fa-id-badge",
  },
  {
    path: "/super-users",
    title: "Super Adminler",
    type: "link",
    icontype: "fa fa-id-card",
  },
]


export const ADMIN_ROUTES: RouteInfo[] = [

  {
    path: "/groups",
    title: "Gruplar",
    type: "link",
    icontype: "fa fa-object-group",

  },
  {
    path: "/users",
    title: "Kullanıcılar",
    type: "link",
    icontype: "fa fa-users",
  },
  {
    path: "/subjects",
    title: "Konular",
    type: "link",
    icontype: "fa fa-copy",
  },
  {
    path: "/templates",
    title: "Şablonlar",
    type: "link",
    icontype: "nc-icon nc-layout-11",
  },

];


export const LEADER_ROUTES: RouteInfo[] = [
  {
    path: "/retro-start",
    title: "Retro",
    type: "link",
    icontype: "fa fa-star",
  },
  // {
  //   path: "/retro",
  //   title: "Chat",
  //   type: "link",
  //   icontype: "nc-icon nc-chat-33",
  // },

  // {
  //   path: "/invite",
  //   title: "Davet Gönder",
  //   type: "link",
  //   icontype: "fa fa-envelope",
  // },
];


export const MEMBER_ROUTES: RouteInfo[] = [

  // {
  //   path: "/retro-start",
  //   title: "Chat",
  //   type: "link",
  //   icontype: "nc-icon nc-chat-33",
  // }
];





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
    path: "/companys",
    title: "Şirketler",
    type: "link",
    icontype: "fa fa-building",
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


];

@Component({
  moduleId: module.id,
  selector: "sidebar-cmp",
  templateUrl: "sidebar.component.html",
})
export class SidebarComponent {
  constructor(private router: Router,
    private authService: UserService,
    private sharedService: SharedService,
    private chatService: ChatService, private _ngZone: NgZone,
  ) {

    this.subscribeToEvents();
    this.subscribeRetroAnnouncementToEvents();
    this.subscribeToCurrentRetroEvents();
  }

  @ViewChild("titleInput") titleInput: ElementRef;
  public menuItems: any[];
  users: Array<User> = [];
  onlineUser: Array<string> = [];
  announcements: Array<RetroAnnouncement> = [];
  contentText: string = '';
  currentRetro: Retro;
  isNotMobileMenu() {
    if (window.outerWidth > 991) {
      return false;
    }
    return true;
  }



  get isAuthorized() {
    return this.authService.isAuthorized();
  }
  isSuperAdmin() {
    return this.authService.hasRole("SuperAdmin")
  }

  isAdmin() {
    return this.authService.hasRole("Admin");

  }

  isLeader() {
    return this.authService.hasRole("Leader");

  }

  isMember() {
    return this.authService.hasRole("Member");

  }

  ngOnInit() {
    if (this.isSuperAdmin()) {
      this.menuItems = SUPER_ADMIN_ROUTES;
    }
    if (this.isAdmin()) {
      this.menuItems = ADMIN_ROUTES;
    }
    if (this.isLeader()) {
      this.menuItems = LEADER_ROUTES;
    }
    if (this.isMember()) {
      this.menuItems = MEMBER_ROUTES;
    }

    this.currentRetro = this.sharedService.currentRetroValue;

  }


  private subscribeToEvents(): void {
    this.chatService.onlineUserReceived.subscribe((data: Array<string>) => {
      this._ngZone.run(() => {
        this.onlineUser = data;
        this.getAllUser();
      });
    });
  }

  private subscribeRetroAnnouncementToEvents(): void {
    this.chatService.announcementReceived.subscribe((data: RetroAnnouncement) => {
      this._ngZone.run(() => {
       
        if (this.currentRetro) {
          if (data.retroId == this.currentRetro.id)
            this.announcements.push(data);
        }


      });
    });
  }

  onlineExist(user) {

    let result = this.onlineUser.filter(p => p == user.name);
    if (result == undefined || result.length == 0)
      return false;
    else
      return true;
  }



  sendAnnouncement() {
    let context= this.titleInput.nativeElement.value;
    if(context){
    let data = new RetroAnnouncement();
    data.contentText = this.titleInput.nativeElement.value;
    data.retroId = this.currentRetro.id;
    data.userId = this.authService.currentUserValue.userId;

    this.chatService.setRetroAnnouncement(data);
    this.contentText = '';
    this.titleInput.nativeElement.value = '';
    }
  }


  private subscribeToCurrentRetroEvents(): void {
    this.chatService.currentRetroReceived.subscribe((retro: Retro) => {
      this._ngZone.run(() => {
        this.currentRetro = retro;
      })
    });
  }


  getAllUser() {
    let filterRoles = ["Member"];

    let userFilter = new UserFilter();
    userFilter.companyId = this.authService.currentUserValue.companyId;
    userFilter.filterRoles = filterRoles;

    this.authService
      .getAllUser(userFilter)
      .pipe(first())
      .subscribe(
        (res) => {
          this.users = res;
          this.users = _.orderBy(res, ['userName'], ['asc']);
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
