import { Component, OnInit } from "@angular/core";
import { Subject } from "app/models/subject";
import { SubjectsService } from "app/services/subject.service";
import { first } from "rxjs/operators";
import { SharedService } from "app/services/shared.service";
import swal from "sweetalert2";
import { UserService } from "app/services/user.service";
import { User } from "app/models/user";

declare var $: any;


@Component({
  moduleId: module.id,
  selector: "user-management-cmp",
  templateUrl: "user-management.component.html",
})
export class UserManagementComponent implements OnInit {
  users: Array<User> = [];
  user: User = new User();
  isUpdate: boolean = false;
  constructor(
    private userService: UserService,
    private sharedService: SharedService
  ) {}
  ngOnInit() {
    this.getAllUser();
  }


  getAllUser() {
    let filterRoles=["Admin","Leader","Member"];

    
    this.userService
      .getAllUser(filterRoles)
      .pipe(first())
      .subscribe(
        (res) => {
          console.log("res",res);
          this.users = res;
        },
        (error) => {
          $.notify(
            {
              icon: "ti-gift",
              message: "İşlem sırasında hata oluştu.",
            },
            {
              type: "danger",
              timer: 4000,
              placement: {
                from: "top",
                align: "right",
              },
              template:
                '<div data-notify="container" class="col-11 col-md-4 alert alert-{0} alert-with-icon" role="alert"><button type="button" aria-hidden="true" class="close" data-notify="dismiss"><i class="nc-icon nc-simple-remove"></i></button><span data-notify="icon" class="nc-icon nc-bell-55"></span> <span data-notify="title">{1}</span> <span data-notify="message">{2}</span><div class="progress" data-notify="progressbar"><div class="progress-bar progress-bar-{0}" role="progressbar" aria-valuenow="0" aria-valuemin="0" aria-valuemax="100" style="width: 0%;"></div></div><a href="{3}" target="{4}" data-notify="url"></a></div>',
            }
          );
        }
      );
  }


  editUser(userId: any) {
    this.userService
      .getUserById(userId)
      .pipe(first())
      .subscribe((res) => {
        this.user = res;
        this.isUpdate = true;
        $("#userModal").modal("show");
      });
  }
  removeUser(userId: any) {
    this.userService
      .delete(userId)
      .pipe(first())
      .subscribe(
        (res) => {
          $.notify(
            {
              icon: "ti-gift",
              message: "İşlem başarılı bir şekilde gerçekleşti.",
            },
            {
              type: "success",
              timer: 4000,
              placement: {
                from: "top",
                align: "right",
              },
              template:
                '<div data-notify="container" class="col-11 col-md-4 alert alert-{0} alert-with-icon" role="alert"><button type="button" aria-hidden="true" class="close" data-notify="dismiss"><i class="nc-icon nc-simple-remove"></i></button><span data-notify="icon" class="nc-icon nc-bell-55"></span> <span data-notify="title">{1}</span> <span data-notify="message">{2}</span><div class="progress" data-notify="progressbar"><div class="progress-bar progress-bar-{0}" role="progressbar" aria-valuenow="0" aria-valuemin="0" aria-valuemax="100" style="width: 0%;"></div></div><a href="{3}" target="{4}" data-notify="url"></a></div>',
            }
          );
          this.getAllUser();
        },
        (error) => {
          $.notify(
            {
              icon: "ti-gift",
              message: "İşlem sırasında hata oluştu.",
            },
            {
              type: "danger",
              timer: 4000,
              placement: {
                from: "top",
                align: "right",
              },
              template:
                '<div data-notify="container" class="col-11 col-md-4 alert alert-{0} alert-with-icon" role="alert"><button type="button" aria-hidden="true" class="close" data-notify="dismiss"><i class="nc-icon nc-simple-remove"></i></button><span data-notify="icon" class="nc-icon nc-bell-55"></span> <span data-notify="title">{1}</span> <span data-notify="message">{2}</span><div class="progress" data-notify="progressbar"><div class="progress-bar progress-bar-{0}" role="progressbar" aria-valuenow="0" aria-valuemin="0" aria-valuemax="100" style="width: 0%;"></div></div><a href="{3}" target="{4}" data-notify="url"></a></div>',
            }
          );
        }
      );
  }

