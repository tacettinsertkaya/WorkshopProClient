import { Component, OnInit } from "@angular/core";
import { Subject } from "app/models/subject";
import { SubjectsService } from "app/services/subject.service";
import { first } from "rxjs/operators";
import { SharedService } from "app/services/shared.service";
import swal from "sweetalert2";
import { UserService } from "app/services/user.service";
import { User } from "app/models/user";
import { ResetPassword } from "app/models/reset-password";
import { Company } from "app/models/company";
import { CompanyService } from "app/services/company.service";
import { UserFilter } from "app/models/dto/user-filter";
import { AlertifyService } from "app/services/alertify.service";

declare var $: any;


@Component({
  moduleId: module.id,
  selector: "admin-cmp",
  templateUrl: "admin.component.html",
})
export class AdminComponent implements OnInit {
  users: Array<User> = [];
  user: User;
  isUpdate: boolean = false;
  userId:string;
  selectedUser=new User();
  resetPassword:ResetPassword=new ResetPassword();

  companys: Array<Company> = [];
  companyId:string='';
  
  constructor(
    private userService: UserService,
    private companyService:CompanyService,
    private alertifyService:AlertifyService,
    private sharedService: SharedService
  ) {}
  ngOnInit() {
    this.getAllUser();
    this.initData();
    this.getAllCompany();

  }


  initData(){
    this.user= new User()
    this.user.statu="Admin";
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
           this.alertifyService.error();
        }
      );
  }

  getAllUser() {
    let filterRoles=["Admin"];

    let userFilter=new UserFilter();
    userFilter.filterRoles=filterRoles;
    
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

  OpenPasswordModal(user){
   this.selectedUser=user;
   $('#changePasswordModal').modal('show');
  }
  
  changePassword(){
  
    this.resetPassword.Id=this.selectedUser.id;
    this.resetPassword.username=this.selectedUser.userName;
  
    this.userService
    .resetpassword(this.resetPassword)
    .pipe(first())
    .subscribe(
      (user) => {

        this.resetPassword.newPassword='';
        this.resetPassword.confirmPassword='';
         this.alertifyService.success()
        $('#changePasswordModal').modal('hide');
           this.getAllUser();
      },
      (error) => {
        this.alertifyService.error();
      }
    );
  } 
  
  SendMail(userId: any){
    this.userService
    .sendUserInfo(userId)
    .pipe(first())
    .subscribe((res) => {
      this.alertifyService.success();
      
    });
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

    this.user.name=this.user.userName;
    this.user.surname=this.user.userName;

    if (!this.isUpdate) {
      this.userService
        .create(data)
        .pipe(first())
        .subscribe(
          (res) => {
           this.initData();
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
            this.initData();
          
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