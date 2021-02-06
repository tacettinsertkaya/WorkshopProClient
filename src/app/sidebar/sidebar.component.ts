import { ElementSchemaRegistry } from "@angular/compiler";
import {
  Component,
  OnInit,
  AfterViewInit,
  AfterViewChecked,
  AfterContentInit,
  ViewChild,
  ElementRef,
  ChangeDetectorRef,
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
import { environment } from "../../environments/environment";
import { ClipboardService } from "ngx-clipboard";
import swal from "sweetalert2";
import { AlertifyService } from "app/services/alertify.service";
import { AuthenticateResponse } from "app/models/authenticate-response";

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

  // {
  //   path: "/dashboard",
  //   title: "Dashboard",
  //   type: "link",
  //   icontype: "fa fa-home",

  // },
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
    icontype: "fa fa-layout",
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
    icontype: "fa fa-home",

  },
  {
    path: "/retro-start",
    title: "Retro",
    type: "link",
    icontype: "fa fa-chat",
  },
  {
    path: "/templates",
    title: "Şablonlar",
    type: "link",
    icontype: "fa fa-layout",
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
    private alertifyService: AlertifyService,
    private _clipboardService: ClipboardService,
    private cdr: ChangeDetectorRef,
    private chatService: ChatService, private _ngZone: NgZone,
  ) {

    this.subscribeToEvents();
    this.subscribeRetroAnnouncementToEvents();
    this.subscribeToCurrentRetroEvents();

    this.sharedService.currentRetro.subscribe((retro: any) => {
     
      if (retro) {
        this.currentRetro = retro;
        this.inviteLink = environment.appUrl + "member/" + this.currentRetro.id;
      }
    });
    
  }

  @ViewChild("titleInput") titleInput: ElementRef;
  public menuItems: any[];
  users: Array<User> = [];
  onlineUser: Array<string> = [];
  announcements: Array<RetroAnnouncement> = [];
  contentText: string = '';
  currentRetro: Retro;
  inviteLink: string = "";
  isNotMobileMenu() {
    if (window.outerWidth > 991) {
      return false;
    }
    return true;
  }

  ngAfterViewInit() {

    this.cdr.detectChanges();
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



  copyLink() {
    this._clipboardService.copyFromContent(this.inviteLink)
    
    swal({
      title: "Başarılı bir kopyalandı.",
      position:"center",
      showConfirmButton: false,
      type: "success",
      timer: 2000
    })

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

  getShortName(user:AuthenticateResponse){
 let shortName = user.name[0].toUpperCase()+ user.surname[0].toUpperCase();
   return shortName;
  }

  onlineExist(user) {

    let result = this.onlineUser.filter(p => p == user.name);
    if (result == undefined || result.length == 0)
      return false;
    else
      return true;
  }



  sendAnnouncement() {
    let context = this.titleInput.nativeElement.value;
    if (context) {
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
        this.sharedService.currentRetro.next(retro);
      })
    });
  }


  getAllUser() {
    let filterRoles = ["Member"];
    if (this.authService.currentUserValue) {

      let userFilter = new UserFilter();
      userFilter.companyId = this.authService.currentUserValue ? this.authService.currentUserValue.companyId : '';
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
                this.alertifyService.error();
                
          }
        );
    }
  }

}