  saveUser() {
    let data = this.user;

    this.user.email=this.user.userName+'@gmail.com';
    this.user.name=this.user.userName;
    this.user.surname=this.user.userName;

    if (!this.isUpdate) {
      this.userService
        .create(data)
        .pipe(first())
        .subscribe(
          (res) => {
            this.user.userName = "";
            this.user.rawPassword = "";
            this.user.statu = "";
            $.notify(
              {
                icon: "ti-gift",
                message: "İşlem başarılı bir şekilde gerçekleşti.",
              },
              {
                type: "success",
                timer: 4000,
                placement: {
                  from: "top",
                  align: "right",
                },
                template:
                  '<div data-notify="container" class="col-11 col-md-4 alert alert-{0} alert-with-icon" role="alert"><button type="button" aria-hidden="true" class="close" data-notify="dismiss"><i class="nc-icon nc-simple-remove"></i></button><span data-notify="icon" class="nc-icon nc-bell-55"></span> <span data-notify="title">{1}</span> <span data-notify="message">{2}</span><div class="progress" data-notify="progressbar"><div class="progress-bar progress-bar-{0}" role="progressbar" aria-valuenow="0" aria-valuemin="0" aria-valuemax="100" style="width: 0%;"></div></div><a href="{3}" target="{4}" data-notify="url"></a></div>',
              }
            );
          this.getAllUser();
            $("#userModal").modal("hide");
          },
          (error) => {
            $.notify(
              {
                icon: "ti-gift",
                message: "İşlem sırasında hata oluştu.",
              },
              {
                type: "danger",
                timer: 4000,
                placement: {
                  from: "top",
                  align: "right",
                },
                template:
                  '<div data-notify="container" class="col-11 col-md-4 alert alert-{0} alert-with-icon" role="alert"><button type="button" aria-hidden="true" class="close" data-notify="dismiss"><i class="nc-icon nc-simple-remove"></i></button><span data-notify="icon" class="nc-icon nc-bell-55"></span> <span data-notify="title">{1}</span> <span data-notify="message">{2}</span><div class="progress" data-notify="progressbar"><div class="progress-bar progress-bar-{0}" role="progressbar" aria-valuenow="0" aria-valuemin="0" aria-valuemax="100" style="width: 0%;"></div></div><a href="{3}" target="{4}" data-notify="url"></a></div>',
              }
            );
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
            $.notify(
              {
                icon: "ti-gift",
                message: "İşlem başarılı bir şekilde gerçekleşti.",
              },
              {
                type: "success",
                timer: 4000,
                placement: {
                  from: "top",
                  align: "right",
                },
                template:
                  '<div data-notify="container" class="col-11 col-md-4 alert alert-{0} alert-with-icon" role="alert"><button type="button" aria-hidden="true" class="close" data-notify="dismiss"><i class="nc-icon nc-simple-remove"></i></button><span data-notify="icon" class="nc-icon nc-bell-55"></span> <span data-notify="title">{1}</span> <span data-notify="message">{2}</span><div class="progress" data-notify="progressbar"><div class="progress-bar progress-bar-{0}" role="progressbar" aria-valuenow="0" aria-valuemin="0" aria-valuemax="100" style="width: 0%;"></div></div><a href="{3}" target="{4}" data-notify="url"></a></div>',
              }
            );
            this.getAllUser();
            this.isUpdate = false;
            $("#userModal").modal("hide");
          },
          (error) => {
            $.notify(
              {
                icon: "ti-gift",
                message: "İşlem sırasında hata oluştu.",
              },
              {
                type: "danger",
                timer: 4000,
                placement: {
                  from: "top",
                  align: "right",
                },
                template:
                  '<div data-notify="container" class="col-11 col-md-4 alert alert-{0} alert-with-icon" role="alert"><button type="button" aria-hidden="true" class="close" data-notify="dismiss"><i class="nc-icon nc-simple-remove"></i></button><span data-notify="icon" class="nc-icon nc-bell-55"></span> <span data-notify="title">{1}</span> <span data-notify="message">{2}</span><div class="progress" data-notify="progressbar"><div class="progress-bar progress-bar-{0}" role="progressbar" aria-valuenow="0" aria-valuemin="0" aria-valuemax="100" style="width: 0%;"></div></div><a href="{3}" target="{4}" data-notify="url"></a></div>',
              }
            );
          }
        );
    }
  }

  showSwal(type, id = 0) {
  
    if (type == "warning-message-and-confirmation-delete") {
      swal({
        title: "Uyarı",
        text: "Silmek istediğinizden emin misiniz?",
        type: "warning",
        showCancelButton: true,
        confirmButtonClass: "btn btn-success",
        cancelButtonClass: "btn btn-danger",
        confirmButtonText: "Evet",
        cancelButtonText: "Hayır",
      }).then((result) => {
        if (result.value) {
          this.removeUser(id);
        }
      });
    }
  }
}