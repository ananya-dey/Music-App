import { Component, OnInit } from '@angular/core';
import {ArtistService} from "../artist.service";
import {ActivatedRoute} from "@angular/router";
import {Subscription} from "rxjs";

@Component({
  selector: 'app-album-detail',
  templateUrl: 'album-detail.component.html',
  styleUrls: ['album-detail.component.css']
})
export class AlbumDetailComponent implements OnInit {
  private subscription:Subscription;
  private SingleAlbum:string;
  private SingleAlbumDetail:string;

  constructor(private as:ArtistService, private route:ActivatedRoute) { }

  ngOnInit() {
    this.subscription = this.route.params.subscribe(
      res=>{
        this.SingleAlbum=res['id'];
        this.getSingleAlbumDetail();
      }
    )
  }

  getSingleAlbumDetail(){
    this.as.getAlbumDetail(this.SingleAlbum)
      .subscribe(
        res=>{
          console.log(res);
          this.SingleAlbumDetail = res;
        }
      )
  }

}
