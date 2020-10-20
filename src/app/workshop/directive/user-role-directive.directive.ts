import { Directive, Input, OnInit, TemplateRef, ViewContainerRef } from '@angular/core';
import { Role } from 'app/models/role';
import { UserService } from 'app/services/user.service';

@Directive({
  selector: '[appUserRole]'
})

export class UserRoleDirective implements OnInit {
  constructor(
      private templateRef: TemplateRef<any>,
      private authService: UserService,
      private viewContainer: ViewContainerRef
  ) { }
 

ngOnInit() {
    let hasAccess = false;
    let roles=this.authService.currentUserValue.roles;

  
    if (this.authService.isAuthorized() && roles.length>0) {
        hasAccess = this.authService.hasRole(roles[0]);
    }
    if (hasAccess) {
        this.viewContainer.createEmbeddedView(this.templateRef);
    } else {
        this.viewContainer.clear();
    }
}
}
