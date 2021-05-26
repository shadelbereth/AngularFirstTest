import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppComponent } from './app.component';
import { HeaderComponent } from './components/header/header.component';
import { MovieListComponent } from './components/movie-list/movie-list.component';
import {RoutingModule} from "./routing/routing.module";
import { MovieDetailComponent } from './components/movie-detail/movie-detail.component';
import {HttpClientModule} from "@angular/common/http";
import { MovieAddComponent } from './components/movie-add/movie-add.component';
import {FormsModule} from "@angular/forms";
import { MovieHomeComponent } from './components/movie-home/movie-home.component';

@NgModule({
  declarations: [
    AppComponent,
    HeaderComponent,
    MovieListComponent,
    MovieDetailComponent,
    MovieAddComponent,
    MovieHomeComponent
  ],
  imports: [
    BrowserModule,
    RoutingModule,
    HttpClientModule,
    FormsModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
