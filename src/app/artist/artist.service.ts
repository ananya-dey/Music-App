import { Injectable } from '@angular/core';
import {Http} from "@angular/http";
import 'rxjs/add/operator/map';

@Injectable()
export class ArtistService {
  private ArtistUrl:string;
  private AlbumUrl:string;

  constructor(private http:Http) { }

  getArtist(id:string){
    this.ArtistUrl = 'https://api.spotify.com/v1/artists/'+id;
    return this.http.get(this.ArtistUrl).map(res=>res.json());
  }

  getAlbum(Aid:string){
    this.AlbumUrl = 'https://api.spotify.com/v1/artists/'+Aid+'/albums';
    return this.http.get(this.AlbumUrl).map(res=>res.json());
  }

}
