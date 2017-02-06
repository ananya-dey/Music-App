import { Injectable } from '@angular/core';
import {Http} from "@angular/http";
import 'rxjs/add/operator/map';

@Injectable()
export class ArtistService {
  private ArtistUrl:string;
  constructor(private http:Http) { }

  getArtist(id:string){
    this.ArtistUrl = 'https://api.spotify.com/v1/artists/'+id;
    return this.http.get(this.ArtistUrl).map(res=>res.json());
  }

}
