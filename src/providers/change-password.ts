import { Injectable } from '@angular/core';
import { Http } from '@angular/http';
import 'rxjs/add/operator/map';

@Injectable()
export class changePassword {

  constructor(public http: Http) {
  }
  
  changePass(credentials,userId) {
    return this.http.patch("https://midterm-backend-ohheyitslisa.c9users.io/api/AppUsers/"+ userId,
        credentials
    );
  }
}
