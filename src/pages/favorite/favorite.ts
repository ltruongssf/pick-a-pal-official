import { Component } from '@angular/core';
import { NavController } from 'ionic-angular';
import { Slides } from 'ionic-angular';
import { RestorePetInfo } from '../../providers/restore-pet-info';
import { FavoriteRest } from '../../providers/favorite-rest';


@Component({
  selector: 'page-favorite',
  templateUrl: 'favorite.html'
})

export class FavoritePage {
  
 
   constructor(
              public navCtrl: NavController,
              public restorePets: RestorePetInfo,
              public displayFav: FavoriteRest
              ) {
    this.navCtrl = navCtrl;
    // displayFav.getPetInfo();
  }
  
  
    
  ionViewDidLoad() {
    
    this.restorePets.getPetData(this.pets)
  	    .map(res => res.json())
  	    .subscribe(data => {
  	      this.data = data;
  	      console.log(data);
    });
  }
  
  pets = [{
    name: "",
    info: "",
    image: ""
  }]
  
  // diplayFavorites() {
  //   this.displayFav();
    
  // }

  data = []; 
  removeItem(item) { 
 
    // for(let i = 0; i < this.data.length; i++) {
 
    //   if(this.data[i] == item){
    //     this.data.splice(i, 1);
    //   }
    
    for(let i = 0; i < this.pets.length; i++) {
 
      if(this.pets[i] == item){
        this.pets.splice(i, 1);
      }
 
    }
  }
}
  
//   removePost(post){
//     let index = this.data.indexOf(post);

//     if(index > -1){
//       this.data.splice(index, 1);
//     }
//     }
