import { Component, OnInit } from '@angular/core';
import {Subscription} from "rxjs";
import {ActivatedRoute, Router} from "@angular/router";
import {ArtistService} from "../artist.service";

@Component({
  selector: 'app-album',
  templateUrl: 'album.component.html',
  styleUrls: ['album.component.css']
})
export class AlbumComponent implements OnInit {
  private album:string;
  private subscription:Subscription;
  private albumD:string;
  constructor(private route:ActivatedRoute, private as:ArtistService,private router:Router) { }

  ngOnInit() {
    this.subscription = this.route.params.subscribe(
      res=>{
        this.album=res['id'];
        this.getAllAlbum();}
    )
  }

  getAllAlbum(){
    this.as.getAllAlbum(this.album)
      .subscribe(
          res=>{
            this.albumD = res.items;
          }
      )
  }

  gotoAlbumDetail(albumid){
    this.router.navigate(['/album', albumid]);
  }

}
