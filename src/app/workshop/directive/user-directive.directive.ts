import { Directive, TemplateRef, ViewContainerRef } from '@angular/core';
import { UserService } from 'app/services/user.service';

@Directive({
  selector: '[appUserDirective]'
})
export class UserDirectiveDirective {

  constructor(
    private templateRef: TemplateRef<any>,
    private authService: UserService,
    private viewContainer: ViewContainerRef
) { }

ngOnInit() {
    const hasAccess = this.authService.isAuthorized();

    if (hasAccess) {
        this.viewContainer.createEmbeddedView(this.templateRef);
    } else {
        this.viewContainer.clear();
    }
}

}
