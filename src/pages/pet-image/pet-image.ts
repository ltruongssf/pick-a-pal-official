import { Component, OnInit } from '@angular/core';
import { NavController } from 'ionic-angular';
// import { FlickrService } from '../../providers/flickr-service';
import { Injectable } from '@angular/core';
import { Http } from '@angular/http';
import 'rxjs/add/operator/map';
import { Observable } from 'rxjs/Observable';
import 'rxjs/Rx';
import { Photo } from '../../app/photo';

@Component({
  selector: 'page-pet-image',
  templateUrl: 'pet-image.html'
})
export class PetImagePage {
    url: any = `https://api.flickr.com/services/rest/?method=flickr.photos.search&api_key=e397e7163ac378374bc4a39ba11f8bbd&tags=weather&per_page=12&format=json&nojsoncallback=1`;
    photos: Array<Photo> = [];
  
    constructor(public http: Http,
                public navCtrl: NavController) {
      console.log('Hello FlickrService Provider');
    }
  
  
  
  ionViewDidLoad() {
    console.log('Hello PetImagePage Page');
  }
  
  result$: Observable<any>;
    key = '';
    
  
    // getImages() {
    //     //console.log(query)
    //     let url = `https://api.flickr.com/services/rest/?method=flickr.photos.search&api_key=a18ee999603b1350f0a4d69eb2ef23d3&tags=weather&per_page=12&format=json&nojsoncallback=1`;
    //     return this.http
    //         .get(url)
    //         .map(res => res.json())
    //         .map((val) => {
    //             if (val.stat === 'ok') {
    //                 return val.photos.photo.map((photo: any) => {
    //                     return {
    //                         url: `https://farm${photo.farm}.staticflickr.com/${photo.server}/${photo.id}_${photo.secret}_m.jpg`,
    //                         title: photo.title
    //                     }
    //                 })
    //             }
    //             else {
    //                 return [];
    //             }
    //         });
    // }
    
  searchPhoto() {
        
         var url = 'https://api.flickr.com/services/rest/?method=flickr.photos.search&api_key=a18ee999603b1350f0a4d69eb2ef23d3&tags=weather&per_page=12&format=json&nojsoncallback=1';
        
         this.http.get(url)
                .map(res => res.json())
                .subscribe( 
                    data => { 
                       return data.photos.photo.map((photo: any) => {
                        return {
                            url: `https://farm${photo.farm}.staticflickr.com/${photo.server}/${photo.id}_${photo.secret}_m.jpg`,
                            title: photo.title
                        }
                    })
                       
                    },
                    err => {console.log (err)}
                    );
     
    }
}


