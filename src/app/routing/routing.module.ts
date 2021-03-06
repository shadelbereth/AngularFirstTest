import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import {MovieDetailComponent} from "../components/movie-detail/movie-detail.component";
import {MovieAddComponent} from "../components/movie-add/movie-add.component";
import {MovieHomeComponent} from "../components/movie-home/movie-home.component";
import {TVShowHomeComponent} from "../components/tvshow-home/tvshow-home.component";
import {TVShowDetailComponent} from "../components/tvshow-detail/tvshow-detail.component";
import {TVShowAddComponent} from "../components/tvshow-add/tvshow-add.component";

const routes: Routes = [
  {path: 'movie/list', component: MovieHomeComponent},
  {path: 'movie-detail/:id', component: MovieDetailComponent},
  {path: 'movie/add', component: MovieAddComponent},
  {path: 'tv-show/list', component: TVShowHomeComponent},
  {path: 'tv-show-detail/:id', component: TVShowDetailComponent},
  {path: 'tv-show/add', component: TVShowAddComponent},
  {path: '**', redirectTo: 'movie/list'}
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class RoutingModule { }
