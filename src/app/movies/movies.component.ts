import { Component, OnInit } from '@angular/core';
import {MovieService} from '../movie.service';
import {Movie} from '../movie';
import {AppSettings} from '../app.settings';
import { Http } from '@angular/http';

@Component({
 moduleId: module.id,
  selector: 'app-movies',
  templateUrl: './movies.component.html',
  styleUrls: ['./movies.component.css']
})
export class MoviesComponent implements OnInit {
  title = 'Popular Movies';
  movies: Movie[];
  selectedMovie: Movie;
  selectedMovieSearch: Movie;
  currentPage = 1;
  searchLink = 'https://api.themoviedb.org/3/search/movie?api_key=b557c6f9075378714d02d18ff281e359&query=';
  http: Http;
  

  constructor(private movieService: MovieService,http: Http) { this.http = http;}

  ngOnInit() {
    this.getMovies();
  }

  checkInput(searchTerm: HTMLInputElement,my): void {
		
		if(searchTerm.value != '' ){
		
			my.innerHTML = ''
		}
    }
  
  selectMovie(movie) {
    this.selectedMovie = movie;
  }

  nextPage() {
    this.currentPage += 1;
    this.getMovies();
  }

  previousPage() {
    this.currentPage -= 1;
    this.getMovies();
  }

  private getMovies() {
    this.movieService.getMovies(this.currentPage)
      .subscribe((response) => {
        this.movies = response.results;
        this.currentPage = response.page;
      });
  }
  
  imageUrl(filePath: string) {
	  
	  var imgLink = `${AppSettings.IMAGES_BASE_URL}/${AppSettings.IMAGES_SIZE}/${filePath}` ;
	  if ( imgLink == `https://image.tmdb.org/t/p/w500/null` ) {
		  
	   return `../../assets/images/default.jpg`;
	  }
      return imgLink;
  }
  
  
  
  performSearch(searchTerm: HTMLInputElement): void {
		
		if(searchTerm.value != '' ){
		
			var apiLink = this.searchLink + searchTerm.value;
			this.http.request(apiLink)
			.subscribe((res: Response) => {	
				this.movies = res.json().results;  
			});
		}
    }

}
