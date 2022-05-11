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
import { AlertifyService } from "app/services/alertify.service";
import { GuidGenerator } from "app/helpers/guid-generator";
import { GroupService } from "app/services/group.service";
import { TranslateService } from "@ngx-translate/core";

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
    private alertifyService: AlertifyService,
    private sharedService: SharedService,
    private companyService: CompanyService,
    private translate: TranslateService,
    private groupService: GroupService,


  ) { }
  ngOnInit() {
    this.userType = "Leader";
    this.user.companyId = this.userService.currentUserValue.companyId;
    this.currentCompany = this.userService.currentUserValue.company;
    this.user.statu = "Leader";
    this.getAllUser(this.userType);
    this.getAllCompany();
  }

  getUserLeader() {
    return this.userService.currentUserValue.company.retroCount;
  }

  getUserMember() {
    return this.userService.currentUserValue.company.participantCount;
  }

  getLeaderCount() {
    return this.userService.currentUserValue.company.leaderCount;
  }

  getTitle(){
    if(this.isUpdate){
      return this.translate.instant("user_management.edit_user")
    }
    else{
      return this.translate.instant("user_management.add_user")
    }
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
          this.alertifyService.error()
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
          this.alertifyService.error()

        }
      );
  }

  newUser() {
    $("#addModal").modal("show");
    this.user.statu = this.userType;
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

  isCheckRetro() {
    if (this.userType == "Leader"){
      // return this.currentCompany.retroCount > 0 ? true : false;
      return this.currentCompany.leaderCount > 0 ? true : false;
    }
    if (this.userType == "Member")
      return this.currentCompany.participantCount > 0 ? true : false;
  }

  removeUser(userId: any) {
    if (this.userType == "Leader"){
      this.currentCompany.retroCount = this.currentCompany.retroCount + 1
      this.currentCompany.leaderCount = this.currentCompany.leaderCount + 1

    }
    if (this.userType == "Member")
      this.currentCompany.participantCount = this.currentCompany.participantCount + 1;



    this.userService
      .delete(userId)
      .pipe(first())
      .subscribe(
        (res) => {
          this.companyService.update(this.currentCompany).pipe().subscribe((res) => {
            this.alertifyService.success()

            let currentUser = this.userService.currentUserValue;
            currentUser.company = res;
            this.userService.currentUserSetValue(currentUser);
            this.getAllUser(this.userType);
          });

        },
        (error) => {
          this.alertifyService.error()

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
                // this.currentCompany.retroCount = this.currentCompany.retroCount - 1;
                this.currentCompany.leaderCount = this.currentCompany.leaderCount - 1;

                let dataObject = {
                  companyId : this.userService.currentUserValue.companyId,
                  groupName : new GuidGenerator().newGuid(),
                  leaderId : res.id
                }

                this.saveLeaderUser(dataObject);
              }
              if (this.userType == "Member") {
                this.currentCompany.participantCount = this.currentCompany.participantCount - 1;
              }

              this.companyService.update(this.currentCompany).pipe().subscribe((res) => {
                this.alertifyService.success()

                let currentUser = this.userService.currentUserValue;
                currentUser.company = res;
                this.userService.currentUserSetValue(currentUser);

                this.getAllUser(this.userType);

                $("#addModal").modal("hide");
              });



            },
            (error) => {
              this.alertifyService.error()

            }
          );
      }
      else {
        if (this.currentCompany.retroCount <= 0) {
          swal({
            title: this.translate.instant("common.fail"),
            text: this.translate.instant("common.maximum_leader"),
            
            type: "error",
            timer: 2000
          });

        }
        if (this.currentCompany.participantCount <= 0) {
          swal({
            title:this.translate.instant("common.fail"),
            text: this.translate.instant("common.maximum_member"),

            type: "error",
            timer: 2000
          });

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
            this.alertifyService.success()
            this.getAllUser(this.userType);
            this.isUpdate = false;
            $("#addModal").modal("hide");
          },
          (error) => {
            this.alertifyService.error()

          }
        );
    }
  }

  saveLeaderUser(data: any) {



    if (this.isCheckRetro()) {
      data.memberCount = this.currentCompany.participantCount;
      this.groupService
        .create(data)
        .pipe(first())
        .subscribe(
          (res) => {

          },
          (error) => {
            this.alertifyService.error();

          }
        );

    }
    else {
      if (this.currentCompany.retroCount <= 0) {

        swal(
          {
            title: 'Uyarı!',
            text: 'Maksimum grup sayısına ulaştınız.',
            type: 'warning',
            showConfirmButton: false,
            timer: 4000,
            buttonsStyling: false
          }
        )

      }
    }


  }


  showSwal(type, id = 0) {

    if (type == "warning-message-and-confirmation-delete") {
      swal({
        title: this.translate.instant("common.warning"),
        text: this.translate.instant("common.confirm_delete"),

        type: "warning",
        showCancelButton: true,
        confirmButtonClass: "btn btn-success",
        cancelButtonClass: "btn btn-danger",
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