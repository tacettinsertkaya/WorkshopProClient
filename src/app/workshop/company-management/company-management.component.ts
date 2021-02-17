import { Component, OnInit } from "@angular/core";
import { Subject } from "app/models/subject";
import { SubjectsService } from "app/services/subject.service";
import { first } from "rxjs/operators";
import { SharedService } from "app/services/shared.service";
import swal from "sweetalert2";
import { UserService } from "app/services/user.service";
import { User } from "app/models/user";
import { Company } from "app/models/Company";
import { CompanyService } from "app/services/company.service";
import { AlertifyService } from "app/services/alertify.service";

declare var $: any;


@Component({
  moduleId: module.id,
  selector: "company-management-cmp",
  templateUrl: "company-management.component.html",
})
export class CompanyManagementComponent implements OnInit {
  companys: Array<Company> = [];
  company: Company = new Company();
  isUpdate: boolean = false;
  constructor(
    private userService: UserService,
    private alertifyService: AlertifyService,
    private companyService: CompanyService,
    private sharedService: SharedService
  ) {}
  ngOnInit() {
    this.getAllCompany();
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


  editCompany(companyId: any) {
    this.companyService
      .getCompany(companyId)
      .pipe(first())
      .subscribe((res) => {
        this.company = res;
        this.isUpdate = true;
        $("#addCompanyModal").modal("show");
      });
  }
  removeCompany(companyId: any) {
    this.companyService
      .delete(companyId)
      .pipe(first())
      .subscribe(
        (res) => {
          this.alertifyService.success()
          this.getAllCompany();
        },
        (error) => {
          this.alertifyService.error()
        }
      );
  }

  saveCompany() {
  

    if (!this.isUpdate) {
      this.companyService
        .create(this.company)
        .pipe(first())
        .subscribe(
          (res) => {
            this.company=new Company();
           
          
            this.alertifyService.success()
        
          this.getAllCompany();
            $("#addCompanyModal").modal("hide");
          },
          (error) => {
            this.alertifyService.error()
          }
        );
    } else {
      this.companyService
        .update(this.company)
        .pipe(first())
        .subscribe(
          (res) => {
            this.company=new Company();

       
            this.alertifyService.success()
            this.getAllCompany();
            this.isUpdate = false;
            $("#addCompanyModal").modal("hide");
          },
          (error) => {
            this.alertifyService.error()
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
          this.removeCompany(id);
        }
      });
    }
  }
}