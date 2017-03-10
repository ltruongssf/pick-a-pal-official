import { Injectable } from '@angular/core';
import { Http } from '@angular/http';
import 'rxjs/add/operator/map';
import { Observable } from 'rxjs/Observable';
import 'rxjs/Rx';

@Injectable()
export class FlickrService {
  
    result$: Observable<any>;
    key = '';
    
    constructor(public http: Http) {
      console.log('Hello FlickrService Provider');
    }
  

    getResult(query: string) {
        //console.log(query)
        let url = `https://api.flickr.com/services/rest/?method=flickr.photos.search&api_key=a18ee999603b1350f0a4d69eb2ef23d3&tags=weather&per_page=12&format=json&nojsoncallback=1`;
        return this.http
            .get(url)
            .map(res => res.json())
            .map((val) => {
                if (val.stat === 'ok') {
                    return val.photos.photo.map((photo: any) => {
                        return {
                            url: `https://farm${photo.farm}.staticflickr.com/${photo.server}/${photo.id}_${photo.secret}_m.jpg`,
                            title: photo.title
                        }
                    })
                }
                else {
                    return [];
                }
            });
    }
}
