import { Component, ElementRef, OnInit } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { UserService } from '../../services/user.service';
import { Login } from '../../models/login';
import { first } from 'rxjs/operators';
import { BehaviorSubject } from 'rxjs/internal/BehaviorSubject';
import { User } from '../../models/user';
import { Observable } from 'rxjs';
import { ActivatedRoute, Router } from '@angular/router';
import { AuthenticateResponse } from '../../models/authenticate-response';
import { ErrorMessage } from 'app/models/dto/error-message';
import { SharedService } from 'app/services/shared.service';

declare var $: any;
@Component({
  moduleId: module.id,
  selector: "login-cmp",
  templateUrl: "login.component.html",
})
export class LoginComponent implements OnInit {
  focus;
  focus1;
  focus2;
  test: Date = new Date();
  private toggleButton;
  private sidebarVisible: boolean;
  private nativeElement: Node;
   
  errorMessage='';
  loading = false;
  submitted = false;
  // tslint:disable-next-line:no-inferrable-types
  returnUrl: string = '';
  error = '';
  loginForm: FormGroup;
  id: string = "";
  login: Login = new Login();
  constructor(private element: ElementRef,
    private formBuilder: FormBuilder,
    private userService: UserService,
    private sharedService: SharedService,
    private route: ActivatedRoute,
    private router: Router,


  ) {
    this.nativeElement = element.nativeElement;
    this.sidebarVisible = false;
    this.id = this.route.snapshot.params.id;

    
    if (this.id != undefined && this.userService.hasRole("Member")){
      this.router.navigate(["/retro",this.id]);
    }

    if (this.userService.currentUserValue) {
      this.router.navigateByUrl('/');
    }
  }

  // tslint:disable-next-line:typedef
  loginAddForm() {
    this.loginForm = this.formBuilder.group({
      username: ['', [
        Validators.required
      ]],
      password: ['',
        [
          Validators.required,

        ]],
      alias: ['']
    });
  }
  checkFullPageBackgroundImage() {
    var $page = $(".full-page");
    var image_src = $page.data("image");

    if (image_src !== undefined) {
      var image_container =
        '<div class="full-page-background" style="background-image: url(' +
        image_src +
        ') "/>';
      $page.append(image_container);
    }
  }

  ngOnInit() {
    this.loginAddForm();
    // tslint:disable-next-line: no-string-literal
    this.returnUrl = this.route.snapshot.queryParams['returnUrl'] || '/';

    this.checkFullPageBackgroundImage();
    var body = document.getElementsByTagName("body")[0];
    body.classList.add("login-page");
    var navbar: HTMLElement = this.element.nativeElement;
    this.toggleButton = navbar.getElementsByClassName("navbar-toggle")[0];

    setTimeout(function () {
      // after 1000 ms we add the class animated to the login/register card
      $(".card").removeClass("card-hidden");
    }, 700);
  }

  logIn() {
    this.submitted = true;
    if (this.loginForm.invalid) {
      return;
    }

    this.loading = true;

    if (this.loginForm.valid) {
      this.login = Object.assign({}, this.loginForm.value);

      if (this.login.alias == "") {
        this.login.alias = this.login.username;
      }

      this.userService
        .login(this.login)
        .pipe(first())
        .subscribe(
          (user) => {

            localStorage.setItem('currentUser', JSON.stringify(user));
            localStorage.setItem('token', user.token);
            this.userService.currentUserSetValue(user);
            if (this.userService.hasRole("Leader") || this.userService.hasRole("Member"))
              this.router.navigate(['/retro/start']);
            else
              this.router.navigate(['/']);
            this.loading = false;
            this.sharedService.tabSource.next("");
          },
          (error) => {
          
            this.errorMessage=error
            this.error = error;
            this.loading = false;
          }
        );


    }
  }

  clearError(){
    this.errorMessage='';
  }

  logout() {
    localStorage.removeItem('currentUser');
    localStorage.removeItem('token');
    this.userService.currentUserSetValue(null);
  }

  sidebarToggle() { }
  ngOnDestroy() {
    var body = document.getElementsByTagName("body")[0];
    body.classList.remove("login-page");
  }
}
