import { Injectable } from "@angular/core";
import { HttpClient, HttpHeaders } from "@angular/common/http";
import { Observable } from "rxjs";
import { environment } from "../../environments/environment";
import { UserService } from "./user.service";
import Swal  from "sweetalert2";
import { TranslateService } from "@ngx-translate/core";

@Injectable()
export class AlertifyService {
    /**
     *
     */
    constructor(
        private translate:TranslateService
    ) {
      

    }

    success(){
        Swal.fire({
            title:this.translate.instant("common.success"),
            text:this.translate.instant("common.operation_success"),
            icon: "success",
            timer:2500
          })
    }

    error(){
        Swal.fire({
            title:this.translate.instant("common.fail"),
            text:this.translate.instant("common.operation_fail"),
            icon: "error",
            timer:2500
          })
    }

    warning(msg){
        Swal.fire({
            title:this.translate.instant("common.warning"),
            text:msg,
            icon: 'warning',
            timer:2500
          })
    }

}