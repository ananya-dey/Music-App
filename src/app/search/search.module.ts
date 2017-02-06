import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import {SearchService} from "./search.service";
import {SearchComponent} from "./search.component";
import {ReactiveFormsModule} from "@angular/forms";
import {ArtistModule} from "../artist/artist.module";

@NgModule({
  imports: [
    CommonModule,
    ReactiveFormsModule,
    ArtistModule
  ],
  exports:[SearchComponent],
  providers:[
    SearchService
  ],
  declarations: [
    SearchComponent
  ]
})
export class SearchModule { }
