import { Component } from '@angular/core';
import { NavController } from 'ionic-angular';
import { changePassword } from '../../providers/change-password';
import { LobbyPage } from '../lobby/lobby'; 
 
@Component({
  selector: 'page-settings',
  templateUrl: 'settings.html'
})
export class SettingsPage {

  constructor(public navCtrl: NavController,
              public newPass: changePassword) {
      this.navCtrl = navCtrl;
}

user = {
  password: "",
  id: window.localStorage.getItem('userId')
};


changePassword(form) {
  if(form.invalid)
      return alert("Please fill in all of the required fields.");

 this.newPass.changePass(this.user, window.localStorage.getItem('userId'))
 .map(res => res.json())
   .subscribe(
     res => {
       this.navCtrl.setRoot(LobbyPage);
     },
     err => {
   console.log("Error!");
      });
  }
}

