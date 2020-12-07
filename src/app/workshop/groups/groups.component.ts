import { Component, NgZone, OnInit } from '@angular/core';
import { Template } from 'app/models/template';
import { TemplateDetail } from 'app/models/template-detail';
import { TemplateService } from 'app/services/template.service';
import { first } from 'rxjs/operators';
import { SharedService } from 'app/services/shared.service';
import swal from 'sweetalert2';
import { TemplateDetailService } from 'app/services/template-detail.service';
import { ChatService } from 'app/services/chat.service';
import { UserService } from 'app/services/user.service';
import { Retro } from 'app/models/retro';
import { CompanyService } from 'app/services/company.service';
import { Company } from 'app/models/company';
import { User } from 'app/models/user';
import { Group } from 'app/models/Group';
import { GroupService } from 'app/services/group.service';
import { UserFilter } from 'app/models/dto/user-filter';
import { GroupFilter } from 'app/models/dto/group-filter';
import { GroupDto } from 'app/models/dto/group-dto';

declare var $: any;

@Component({
  moduleId: module.id,
  selector: 'groups-cmp',
  templateUrl: 'groups.component.html',
})
export class GroupsComponent implements OnInit {
  users: Array<User> = [];
  user: User = new User();
  isUpdate: boolean = false;
  userId: string;
  selectedUser = new User();
  currentCompany: Company;

  group: Group = new Group();
  groups: Array<GroupDto> = [];

  companys: Array<Company> = [];
  companyId: string = '';

  constructor(
    private userService: UserService,
    private groupService: GroupService,
    private companyService: CompanyService,
    private sharedService: SharedService
  ) { }
  ngOnInit() {
    this.group.companyId = this.userService.currentUserValue.companyId;

    this.getAllUser();
    this.user.statu = "Leader";
    this.getAllCompany();
    this.currentCompany = this.userService.currentUserValue.company;

    this.getFilterGroup();
  }





  getAllGroup(filter) {


    this.groupService
      .getAllGroup(filter)
      .pipe(first())
      .subscribe(
        (res) => {
          this.groups = res;
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

  getUserLeader() {
    return this.userService.currentUserValue.company.retroCount;
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

  getFilterGroup() {
    let filter = new GroupFilter();
    filter.companyId = this.userService.currentUserValue.companyId;
    this.getAllGroup(filter);
  }
  removeGroup(group: Group) {
    this.groupService
      .delete(group.id)
      .pipe(first())
      .subscribe(
        (res) => {
          this.getFilterGroup();
          this.currentCompany.retroCount = this.currentCompany.retroCount + 1;
          this.updateRetro(this.currentCompany);

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

  getAllUser() {
    let filterRoles = ["Leader"];

    let userFilter = new UserFilter();
    userFilter.companyId = this.userService.currentUserValue.companyId;
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


  isCheckRetro() {
    return this.currentCompany.retroCount > 0 ? true : false;
  }





  editGroup(group: Group) {
    this.groupService
      .getGroup(group.id)
      .pipe(first())
      .subscribe((res) => {
        this.group = res;
        this.isUpdate = true;
        $("#userModal").modal("show");
      });
  }


  updateRetro(company: Company) {
    this.companyService.update(company).pipe().subscribe((res) => {
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
    });
  }


  saveUser() {
    let data = this.group;
    



    if (!this.isUpdate) {

      if (this.isCheckRetro()) {
        data.memberCount=this.currentCompany.participantCount;
        this.groupService
          .create(data)
          .pipe(first())
          .subscribe(
            (res) => {
              this.group.groupName = "";
              this.group.leaderId = "";

              this.currentCompany.retroCount = this.currentCompany.retroCount - 1;
              this.updateRetro(this.currentCompany);

              this.getFilterGroup();
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
      else {
        if (this.currentCompany.retroCount <= 0) {

          swal(
            {
              title: 'Uyarı!',
              text: 'Maksimum grup sayısına ulaştınız.',
              type: 'warning',
              showConfirmButton:false,
              timer:4000,
              buttonsStyling: false
            }
          )
          
          // $.notify(
          //   {
          //     icon: "ti-gift",
          //     message: "Maksimum grup sayısına ulaştınız.",
          //   },
          //   {
          //     type: "danger",
          //     timer: 4000,
          //     placement: {
          //       from: "top",
          //       align: "right",
          //     },
          //     template:
          //       '<div data-notify="container" class="col-11 col-md-4 alert alert-{0} alert-with-icon" role="alert"><button type="button" aria-hidden="true" class="close" data-notify="dismiss"><i class="nc-icon nc-simple-remove"></i></button><span data-notify="icon" class="nc-icon nc-bell-55"></span> <span data-notify="title">{1}</span> <span data-notify="message">{2}</span><div class="progress" data-notify="progressbar"><div class="progress-bar progress-bar-{0}" role="progressbar" aria-valuenow="0" aria-valuemin="0" aria-valuemax="100" style="width: 0%;"></div></div><a href="{3}" target="{4}" data-notify="url"></a></div>',
          //   }
          // );
        }
      }
    } else {
      this.groupService
        .update(data)
        .pipe(first())
        .subscribe(
          (res) => {
            this.group.groupName = "";
            this.group.leaderId = "";
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
            this.getFilterGroup();
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


}
