import { Component, OnInit } from "@angular/core";
import { ActivatedRoute, Router } from "@angular/router";
import { UserService } from "app/services/user.service";

declare const $: any;

@Component({
  selector: "app-dashboard",
  templateUrl: "./dashboard.component.html",
})
export class DashboardComponent implements OnInit{
/**
 *
 */
constructor(private authService:UserService,private router:Router,private route:ActivatedRoute) {
 

}
  ngOnInit(){

   let id= this.route.snapshot.params.id
   

    if(this.authService.hasRole("Member")){
      if(id==undefined){
        this.router.navigate(['/retro'])
      }
      else{
        this.router.navigate(['/retro'],id)

      }
       
    }
  }
}
