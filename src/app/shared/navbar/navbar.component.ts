import { Component, OnInit, Renderer, ViewChild, ElementRef, Directive, NgZone, AfterViewChecked } from '@angular/core';
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


    constructor(location: Location, private sharedService: SharedService,
        private _ngZone: NgZone, private renderer: Renderer, private element: ElementRef, private router: Router,
        private userService: UserService,
        private chatService: ChatService,
        private cdRef: ChangeDetectorRef
    ) {
        this.location = location;
        this.nativeElement = element.nativeElement;
        this.sidebarVisible = false;
        this.subscribeToCurrentRetroEvents();
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


        this.currentRetro = this.sharedService.currentRetroValue;

    }

    private subscribeToCurrentRetroEvents(): void {
        this.chatService.currentRetroReceived.subscribe((retro: Retro) => {
            this._ngZone.run(() => {
                this.currentRetro = retro;
            })
        });
    }


    private subscribeRetroAnnouncementToEvents(): void {
        this.chatService.announcementReceived.subscribe((data: RetroAnnouncement) => {
            this._ngZone.run(() => {
              
                if (this.currentRetro) {
                    if (data.retroId == this.currentRetro.id){
                        this.announcements.push(data);
                        $.notify(
                            {
                              icon: "fa fa-bullhorn",
                              message: data.contentText,
                            },
                            {
                              type: "primary",
                              timer: 6000,
                              placement: {
                                from: "top",
                                align: "right",
                              },
                              template:
                                '<div data-notify="container" class="col-11 col-md-4 alert alert-{0} alert-with-icon" role="alert"><button type="button" aria-hidden="true" class="close" data-notify="dismiss"><i class="nc-icon nc-simple-remove"></i></button><span data-notify="icon" class="nc-icon nc-bell-55"></span> <span data-notify="title">{1}</span> <span data-notify="message">{2}</span><div class="progress" data-notify="progressbar"><div class="progress-bar progress-bar-{0}" role="progressbar" aria-valuenow="0" aria-valuemin="0" aria-valuemax="100" style="width: 0%;"></div></div><a href="{3}" target="{4}" data-notify="url"></a></div>',
                            }
                          );
                    }
                }


            });
        });
    }

    logout() {
        this.chatService.userOffline();

        localStorage.removeItem('currentUser');
        this.userService.currentUserSetValue(null);
        this.router.navigate(['/login']);

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
