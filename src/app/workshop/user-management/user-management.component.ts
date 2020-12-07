import { Component, OnInit } from "@angular/core";
import { Subject } from "app/models/subject";
import { SubjectsService } from "app/services/subject.service";
import { first } from "rxjs/operators";
import { SharedService } from "app/services/shared.service";
import swal from "sweetalert2";
import { UserService } from "app/services/user.service";
import { User } from "app/models/user";
import { CompanyService } from "app/services/company.service";
import { Company } from "app/models/company";
import { UserFilter } from "app/models/dto/user-filter";

declare var $: any;


@Component({
  moduleId: module.id,
  selector: "user-management-cmp",
  templateUrl: "user-management.component.html",
})
export class UserManagementComponent implements OnInit {
  users: Array<User> = [];
  companys: Array<Company> = [];
  user: User = new User();
  userType: string = '';
  isUpdate: boolean = false;
  currentCompany: Company;

  constructor(
    private userService: UserService,
    private sharedService: SharedService,
    private companyService: CompanyService,


  ) { }
  ngOnInit() {
    this.userType = "Leader";
    this.user.companyId = this.userService.currentUserValue.companyId;
    this.currentCompany = this.userService.currentUserValue.company;
    this.user.statu="Leader";
    this.getAllUser(this.userType);
    this.getAllCompany();
  }

  getUserLeader() {
    return this.userService.currentUserValue.company.retroCount;
  }

  getUserMember() {
    return this.userService.currentUserValue.company.participantCount;
  }

  getAllCompany() {


    this.companyService
      .getAllCompany()
      .pipe(first())
      .subscribe(
        (res) => {
          this.companys = res;
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

  changeUserType() {
    if (this.userType == "" || this.userType == undefined || this.userType == null)
      this.getAllUser("Leader");
    else
      this.getAllUser(this.userType);
  }

  getAllUser(userType) {
    let filterRoles = [];
    filterRoles.push(userType)

    let userFilter = new UserFilter();
    userFilter.companyId = this.currentCompany.id;
    userFilter.filterRoles = filterRoles;

    this.userService
      .getAllUser(userFilter)
      .pipe(first())
      .subscribe(
        (res) => {
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

  isCheckRetro() {
    if (this.userType == "Leader")
      return this.currentCompany.retroCount > 0 ? true : false;

    if (this.userType == "Member")
      return this.currentCompany.participantCount > 0 ? true : false;
  }

  removeUser(userId: any) {
    if (this.userType == "Leader")
      this.currentCompany.retroCount = this.currentCompany.retroCount + 1
    if (this.userType == "Member")
      this.currentCompany.participantCount = this.currentCompany.participantCount + 1;



    this.userService
      .delete(userId)
      .pipe(first())
      .subscribe(
        (res) => {
          this.companyService.update(this.currentCompany).pipe().subscribe((res) => {
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
            let currentUser = this.userService.currentUserValue;
            currentUser.company = res;
            this.userService.currentUserSetValue(currentUser);
            this.getAllUser(this.userType);
          });

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

    this.user.email = this.user.userName + '@gmail.com';
    this.user.name = this.user.userName;
    this.user.surname = this.user.userName;

    if (!this.isUpdate) {

      if (this.isCheckRetro()) {
        this.userService
          .create(data)
          .pipe(first())
          .subscribe(
            (res) => {
              this.user.userName = "";
              this.user.rawPassword = "";
              this.user.statu = "";

              if (this.userType == "Leader") {
                this.currentCompany.retroCount = this.currentCompany.retroCount - 1
              }
              if (this.userType == "Member") {
                this.currentCompany.participantCount = this.currentCompany.participantCount - 1;
              }

              this.companyService.update(this.currentCompany).pipe().subscribe((res) => {
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
                let currentUser = this.userService.currentUserValue;
                currentUser.company = res;
                this.userService.currentUserSetValue(currentUser);
                
                this.getAllUser(this.userType);

                $("#userModal").modal("hide");
              });



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
      else {
        if (this.currentCompany.retroCount <= 0) {
          $.notify(
            {
              icon: "ti-gift",
              message: "Maksimum lider sayısına ulaştınız.",
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
        if (this.currentCompany.participantCount <= 0) {
          $.notify(
            {
              icon: "ti-gift",
              message: "Maksimum üye sayısına ulaştınız.",
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


      }
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
            this.getAllUser(this.userType);
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