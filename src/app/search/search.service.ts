import { Injectable } from '@angular/core';
import {Http} from "@angular/http";
import 'rxjs/add/operator/map';


@Injectable()
export class SearchService {
  private SearchUrl:string;
  constructor(private http:Http) { }

  searchMusic(str:string){
    this.SearchUrl = 'https://api.spotify.com/v1/search?query='+str+'&type=artist';
      return this.http.get(this.SearchUrl).map(res=>res.json());
  }

}
