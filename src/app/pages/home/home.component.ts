import { Component } from '@angular/core';
import { map } from 'rxjs';
import { MovieService } from 'src/app/services/movie.service';
import { TvshowsService } from 'src/app/services/tvshows.service';
import { Tvshow, mapToMovies } from 'src/app/types/tvshow';

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.scss']
})
export class HomeComponent {
  upcomingMovies$ = this.movieService.getMoviesByType("upcoming",8)
  topRatedMovies$ = this.movieService.getMoviesByType("top_rated",7)
  popularTvshows$ = this.tvshowsService.getTvShowsByType("popular",10).pipe(
    map(mapToMovies));

  constructor(private movieService: MovieService,
              private tvshowsService:TvshowsService){}
}
