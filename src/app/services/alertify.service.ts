import { Injectable } from "@angular/core";
import { HttpClient, HttpHeaders } from "@angular/common/http";
import { Observable } from "rxjs";
import { environment } from "../../environments/environment";
import { UserService } from "./user.service";
import swal from "sweetalert2";
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
        swal({
            title:this.translate.instant("common.success"),
            text:this.translate.instant("common.operation_success"),
            type: "success",
            timer:2500
          })
    }

    error(){
        swal({
            title:this.translate.instant("common.fail"),
            text:this.translate.instant("common.operation_fail"),
            type: "error",
            timer:2500
          })
    }

    warning(msg){
        swal({
            title:this.translate.instant("common.warning"),
            text:msg,
            type: "warning",
            timer:2500
          })
    }

}