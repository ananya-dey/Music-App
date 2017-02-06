import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import {ArtistComponent} from "./artist.component";
import {ArtistService} from "./artist.service";
import {ArtistRouting} from "./artist-routing.module";

@NgModule({
  imports: [
    CommonModule,
    ArtistRouting
  ],
  declarations: [
    ArtistComponent
  ],
  providers:[
    ArtistService
  ],
  exports:[
    ArtistComponent
  ]
})
export class ArtistModule { }
