import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { Observable } from 'rxjs';
import { IMAGES_SIZES } from 'src/app/constants/images-sizes';
import { MovieService } from 'src/app/services/movie.service';
import { Image } from 'src/app/types/image';
import { Movie } from 'src/app/types/movie';
import { Video } from 'src/app/types/video';

@Component({
  selector: 'app-show-detail',
  templateUrl: './show-detail.component.html',
  styleUrls: ['./show-detail.component.scss']
})
export class ShowDetailComponent implements OnInit{

  showId = "";

  show$: Observable<Movie> | null = null
  showVideos$: Observable<Video[]> | null = null;
  showImages$: Observable<Image[]> | null = null;

  imagesSizes = IMAGES_SIZES;
  
  constructor(private route: ActivatedRoute,
              private movieService: MovieService){}

  ngOnInit(): void {
      /*this.route.params.subscribe(params => {
        this.showId = params['id']
      }) */
      this.showId = this.route.snapshot.params['id']
      this.show$ = this.movieService.getMovieById(this.showId);
      this.showVideos$ = this.movieService.getMovieVideos(this.showId)
      this.showImages$ = this.movieService.getMovieImages(this.showId)
  }
}
