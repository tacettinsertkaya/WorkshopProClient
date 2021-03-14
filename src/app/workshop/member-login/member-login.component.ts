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
import * as moment from 'moment';
import { ControlPosition } from '@agm/core/services/google-maps-types';
import { RetroConfigurationService } from 'app/services/retro-configuration';
import { UserRight } from 'app/models/userRight';
import { Retro } from 'app/models/retro';
import { GroupDto } from 'app/models/dto/group-dto';
import { GroupFilter } from 'app/models/dto/group-filter';
import { GroupService } from 'app/services/group.service';
import swal from 'sweetalert2';
import { Group } from 'app/models/group';
import { SharedService } from 'app/services/shared.service';
import { AlertifyService } from 'app/services/alertify.service';

declare var $: any;
@Component({
  moduleId: module.id,
  selector: "member-login-cmp",
  templateUrl: "member-login.component.html",
})
export class MemberLoginComponent implements OnInit {
  focus;
  focus1;
  focus2;
  test: Date = new Date();
  private toggleButton;
  private sidebarVisible: boolean;
  private nativeElement: Node;
  groups: Array<GroupDto> = [];

  loading = false;
  submitted = false;
  // tslint:disable-next-line:no-inferrable-types
  returnUrl: string = '';
  error = '';
  errorMessage='';

  loginForm: FormGroup;
  id: string = "";
  login: Login = new Login();
  createdUser: User;
  userRight: UserRight;
  isFailed = false;

  constructor(private element: ElementRef,
    private formBuilder: FormBuilder,
    private userService: UserService,
    private sharedService: SharedService,
    private groupService: GroupService,
    private alertifyService: AlertifyService,
    private route: ActivatedRoute,
    private router: Router,
    private retroConfigurationService: RetroConfigurationService,


  ) {
    this.nativeElement = element.nativeElement;
    this.sidebarVisible = false;
    this.id = this.route.snapshot.params.id;

    this.userService.logout();

    if (this.id != undefined && this.userService.hasRole("Member")) {
      this.router.navigate(["/retro", this.id]);
    }

    if (this.userService.currentUserValue) {
      this.router.navigateByUrl('/');
    }

  }

  // tslint:disable-next-line:typedef
  loginAddForm() {
    this.loginForm = this.formBuilder.group({

      alias:  ['',
      [
        Validators.required,

      ]],
      name:  ['',
      [
        Validators.required,

      ]],
      surname:  ['',
      [
        Validators.required,

      ]]
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
    this.getUserByRetro();

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

  getUserRight(retro: Retro) {
    this.retroConfigurationService
      .getUserRight(retro)
      .pipe(first())
      .subscribe(
        (rights) => {
          this.userRight = rights;
           this.sharedService.retroRightSetValue(this.userRight);
        },
        (error) => {
          this.error = error;
          this.loading = false;
        }
      );

  }
  getUserByRetro() {
    this.userService
      .getUserByRetro(this.id)
      .pipe(first())
      .subscribe(
        (user) => {
          this.createdUser = user;
          let retro = new Retro();
          retro.id = this.id;
          retro.userId = this.createdUser.id;

          this.getUserRight(retro);
          let filter = new GroupFilter();
          filter.companyId = this.createdUser.companyId;
          filter.leaderId = this.createdUser.id;
          filter.state = 0;
          this.getAllGroup(filter);
         this.getCurrentUserRetro(this.id);
        },
        (error) => {
          this.error = error;
          this.loading = false;
        }
      );
  }

  getCurrentUserRetro(id){
    this.retroConfigurationService.getCurrentRetro(id).pipe(first())
    .subscribe(
      (retro) => {
        this.sharedService.currentRetroSetValue(retro);
      });
  }



  updateGroup(group: Group) {
    this.groupService
      .update(group)
      .pipe(first())
      .subscribe(
        (res) => {

        });
  }

  getAllGroup(filter) {


    this.groupService
      .getAllGroup(filter)
      .pipe(first())
      .subscribe(
        (res) => {
          this.groups = res.filter(p => p.group.state == 0 || p.group.state == 1);
          if (this.groups.length>0) {
            if (this.groups[0].group.memberCount <= 0) {
              this.isFailed = true;
              swal(
                {
                  title: 'Uyarı!',
                  text: 'Retroya ait üye sayısı aşılmıştır.',
                  type: 'warning',
                  showConfirmButton: false,
                  timer: 4000,
                  buttonsStyling: false
                }
              )
            }
          }
          else {
            this.isFailed = false;
          }


        },
        (error) => {
           this.alertifyService.error();
        }
      );
  }


  logIn() {


    this.submitted = true;
    if (this.loginForm.invalid) {
      return;
    }

    this.loading = true;

    if (this.loginForm.valid) {
      let data = Object.assign({}, this.loginForm.value);

      let user = new User();
      user.userName = data.alias;
      user.name = data.name;
      user.surname = data.surname;
      user.email = data.alias + moment().format() + '@gmail.com';
      user.rawPassword = data.alias + '123123AsD--*';
      user.companyId = this.createdUser.companyId;
      user.statu = "Member";

      this.userService.create(user).pipe(first())
        .subscribe((res) => {

      

          this.login.username = user.userName;
          this.login.password = user.rawPassword;
          this.login.alias=data.alias;
          let rightData = new UserRight();
          rightData.commentRight = this.userRight.commentRight;
          rightData.ideaRight = this.userRight.ideaRight;
          rightData.retroId = this.userRight.retroId;
          rightData.userId = res.id;
          rightData.voteRight = this.userRight.voteRight;

          this.groups[0].group.memberCount = this.groups[0].group.memberCount - 1;
          this.updateGroup(this.groups[0].group);


          this.retroConfigurationService
            .createUserRight(rightData)
            .pipe(first())
            .subscribe(
              (rights) => {
     


                this.userService
                  .login(this.login)
                  .pipe(first())
                  .subscribe(
                    (userRes) => {
                      localStorage.setItem('currentUser', JSON.stringify(userRes));
                      localStorage.setItem('token', userRes.token);
                      this.sharedService.tabSource.next("");

                      this.userService.currentUserSetValue(userRes);
                      this.router.navigate(["/retro", this.id]);

                    },
                    (error) => {
                      this.error = error;
                      this.loading = false;
                    }
                  );


              },
              (error) => {
                this.error = error;
                this.loading = false;
              }
            );


        },
        (error)=>{
          this.errorMessage="Bu takma ad daha önce alınmıştır.Lütfen farklı bir takma ad deneyiniz.";
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
