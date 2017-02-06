import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import {ArtistComponent} from "./artist.component";
import {ArtistService} from "./artist.service";

@NgModule({
  imports: [
    CommonModule
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
