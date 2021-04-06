import { Component, OnInit, ViewChild, ElementRef, Directive, NgZone, AfterViewChecked, Renderer2 } from '@angular/core';
import { ROUTES } from '../.././sidebar/sidebar.component';
import { Router, ActivatedRoute, NavigationEnd, NavigationStart } from '@angular/router';
import { Location, LocationStrategy, PathLocationStrategy } from '@angular/common';
import { Subscription } from 'rxjs/Subscription';
import { UserService } from 'app/services/user.service';
import { ChatService } from 'app/services/chat.service';
import { RetroAnnouncement } from 'app/models/retro-announcement';
import { SharedService } from 'app/services/shared.service';
import { Retro } from 'app/models/retro';
import { ChangeDetectorRef, AfterContentChecked } from '@angular/core'
import swal from 'sweetalert2';
import * as firebase from 'firebase';
import { snapshotToArray } from "app/helpers/firebase-helper";
import { filter, first } from 'rxjs/operators';
import { RetroConfigurationService } from 'app/services/retro-configuration';
import { VirtualTimeScheduler } from 'rxjs';


declare var $: any;

var misc: any = {
    navbar_menu_visible: 0,
    active_collapse: true,
    disabled_collapse_init: 0,
}

@Component({
    moduleId: module.id,
    selector: 'navbar-cmp',
    templateUrl: 'navbar.component.html'
})

export class NavbarComponent implements OnInit, AfterViewChecked {

    private listTitles: any[];
    location: Location;
    private nativeElement: Node;
    private toggleButton;
    private sidebarVisible: boolean;
    private _router: Subscription;
    userName: string;
    @ViewChild("navbar-cmp") button;
    currentRetro: Retro;
    announcements: Array<RetroAnnouncement> = [];


   retroId:string='';



    constructor(location: Location, private sharedService: SharedService,
        private _ngZone: NgZone, private renderer: Renderer2, private element: ElementRef, private router: Router,
        private userService: UserService,
        private chatService: ChatService,
        private configureService: RetroConfigurationService,
        private cdRef: ChangeDetectorRef
    ) {
        this.location = location;
        this.nativeElement = element.nativeElement;
        this.sidebarVisible = false;
        this.subscribeRetroAnnouncementToEvents();



    }
    ngAfterViewChecked() {
        this.cdRef.detectChanges();

    }


