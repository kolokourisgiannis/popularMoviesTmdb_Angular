 import { Component } from '@angular/core';
 import {Movie} from './movie';
 import { FormControl } from '@angular/forms';
 import {MovieService} from './movie.service';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  title = 'Popular Movies ';


  constructor(private service: MovieService) {}


	 
  }
  
  
