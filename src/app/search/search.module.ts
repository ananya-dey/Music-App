import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import {SearchService} from "./search.service";
import {SearchComponent} from "./search.component";
import {ReactiveFormsModule} from "@angular/forms";

@NgModule({
  imports: [
    CommonModule,
    ReactiveFormsModule
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
