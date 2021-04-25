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
import swal from "sweetalert2";
import { AlertifyService } from "app/services/alertify.service";
import { AuthenticateResponse } from "app/models/authenticate-response";
import * as firebase from 'firebase';
import { snapshotToArray } from "app/helpers/firebase-helper";
import { RetroConfigurationService } from "app/services/retro-configuration";
import { FirebaseOnlineUser } from "app/models/firebase-online-user";

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

  // {
  //   path: "/groups",
  //   title: "Gruplar",
  //   type: "link",
  //   icontype: "fa fa-object-group",

  // },
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
    icontype: "fa fa-grip-horizontal",
  },

];


export const LEADER_ROUTES: RouteInfo[] = [
  {
    path: "/current/start",
    title: "Atölye",
    type: "link",
    icontype: "fa fa-star",
  },
  // {
  //   path: "/retro/start",
  //   title: "Retro-2",
  //   type: "link",
  //   icontype: "fa fa-star",
  // },
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
    icontype: "fa fa-grip-horizontal",
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
  isShow: boolean = true;
  constructor(private router: Router,
    private authService: UserService,
    private sharedService: SharedService,
    private alertifyService: AlertifyService,
    private cdr: ChangeDetectorRef,
    private configureService: RetroConfigurationService,
    private chatService: ChatService, private _ngZone: NgZone,
  ) {


    this.isShow = this.isLeader() || this.isMember();

    if (this.isShow) {
      console.log("this.isShow", this.isShow);

      firebase.default.database().ref('onlineuser/').on('value', (resp: any) => {

        var res = snapshotToArray(resp);
        if (this.currentRetro) {
          console.log("onlineUser-res", res);

          if (res.length > 0) {

            let onlineUser = res.filter(p => p.retroId == this.currentRetro.id);
            this.onlineUser = onlineUser;
            console.log("onlineUser", onlineUser);

          }

        }
      });
    }


    firebase.default.database().ref('currentpath/').orderByChild("id").equalTo(this.retroId).limitToLast(1).on('value', (resp: any) => {
      var data = snapshotToArray(resp);
      if (data.length > 0) {
        let currentPage = data[0].currentPage;
        if (currentPage == "/current/subject")
          this.getLastCurrentRetro(this.retroId);

      }
    });



  }

  @ViewChild("titleInput") titleInput: ElementRef;
  public menuItems: any[];
  users: Array<User> = [];
  onlineUser: Array<FirebaseOnlineUser> = [];
  announcements: Array<RetroAnnouncement> = [];
  contentText: string = '';
  currentRetro: Retro;
  inviteLink: string = "";
  retroId: string = "";

  isNotMobileMenu() {
    if (window.outerWidth > 991) {
      return false;
    }
    return true;
  }

  ngAfterViewInit() {

    this.cdr.detectChanges();
  }


  showAnnouncement(){
    $('#announcementModal').modal("show");
  }

  isCheckPage(){
    let page = this.router.url;
    let currentPages=[
      "/current/subject",
      "/current/template",
      "/current/brainstorm",
      "/current/categorize",
      "/current/comment",
      "/current/vote",
      "/current/report",
    ];
    let isPage=currentPages.filter(p=>p==page);

    if(isPage.length>0){
      return true;
    }
    else{
      return false;
    }
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
    
 
    this.retroId=this.authService.currentRetroIdValue;

    if(this.retroId){
      this.getLastCurrentRetro(this.retroId);
    }


  }
  getLastCurrentRetro(retroId) {

    this.configureService
      .getCurrentRetro(retroId)
      .pipe(first())
      .subscribe(
        (res) => {

          this.currentRetro = res;

          if (this.currentRetro) {
            this.inviteLink = environment.appUrl + "member/" + this.currentRetro.id;
          }
        },
        (error) => {

        });
  }
  copyInputMessage(inputElement){
    inputElement.select();
    document.execCommand('copy');
    inputElement.setSelectionRange(0, 0);

    swal({
      title: "Başarılı bir şekilde kopyalandı.",
      position: "center",
      showConfirmButton: false,
      type: "success",
      timer: 2000
    })

  }

  copyLink() {

    this.retroId=this.authService.currentRetroIdValue;

    if(this.retroId){
     
      this.configureService
      .getCurrentRetro(this.retroId)
      .pipe(first())
      .subscribe(
        (res) => {

          this.currentRetro = res;

          if (this.currentRetro) {
           let value = environment.appUrl + "member/" + this.currentRetro.id;
            // this._clipboardService.copyFromContent(this.inviteLink)

            // this.copyToClipboard(this.inviteLink);

            let selBox = document.createElement('textarea');
            selBox.style.position = 'fixed';
            selBox.style.left = '0';
            selBox.style.top = '0';
            selBox.style.opacity = '0';
            selBox.value = value;
            document.body.appendChild(selBox);
            selBox.focus();
            selBox.select();
            document.execCommand('copy');
            document.body.removeChild(selBox);


            swal({
              title: "Başarılı bir şekilde kopyalandı.",
              position: "center",
              showConfirmButton: false,
              type: "success",
              timer: 2000
            })
        
          }
        },
        (error) => {
          swal({
            title: "Link kopyalanamadı.",
            position: "center",
            showConfirmButton: false,
            type: "error",
            timer: 2000
          })
        });
    }



    



   
  }

   copyToClipboard(textToCopy) {
    var textArea;
     console.log("textToCopy",textToCopy);
    function isOS() {
      console.log("isOS",navigator.userAgent.match(/ipad|iphone/i));

      //can use a better detection logic here
      return navigator.userAgent.match(/ipad|iphone/i);
    }
  
    function createTextArea(text) {
      textArea = document.createElement('textArea');
      textArea.readOnly = true;
      textArea.contentEditable = true;
      textArea.value = text;
      console.log("clip-value",text);
      document.body.appendChild(textArea);
    }
  
    function selectText() {
      var range, selection;
  
      if (isOS()) {
        console.log("select-text-value-ios");
        range = document.createRange();
        range.selectNodeContents(textArea);
        selection = window.getSelection();
        selection.removeAllRanges();
        selection.addRange(range);
        textArea.setSelectionRange(0, 999999);
      } else {
        console.log("select-text-not-ios");

        textArea.select();
      }
    }
  
    function copyTo() {
      document.execCommand('copy');
      document.body.removeChild(textArea);
    }
  
    createTextArea(textToCopy);
    selectText();
    copyTo();
  }







  getShortName(user: AuthenticateResponse) {
    let shortName = user.name[0].toUpperCase() + user.surname[0].toUpperCase();
    return shortName;
  }

  onlineExist(user: AuthenticateResponse) {
    let result = this.onlineUser.filter(p => p.userName == user.userName);

    if (result == undefined || result.length == 0)
      return false;
    else
      return true;
  }



  sendAnnouncement() {
    let context = this.titleInput.nativeElement.value;

    if (context && this.currentRetro) {

      let data = new RetroAnnouncement();
      data.contentText = this.titleInput.nativeElement.value;
      data.retroId = this.currentRetro.id;
      data.userId = this.authService.currentUserValue.userId;

      const newMessage = firebase.default.database().ref('announcement/').push();
      newMessage.set(data);


      this.titleInput.nativeElement.value = '';
      this.contentText = '';



    }
  }







}
