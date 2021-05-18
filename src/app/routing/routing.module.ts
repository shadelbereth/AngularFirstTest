import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import {MovieListComponent} from "../components/movie-list/movie-list.component";
import {MovieDetailComponent} from "../components/movie-detail/movie-detail.component";

const routes: Routes = [
  {path: 'list', component: MovieListComponent},
  {path: 'movie-detail/:id', component: MovieDetailComponent},
  {path: '**', redirectTo: 'list'}
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class RoutingModule { }
