import { Component } from '@angular/core';
import { NavController } from 'ionic-angular';
import { RestorePetInfo } from '../../providers/restore-pet-info';
import { Slides } from 'ionic-angular';

@Component({
  selector: 'page-puppy',
  templateUrl: 'puppy.html'
})

export class PuppyPage {

  constructor(
              public navCtrl: NavController,
              public restorePets: RestorePetInfo) {
    this.navCtrl = navCtrl;
  }
  
  mySlideOptions = {
    initialSlide: 1,
    loop: true
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
  
  favorite() {}
  
  archiveItem () {}
}



 
