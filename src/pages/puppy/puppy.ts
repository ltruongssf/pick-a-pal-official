import { Component } from '@angular/core';
import { NavController } from 'ionic-angular';
import { RestorePetInfo } from '../../providers/restore-pet-info';
import { Slides } from 'ionic-angular';
import { FavoriteRest } from '../../providers/favorite-rest';

@Component({
  selector: 'page-puppy',
  templateUrl: 'puppy.html'
})

export class PuppyPage {

  constructor(
              public navCtrl: NavController,
              public restorePets: RestorePetInfo,
              public restFav: FavoriteRest
              ) {
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
 
 
 
  
 savePet(pet) {
    this.restFav.savePetData({
      user_ID: window.localStorage.getItem("userId"),
      puppy_ID: pet.id
      
    }, window.localStorage.getItem('token'))
    .map(res => res.json())
    .subscribe(res => { 
      console.log(res);
    }, error => {
      console.log(error);
    });
}
 
  
  
  archiveItem(item) {
    for(let i = 0; i < this.data.length; i++) {
 
      if(this.data[i] == item){
        this.data.splice(i, 1);
      }
 
    }
    
  }
}



 
