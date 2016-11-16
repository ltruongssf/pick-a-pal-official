import { Injectable } from '@angular/core';
import { Http } from '@angular/http';
import 'rxjs/add/operator/map';

/*
  Generated class for the RestorePetInfo provider.

  See https://angular.io/docs/ts/latest/guide/dependency-injection.html
  for more info on providers and Angular 2 DI.
*/
@Injectable()
export class RestorePetInfo {

  constructor(public http: Http) {
    console.log('Hello RestorePetInfo Provider');
  }
 
  getPetData(token) {
    return this.http.get("https://midterm-backend-ohheyitslisa.c9users.io/api/Pets/" +
        '?access_token=' + token
    );
  }

// getPetData() {
//   return this.http.get("https://midterm-backend-ohheyitslisa.c9users.io/api/Pets/");
// }
}
