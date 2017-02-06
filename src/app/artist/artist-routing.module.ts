import {Routes, RouterModule} from "@angular/router";
import {NgModule} from "@angular/core";
import {ArtistComponent} from "./artist.component";
import {AlbumComponent} from "./album/album.component";
import {AlbumDetailComponent} from "./album-detail/album-detail.component";
const AppRoutes: Routes = [
  {
    path: 'artist/:id',
    component: ArtistComponent
  },
  {
    path: 'album/:id',
    component: AlbumDetailComponent
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
