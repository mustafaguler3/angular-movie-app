import { Component, OnInit } from '@angular/core';
import { PaginatorState } from 'primeng/paginator';
import { Observable } from 'rxjs';
import { MovieService } from 'src/app/services/movie.service';
import { Movie, MoviesDto } from 'src/app/types/movie';

@Component({
  selector: 'app-show-list',
  templateUrl: './show-list.component.html',
  styleUrls: ['./show-list.component.scss']
})
export class ShowListComponent implements OnInit{

  showList$: Observable<MoviesDto> | null = null;
  searchValue = ""

  constructor(private movieService:MovieService){}

  ngOnInit(): void {
      this.getPagedShows(1);
  }

  getPagedShows(page:number, searchKeyword?:string){
    this.showList$ = this.movieService.searchMovies(page,searchKeyword);
  }

  searchChanged(){
    this.getPagedShows(1,this.searchValue);
  }

  pageChanged(event: PaginatorState){
    const pageNumber = event.page ? event.page + 1 : 1;
    this.getPagedShows(pageNumber,this.searchValue)
    
  }
}
