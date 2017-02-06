import {Routes, RouterModule} from "@angular/router";
import {NgModule} from "@angular/core";
import {ArtistComponent} from "./artist.component";
const AppRoutes: Routes = [
  {
    path: 'artist/:id',
    component: ArtistComponent
  }
]

@NgModule({
  imports:[
    RouterModule.forRoot(AppRoutes)
  ],
  exports:[
    RouterModule
  ]
})

export class ArtistRouting{}
