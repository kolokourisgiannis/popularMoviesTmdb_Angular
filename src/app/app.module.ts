import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import {MovieService} from './movie.service';
import {HttpClientModule} from '@angular/common/http';
import { AppComponent } from './app.component';
import { MoviesComponent } from './movies/movies.component';
import { AppRoutingModule } from './/app-routing.module';
import { MovieDetailComponent } from './movies/movie-detail/movie-detail.component';


@NgModule({
  declarations: [
    AppComponent,
    MoviesComponent,
    MovieDetailComponent,
	
  ],
  imports: [
    BrowserModule,
	HttpClientModule,
	AppRoutingModule
  ],
  providers: [MovieService],
  bootstrap: [AppComponent]
})
export class AppModule { }
