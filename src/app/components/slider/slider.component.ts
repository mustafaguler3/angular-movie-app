import { Component, OnInit } from '@angular/core';
import { HttpClient } from "@angular/common/http"
import { MovieService } from 'src/app/services/movie.service';
import { Movie, MoviesDto } from 'src/app/types/movie';
import { animate, state, style, transition, trigger } from '@angular/animations';

@Component({
  selector: 'app-slider',
  templateUrl: './slider.component.html',
  styleUrls: ['./slider.component.scss'],
  animations: [
    trigger("slideFade",[
      state("void",style({opacity:0})),
      transition('void <=> *',[animate('1s')])
    ])
  ]
})
export class SliderComponent implements OnInit{


  constructor(private movieService:MovieService){}

  movies$ = this.movieService.getPopularMovies()

  slideIndex = 0;

  ngOnInit(): void {
      this.changeSlide()
  }

  changeSlide(){
    setInterval(()=>{
      this.slideIndex++;
      if(this.slideIndex > 10){
        this.slideIndex = 0;
      }
    },5000)
  }

}
