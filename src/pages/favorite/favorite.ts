import { Component } from '@angular/core';
import { NavController } from 'ionic-angular';
import { Slides } from 'ionic-angular';
import { RestorePetInfo } from '../../providers/restore-pet-info';


@Component({
  selector: 'page-favorite',
  templateUrl: 'favorite.html'
})

export class FavoritePage {
  
 
   constructor(
              public navCtrl: NavController,
              public restorePets: RestorePetInfo) {
    this.navCtrl = navCtrl;
  }
  
  ionViewDidLoad() {
    
    this.restorePets.getPetData(this.pets)
  	    .map(res => res.json())
  	    .subscribe(data => {
  	      this.data = data;
  	      console.log(data);
    });
  }
   pets = {
    name: "",
    info: "",
    image: ""
    
  }
  data = [];

  
  
  
}
