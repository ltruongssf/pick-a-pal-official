import { Component } from '@angular/core';
import { NavController } from 'ionic-angular';

/*
  Generated class for the Puppy page.

  See http://ionicframework.com/docs/v2/components/#navigation for more info on
  Ionic pages and navigation.
*/
@Component({
  selector: 'page-puppy',
  templateUrl: 'puppy.html'
})
export class PuppyPage {

  constructor(public navCtrl: NavController) {}

  ionViewDidLoad() {
    console.log('Hello PuppyPage Page');
  }

}
