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

//!!This one is for the id-sentral-app user-service!! 

// import { Injectable } from '@angular/core';
// import { Http, Headers } from '@angular/http';
// import 'rxjs/add/operator/map';


// @Injectable()
// export class UserService {
  
//   private url = 'https://id-sentral-bk-3-jbrownssf.c9users.io:8080/api/appUsers';


//   constructor(private http: Http) {
//     console.log('Hello UserService Provider');
//   }
  
//   registerUser(data) {
//     return this.http.post('https://id-sentral-bk-3-jbrownssf.c9users.io:8080/api/appUsers/', data);
//   }
  
//   loginUser(data) {
//     return this.http.post('https://id-sentral-bk-3-jbrownssf.c9users.io:8080/api/appUsers/login', data);
//   }
  
//   logoutUser(token) {
//     return this.http.post(
//       this.url + '/logout'+ '?access_token=' + token, {}
//     );
//   }
// }
