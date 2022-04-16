import { Component, OnInit } from "@angular/core";
import { Subject } from "app/models/subject";
import { SubjectsService } from "app/services/subject.service";
import { first } from "rxjs/operators";
import { SharedService } from "app/services/shared.service";
import Swal  from "sweetalert2";
import { UserService } from "app/services/user.service";
import { User } from "app/models/user";
import { ResetPassword } from "app/models/reset-password";
import { UserFilter } from "app/models/dto/user-filter";
import { AlertifyService } from "app/services/alertify.service";
import { TranslateService } from "@ngx-translate/core";

declare var $: any;


@Component({
  moduleId: module.id,
  selector: "super-user-management-cmp",
  templateUrl: "super-user-management.component.html",
})
export class SuperUserManagementComponent implements OnInit {
  users: Array<User> = [];
  user: User = new User();
  isUpdate: boolean = false;
  userId: string;
  selectedUser = new User();

  resetPassword: ResetPassword = new ResetPassword();
  constructor(
    private alertifyService: AlertifyService,
    private translate: TranslateService,
    private userService: UserService,
    private sharedService: SharedService
  ) { }
  ngOnInit() {
    this.getAllUser();
    this.user.statu = "SuperAdmin";
  }


  getAllUser() {
    let filterRoles = ["SuperAdmin"];
    let userFilter = new UserFilter();
    userFilter.filterRoles = filterRoles;

    this.userService
      .getAllUser(userFilter)
      .pipe(first())
      .subscribe(
        (res) => {

          this.users = res;
        },
        (error) => {
          this.alertifyService.error();
        }
      );
  }

  addSuperadmin(){
    this.isUpdate=false;
    $('#addModal').modal('show');
  }

  OpenPasswordModal(user) {
    this.selectedUser = user;
    $('#changePasswordModal').modal('show');
  }

  changePassword() {

    this.resetPassword.Id = this.selectedUser.id;
    this.resetPassword.username = this.selectedUser.userName;

    this.userService
      .resetpassword(this.resetPassword)
      .pipe(first())
      .subscribe(
        (user) => {

          this.resetPassword.newPassword = '';
          this.resetPassword.confirmPassword = '';
          this.alertifyService.success();
          $('#changePasswordModal').modal('hide');
          this.getAllUser();
        },
        (error) => {

        }
      );
  }

  SendMail(userId: any) {
    this.userService
      .sendUserInfo(userId)
      .pipe(first())
      .subscribe((res) => {
        this.alertifyService.success();
      });
  }



  getText() {
    if (this.isUpdate)
      return this.translate.instant('super_admin.edit_super_admin')
    else
      return this.translate.instant('super_admin.add_super_admin')
  }


  editUser(userId: any) {
    this.userService
      .getUserById(userId)
      .pipe(first())
      .subscribe((res) => {
        this.user = res;
        this.isUpdate = true;
        $("#addModal").modal("show");
      });
  }


  removeUser(userId: any) {
    this.userService
      .delete(userId)
      .pipe(first())
      .subscribe(
        (res) => {
          this.alertifyService.success();
          this.getAllUser();
        },
        (error) => {
          this.alertifyService.error();
        }
      );
  }

  saveUser() {
    let data = this.user;

    this.user.name = this.user.userName;
    this.user.surname = this.user.userName;

    if (!this.isUpdate) {
      this.userService
        .create(data)
        .pipe(first())
        .subscribe(
          (res) => {
            this.user.userName = "";
            this.user.rawPassword = "";
            this.user.statu = "";
            this.alertifyService.success();
            this.getAllUser();
            $("#addModal").modal("hide");
          },
          (error) => {
            this.alertifyService.error();
          }
        );
    } else {
      this.userService
        .update(data)
        .pipe(first())
        .subscribe(
          (res) => {
            this.user.userName = "";
            this.user.rawPassword = "";
            this.user.statu = "";
            this.alertifyService.success();
            this.getAllUser();
            this.isUpdate = false;
            $("#addModal").modal("hide");
          },
          (error) => {
            this.alertifyService.error();
          }
        );
    }
  }

  showSwal(type, id = 0) {

    if (type == "warning-message-and-confirmation-delete") {
      Swal.fire({
        title: this.translate.instant("common.warning"),
        text: this.translate.instant("common.confirm_delete"),

        icon: 'warning',
        showCancelButton: true,
        
        
        confirmButtonText: this.translate.instant("common.yes"),
        cancelButtonText: this.translate.instant("common.no"),
      }).then((result) => {
        if (result.value) {
          this.removeUser(id);
        }
      });
    }
  }
}