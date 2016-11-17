import { Injectable } from '@angular/core';
import { Http } from '@angular/http';
import 'rxjs/add/operator/map';

@Injectable()
export class FavoriteRest {

  constructor(public http: Http) {
    console.log('Hello RestorePetInfo Provider');
  }

  savePetData(info, token) {
      return this.http.post("https://midterm-backend-ohheyitslisa.c9users.io/api/MyFavorites" + "?access_token" + token, info);
  }

  getPetInfo(user_ID,token) {
       return this.http.get("https://midterm-backend-ohheyitslisa.c9users.io/api/MyFavorites"+'?filter[where][userID]=' + user_ID +
           '&access_token=' + token
       );
     }
}