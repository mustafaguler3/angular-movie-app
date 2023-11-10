import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { Observable } from 'rxjs';
import { MovieService } from 'src/app/services/movie.service';
import { Movie } from 'src/app/types/movie';

@Component({
  selector: 'app-show-detail',
  templateUrl: './show-detail.component.html',
  styleUrls: ['./show-detail.component.scss']
})
export class ShowDetailComponent implements OnInit{

  showId = "";

  show$: Observable<Movie> | null = null

  constructor(private route: ActivatedRoute,
              private movieService: MovieService){}

  ngOnInit(): void {
      /*this.route.params.subscribe(params => {
        this.showId = params['id']
      }) */
      this.showId = this.route.snapshot.params['id']
      this.show$ = this.movieService.getMovieById(this.showId);
  }
}
