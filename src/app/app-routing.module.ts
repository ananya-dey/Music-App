import {Routes, RouterModule} from "@angular/router";
import {HomeComponent} from "./home/home.component";
import {AboutComponent} from "./about/about.component";
import {NgModule} from "@angular/core";
import {ArtistComponent} from "./artist/artist.component";
const AppRoutes: Routes = [
  {
    path: '',
    component: HomeComponent
  },
  {
    path: 'about',
    component: AboutComponent
  },
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

export class AppRouting{}
