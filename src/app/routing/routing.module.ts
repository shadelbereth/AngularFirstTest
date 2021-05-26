import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import {MovieDetailComponent} from "../components/movie-detail/movie-detail.component";
import {MovieAddComponent} from "../components/movie-add/movie-add.component";
import {MovieHomeComponent} from "../components/movie-home/movie-home.component";

const routes: Routes = [
  {path: 'list', component: MovieHomeComponent},
  {path: 'movie-detail/:id', component: MovieDetailComponent},
  {path: 'movie/add', component: MovieAddComponent},
  {path: '**', redirectTo: 'list'}
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class RoutingModule { }
