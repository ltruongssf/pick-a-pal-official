import { Component } from '@angular/core';
import { NavController } from 'ionic-angular';
import { LandingPage } from '../landing/landing';
import { PuppyPage } from '../puppy/puppy';
import { FavoritePage } from '../favorite/favorite'; 
import { StoreUserInfo } from '../../providers/store-user-info';
import { SettingsPage } from '../settings/settings'; 


@Component({
  selector: 'page-lobby',
  templateUrl: 'lobby.html'
})
export class LobbyPage {

  constructor(public navCtrl: NavController,
              public usersRest:StoreUserInfo
  
  
  ) {
    this.navCtrl = navCtrl;
 }
    puppy(){
        this.navCtrl.push(PuppyPage);
    }
    favorites() {
        this.navCtrl.push(FavoritePage);
    }
    home() {
      this.navCtrl.push(LandingPage);
    }
    settings() {
      this.navCtrl.push(SettingsPage);
    }
    
    logout() {
    this.usersRest.logout(window.localStorage.getItem('token'))
    .map(res => res.json())
    .subscribe(res => {
      window.localStorage.clear();
      this.navCtrl.setRoot(LandingPage);
    }, err => {
      console.log("Something went wrong!");
      window.localStorage.clear();
      this.navCtrl.setRoot(LandingPage);
    });
  }
}
