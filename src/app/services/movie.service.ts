import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { MoviesDto } from '../types/movie';
import { map } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class MovieService {

  private apiUrl = "https://api.themoviedb.org/3";
  private apiKey = ""

  constructor(private http: HttpClient) { }

  getMoviesByType(type:string,count = 20){
    return this.http.get<MoviesDto>(`${this.apiUrl}/movie/${type}?api_key=${this.apiKey}`)
    .pipe(map(data => data.results.slice(0,count)))
  }
}
