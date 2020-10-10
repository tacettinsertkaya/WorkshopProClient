import {FormControl} from '@angular/forms';


export class PasswordValidation {

    static MatchPassword(AC: FormControl) {
       return new Promise( resolve => {
         let password = AC.parent.controls['password'].value; // to get value in input tag
         let confirmPassword = AC.value; // to get value in input tag
         if(password === confirmPassword) {
           return resolve(null); // All ok, passwords match!!!
         } else {
            return resolve({"not_match": true})
         }
      });

    }
}