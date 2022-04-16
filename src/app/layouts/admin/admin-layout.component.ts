import { Component, OnInit, OnDestroy, ViewChild, HostListener } from '@angular/core';
import { Subscription } from 'rxjs';
import 'rxjs/add/operator/filter';
import { NavbarComponent } from '../../shared/navbar/navbar.component';
import { Location, LocationStrategy, PathLocationStrategy, PopStateEvent, PlatformLocation } from '@angular/common';
import { Router, NavigationEnd, NavigationStart } from '@angular/router';

@Component({
    selector: 'app-layout',
    templateUrl: './admin-layout.component.html'
})

export class AdminLayoutComponent implements OnInit {


    ngOnInit() {
      
    }
 
}
