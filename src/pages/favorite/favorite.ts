import { Component } from '@angular/core';
import { NavController } from 'ionic-angular';
import { Slides } from 'ionic-angular';

/*
  Generated class for the Favorite page.

  See http://ionicframework.com/docs/v2/components/#navigation for more info on
  Ionic pages and navigation.
*/
@Component({
  selector: 'page-favorite',
  templateUrl: 'favorite.html'
})

export class FavoritePage {
  
  slides = [
    { 
      image: "https://encrypted-tbn3.gstatic.com/images?q=tbn:ANd9GcRCnY_rJ02akbyFfGuvxrMUcvyN5TOWKwijZjSEhLHVqOoKbJfz"
    },
    {
      image: "https://encrypted-tbn2.gstatic.com/images?q=tbn:ANd9GcTLEAjec7f06m_YI41Je4CwGTqvM-QUESQGPulUWx5_Oh4Typzk"
    },
    {
      image: "https://encrypted-tbn3.gstatic.com/images?q=tbn:ANd9GcQk8SUazdMSMlkcaaf2in15EnNMDECn5eoL5WLMDBycUUpBL6Ww3Q"
    },
    {
      image: "https://encrypted-tbn1.gstatic.com/images?q=tbn:ANd9GcQOe9ukQcm73PxpXcWTyfWoFNon8L1odtvwfvwHi1PubP6vrIe-yg"
    }
    
    ];
  

  constructor(public navCtrl: NavController) {}
  

}
