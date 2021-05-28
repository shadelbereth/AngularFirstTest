import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppComponent } from './app.component';
import { HeaderComponent } from './components/header/header.component';
import { AudioVisualProdListComponent } from './components/audio-visual-prod-list/audio-visual-prod-list.component';
import {RoutingModule} from "./routing/routing.module";
import { MovieDetailComponent } from './components/movie-detail/movie-detail.component';
import {HTTP_INTERCEPTORS, HttpClientModule} from "@angular/common/http";
import { MovieAddComponent } from './components/movie-add/movie-add.component';
import {FormsModule} from "@angular/forms";
import { MovieHomeComponent } from './components/movie-home/movie-home.component';
import {AuthorizationInterceptor} from "./service/authorization.interceptor";
import { TVShowHomeComponent } from './components/tvshow-home/tvshow-home.component';
import { AudioVisualProdDetailComponent } from './components/audio-visual-prod-detail/audio-visual-prod-detail.component';
import { TVShowDetailComponent } from './components/tvshow-detail/tvshow-detail.component';

@NgModule({
  declarations: [
    AppComponent,
    HeaderComponent,
    AudioVisualProdListComponent,
    MovieDetailComponent,
    MovieAddComponent,
    MovieHomeComponent,
    TVShowHomeComponent,
    AudioVisualProdDetailComponent,
    TVShowDetailComponent
  ],
  imports: [
    BrowserModule,
    RoutingModule,
    HttpClientModule,
    FormsModule
  ],
  providers: [{
    provide: HTTP_INTERCEPTORS,
    useClass: AuthorizationInterceptor,
    multi: true,
  }],
  bootstrap: [AppComponent]
})
export class AppModule { }