    ngOnInit() {



        if (this.userService.currentUserValue != null) {
            this.userName = this.userService.currentUserValue.userName;
        }

        this.listTitles = ROUTES.filter(listTitle => listTitle);

        const navbar: HTMLElement = this.element.nativeElement;
        const body = document.getElementsByTagName('body')[0];
        this.toggleButton = navbar.getElementsByClassName('navbar-toggler')[0];
        if (body.classList.contains('sidebar-mini')) {
            misc.sidebar_mini_active = true;
        }
        this._router = this.router.events.filter(event => event instanceof NavigationEnd).subscribe((event: NavigationEnd) => {
            const $layer = document.getElementsByClassName('close-layer')[0];
            if ($layer) {
                $layer.remove();
            }
        });


        this.retroId=this.userService.currentRetroIdValue;

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


                },
                (error) => {

                });
    }


    clickAnnounModal(){
        $('#announcementListModal').modal('show');
    }


    private subscribeRetroAnnouncementToEvents(): void {

        if (this.isLeader() || this.isMember()) {
            firebase.default.database().ref('announcement/').limitToLast(1).on('value', (resp: any) => {
                var res = snapshotToArray(resp);
                if (this.currentRetro && res.length > 0) {

                    
                    if (res[0].retroId == this.currentRetro.id) {
                        let an = res[0];
                        this.announcements.push(an);
                         console.log(" this.announcements", this.announcements);


                        swal({
                            text: an.contentText,
                            position: 'top-end',
                            showConfirmButton: true,
                            confirmButtonText:'Kapat',
                            timer: 5000
                        })


                    }
                }

            });
        }




    }

    logout() {
        let currentUser = this.userService.currentUserValue;

        
        if (currentUser) {
         
            if (this.isLeader() || this.isMember()) {

                if(this.isLeader()){
                    let retro = new Retro();
                    retro.id = this.userService.currentRetroIdValue;
                    retro.currentPage = "/current/finish"
            
                    const newMessage = firebase.default.database().ref('currentpath/').push();
                    newMessage.set(retro);
                    localStorage.removeItem('currentRetroId');
                }


                var leadsRef = firebase.default.database().ref('onlineuser/');
                leadsRef.on('value', function (snapshot) {
                    var data = snapshotToArray(snapshot);
                    var filterUser = data.filter(p => p.userId == currentUser.userId);
                    if (filterUser.length > 0) {
                        filterUser.forEach(p => {
                            firebase.default.database().ref('onlineuser/' + p.key).remove();

                        })
                    }
                });
            }

        }

        localStorage.removeItem('currentUser');
   
        
        this.userService.currentUserSetValue(null);
        this.router.navigate(["/login"])



    }

    isLeader() {
        return this.userService.hasRole("Leader");
    }

    isMember() {
        return this.userService.hasRole("Member");

    }


    minimizeSidebar() {
        const body = document.getElementsByTagName('body')[0];

        if (misc.sidebar_mini_active === true) {
            body.classList.remove('sidebar-mini');
            misc.sidebar_mini_active = false;

        } else {
            setTimeout(function () {
                body.classList.add('sidebar-mini');

                misc.sidebar_mini_active = true;
            }, 300);
        }

        // we simulate the window Resize so the charts will get updated in realtime.
        const simulateWindowResize = setInterval(function () {
            window.dispatchEvent(new Event('resize'));
        }, 180);

        // we stop the simulation of Window Resize after the animations are completed
        setTimeout(function () {
            clearInterval(simulateWindowResize);
        }, 1000);
    }

    isMobileMenu() {
        if (window.outerWidth < 991) {
            return false;
        }
        return true;
    }

    sidebarOpen() {
        var toggleButton = this.toggleButton;
        var html = document.getElementsByTagName('html')[0];
        setTimeout(function () {
            toggleButton.classList.add('toggled');
        }, 500);
        const mainPanel = <HTMLElement>document.getElementsByClassName('main-panel')[0];
        if (window.innerWidth < 991) {
            mainPanel.style.position = 'fixed';
        }
        html.classList.add('nav-open');
        this.sidebarVisible = true;
    }
    sidebarClose() {
        var html = document.getElementsByTagName('html')[0];
        this.toggleButton.classList.remove('toggled');
        this.sidebarVisible = false;
        html.classList.remove('nav-open');
        const mainPanel = <HTMLElement>document.getElementsByClassName('main-panel')[0];

        if (window.innerWidth < 991) {
            setTimeout(function () {
                mainPanel.style.position = '';
            }, 500);
        }
    }
    sidebarToggle() {
        // var toggleButton = this.toggleButton;
        // var body = document.getElementsByTagName('body')[0];
        if (this.sidebarVisible == false) {
            this.sidebarOpen();
        } else {
            this.sidebarClose();
        }
    }

    getTitle() {
        var titlee = this.location.prepareExternalUrl(this.location.path());
        if (titlee.charAt(0) === '#') {
            titlee = titlee.slice(2);
        }
        for (var item = 0; item < this.listTitles.length; item++) {
            var parent = this.listTitles[item];
            if (parent.path === titlee) {
                return parent.title;
            } else if (parent.children) {
                var children_from_url = titlee.split("/")[2];
                for (var current = 0; current < parent.children.length; current++) {
                    if (parent.children[current].path === children_from_url) {
                        return parent.children[current].title;
                    }
                }
            }
        }
        return 'Dashboard';
    }

    getPath() {
        return this.location.prepareExternalUrl(this.location.path());
    }
}
