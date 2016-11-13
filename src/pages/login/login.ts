import { Component } from '@angular/core';
import { NavController } from 'ionic-angular';
import { LobbyPage } from '../lobby/lobby';
import { StoreUserInfo } from '../../providers/store-user-info';

@Component({
  selector: 'page-login',
  templateUrl: 'login.html'
})


export class LoginPage{

  constructor(
              public navCtrl: NavController,
              public usersInfo: StoreUserInfo) {
    this.navCtrl = navCtrl; 
  }

  user = {
    email: "",
    password: ""
  };


  signinForm(form) {
     if(form.invalid)
         return alert("Please fill in all of the required fields.");

    this.usersInfo.login(this.user)
    .map(res => res.json())
      .subscribe(
        res => {
          window.localStorage.setItem('token', res.id);
          window.localStorage.setItem('userId', res.userId);
          this.navCtrl.setRoot(LobbyPage);
        },
        err => {
      console.log("Error!");
    });
  }
}