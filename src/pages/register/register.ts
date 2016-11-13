import { Component } from '@angular/core';
import { NavController } from 'ionic-angular';
import { LobbyPage } from '../lobby/lobby';
import { StoreUserInfo } from '../../providers/store-user-info';


@Component({
  selector: 'page-register',
  templateUrl: 'register.html'
})
export class RegisterPage {

  constructor(public navCtrl: NavController,
              public usersInfo: StoreUserInfo
             ) {
    this.navCtrl = navCtrl;
}

  user = {};

    register(form) {
     if(form.invalid)
         return alert("Please fill in all of the required fields.");

    this.usersInfo.register(this.user)
    .map(res => res.json())
    .subscribe(res => {
      window.localStorage.setItem('token', res.token);
      window.localStorage.setItem('userId', res.id);
      this.navCtrl.setRoot(LobbyPage);
    }, err => {
      console.log("Error!!");
    });
  }

}