import { Component } from '@angular/core';
import { MovieService } from 'src/app/services/movie.service';

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.scss']
})
export class HomeComponent {
  upcomingMovies$ = this.movieService.getMoviesByType("upcoming",8)
  topRatedMovies$ = this.movieService.getMoviesByType("top_rated",4)

  constructor(private movieService: MovieService){}
}
