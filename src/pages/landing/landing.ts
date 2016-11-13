import { Component } from '@angular/core';
import { NavController } from 'ionic-angular';
import { LoginPage } from '../login/login';
import { RegisterPage } from '../register/register';
import { AboutPage } from '../about/about';

@Component({
  selector: 'page-landing',
  templateUrl: 'landing.html'
})
export class LandingPage {

  constructor(public navCtrl: NavController) {
    this.navCtrl = navCtrl;

  }
    about() {
      this.navCtrl.push(AboutPage);
  }
    login(){
        this.navCtrl.push(LoginPage);
    }
   register(){
        this.navCtrl.push(RegisterPage);
    }
}
