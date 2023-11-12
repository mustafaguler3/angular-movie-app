import { Component, OnInit } from '@angular/core';
import { Observable } from 'rxjs';
import { MovieService } from 'src/app/services/movie.service';
import { Genre } from 'src/app/types/movie';
import { Movie } from '../../types/movie';
import { ActivatedRoute } from '@angular/router';

@Component({
  selector: 'app-genres',
  templateUrl: './genres.component.html',
  styleUrls: ['./genres.component.scss']
})
export class GenresComponent implements OnInit{

  genres$: Observable<Genre[]> | null = null;
  shows$ : Observable<Movie[]> | null = null;
  genreId = ""

  constructor(private movieService: MovieService,
              private route: ActivatedRoute){}

  ngOnInit(): void {
    this.route.params.subscribe((params) => {
      this.genreId = params["genreId"];
      this.shows$ = this.movieService.getMovieByGenre(this.genreId)
    })
    this.genres$ = this.movieService.getMovieGenres();
    
  }

  findByGenre(genreId: string){
    //this.shows$ = this.movieService.getMovieByGenre(genreId)
  }
}
