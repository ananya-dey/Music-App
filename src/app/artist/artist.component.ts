import { Component, OnInit } from '@angular/core';
import {ArtistService} from "./artist.service";
import {ActivatedRoute} from "@angular/router";
import {Subscription} from "rxjs";

@Component({
  selector: 'app-artist',
  templateUrl: './artist.component.html',
  styleUrls: ['./artist.component.css']
})
export class ArtistComponent implements OnInit {
  private artist:string;
  private artistDetail:string;
  private subscription:Subscription;
  constructor(private as:ArtistService, private route:ActivatedRoute) { }

  ngOnInit() {
    this.subscription = this.route.params.subscribe(
        res=>{
          this.artist=res['id'];
          this.getArtistDetail();
        }
    )
  }

  getArtistDetail(){
    this.as.getArtist(this.artist)
      .subscribe(
          res=>{
            this.artistDetail = res;
          }
      )
  }

}
