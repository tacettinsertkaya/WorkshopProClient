import { Injectable } from "@angular/core";
import { HttpClient, HttpHeaders } from "@angular/common/http";
import { Observable } from "rxjs";
import { environment } from "../../environments/environment";
import { UserService } from "./user.service";
import swal from "sweetalert2";

@Injectable()
export class AlertifyService {

    success(){
        swal({
            title: "Başarılı",
            text: "İşlem Başarılı",
            type: "success",
            timer:2500
          })
    }

    error(){
        swal({
            title: "Başarısız",
            text: "İşlem sırasında hata oluştu",
            type: "error",
            timer:2500
          })
    }

    warning(msg){
        swal({
            title: "Uyarı",
            text:msg,
            type: "warning",
            timer:2500
          })
    }

}