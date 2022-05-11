import { Component, NgZone, OnInit } from '@angular/core';
import { Template } from 'app/models/template';
import { TemplateDetail } from 'app/models/template-detail';
import { TemplateService } from 'app/services/template.service';
import { first, timeoutWith } from 'rxjs/operators';
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
import { AlertifyService } from 'app/services/alertify.service';
import { FormBuilder, FormControl, FormGroup, Validators } from '@angular/forms';

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
  groupCreateForm: FormGroup;

  group: Group = new Group();
  groups: Array<GroupDto> = [];

  companys: Array<Company> = [];
  companyId: string = '';

  constructor(
    private userService: UserService,
    private groupService: GroupService,
    private companyService: CompanyService,
    private alertifyService: AlertifyService,
    private formBuilder: FormBuilder,
    private sharedService: SharedService
  ) { }
  ngOnInit() {
    this.group.companyId = this.userService.currentUserValue.companyId;
    this.getAllUser();
    this.user.statu = "Leader";
    this.getAllCompany();
    this.currentCompany = this.userService.currentUserValue.company;

    this.getFilterGroup();
    this.addGroupForm();
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
          this.alertifyService.error();
        }
      );
  }

  getUserLeader() {
    return this.userService.currentUserValue.company ? this.userService.currentUserValue.company.retroCount : 0;
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
          // this.currentCompany.retroCount = this.currentCompany.retroCount + 1;
          // this.updateCompany(this.currentCompany);

          this.alertifyService.success();

        },
        (error) => {
          this.alertifyService.error();

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
          this.alertifyService.error();

        }
      );
  }


  isCheckRetro() {
    return this.currentCompany.retroCount > 0 ? true : false;
  }



  addGroupForm(): void {


    this.groupCreateForm = this.formBuilder.group({
      companyId: new FormControl(this.userService.currentUserValue.companyId, [Validators.required, Validators.minLength(2)]),
      groupName: new FormControl('', [Validators.required]),
      leaderId: new FormControl('', [Validators.required]),

    });
  }





  editGroup(group: Group) {
    this.groupService
      .getGroup(group.id)
      .pipe(first())
      .subscribe((res) => {
        this.group = res;
        this.isUpdate = true;


        this.groupCreateForm.controls['companyId'].setValue(this.group.companyId);
        this.groupCreateForm.controls['groupName'].setValue(this.group.groupName);
        this.groupCreateForm.controls['leaderId'].setValue(this.group.leaderId);


        $("#addModal").modal("show");
      });
  }


  updateCompany(company: Company) {
    this.companyService.update(company).pipe().subscribe((res) => {
      this.alertifyService.success();

      let currentUser = this.userService.currentUserValue;
      currentUser.company = res;
      this.userService.currentUserSetValue(currentUser);
    });
  }


  saveUser() {
    let data = Object.assign({}, this.groupCreateForm.value);
        
    if (this.groupCreateForm.invalid) {
      return;
    }
    if (this.groupCreateForm.valid) {

    
      if (!this.isUpdate) {

        if (this.isCheckRetro()) {
          data.memberCount = this.currentCompany.participantCount;
          this.groupService
            .create(data)
            .pipe(first())
            .subscribe(
              (res) => {
                 this.addGroupForm();

                this.alertifyService.success();
                this.getFilterGroup();
                $("#addModal").modal("hide");
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
      } else {
        data.id=this.group.id;
        this.groupService
          .update(data)
          .pipe(first())
          .subscribe(
            (res) => {
              this.addGroupForm();
              this.alertifyService.success();

              this.getFilterGroup();
              this.isUpdate = false;
              $("#addModal").modal("hide");
            },
            (error) => {
              this.alertifyService.error();

            }
          );
      }
    }
  }

}
