import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { HttpModule } from '@angular/http';

import {
    AppRoutingModule,
    MoviesService,
    MoviesFilterPipe,
    MoviesSortingPipe,
    MoviesPagingPipe,
    PagerComponent,
    HeaderComponent
  } from './core/';

import { AppComponent } from './app.component';
import {
  MoviesListComponent,
  MovieShortComponent,
  DetailsComponent,
  TopTenComponent
} from './movies/';

@NgModule({
  declarations: [
    AppComponent,
    MoviesListComponent,
    MovieShortComponent,
    MoviesFilterPipe,
    MoviesSortingPipe,
    MoviesPagingPipe,
    PagerComponent,
    HeaderComponent,
    DetailsComponent,
    TopTenComponent
  ],
  imports: [
    BrowserModule,
    FormsModule,
    HttpModule,
    AppRoutingModule
  ],
  providers: [MoviesService],
  bootstrap: [AppComponent]
})
export class AppModule { }
