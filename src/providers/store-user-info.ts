import { Injectable } from '@angular/core';
import { Http } from '@angular/http';
import 'rxjs/add/operator/map';


@Injectable()
export class StoreUserInfo {

  constructor(public http: Http) {}

  register(newUserData) {
    return this.http.post("https://midterm-backend-ohheyitslisa.c9users.io/api/AppUsers/", newUserData);


  }

  login(credentials) {
      return this.http.post("https://midterm-backend-ohheyitslisa.c9users.io/api/AppUsers/login", credentials);

  }


 logout(token) {
    return this.http.post(
      'https://midterm-backend-ohheyitslisa.c9users.io/api/AppUsers/logout'+
        '?access_token=' + token, {}
        );
  }
}
