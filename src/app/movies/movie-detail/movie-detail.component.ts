import {Component, Input, OnInit} from '@angular/core';
import {Movie} from '../../movie';
import {AppSettings} from '../../app.settings';

@Component({
  selector: 'app-movie-detail',
  templateUrl: './movie-detail.component.html',
  styleUrls: ['./movie-detail.component.css']
})
export class MovieDetailComponent implements OnInit {
  @Input() movie: Movie;

  constructor() { }

  ngOnInit() {
  }

   imageUrl(filePath: string) {
	 
	  var imgLink = `${AppSettings.IMAGES_BASE_URL}/${AppSettings.IMAGES_SIZE}/${filePath}` ;
	  if ( `https://image.tmdb.org/t/p/w500/${filePath}` == `https://image.tmdb.org/t/p/w500/null` ) {
		  
	   return `../../../assets/images/default.jpg`;
	  }
      return imgLink;
  }

}
