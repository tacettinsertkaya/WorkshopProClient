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
import { UploadService } from "app/services/upload.service";

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
  preViewUrl:string='';
  isPreview:boolean=false;
  
  constructor(
    private userService: UserService,
    private alertifyService: AlertifyService,
    private companyService: CompanyService,
    private uploadService: UploadService,
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

  addCompany(){
    this.company=new Company();
    this.preViewUrl='';
    $("#addCompanyModal").modal("show");

  }

  editCompany(companyId: any) {
    this.preViewUrl = '';

    this.companyService
      .getCompany(companyId)
      .pipe(first())
      .subscribe((res) => {
        this.company = res;
        this.isUpdate = true;
     console.log("this.comao",this.company);
        this.uploadService
        .GET_IMAGE(this.company.imagePath)
        .pipe(first())
        .subscribe((res) => {
          this.preViewUrl = res[0];
        });



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

  

  receiveImages($event) {
    let images = $event;
    this.company.imagePath=images[0];
    console.log("recevir-images",images);
    this.uploadService
    .GET_IMAGE(this.company.imagePath)
    .pipe(first())
    .subscribe((res) => {
      this.preViewUrl = res[0];
    });
   
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