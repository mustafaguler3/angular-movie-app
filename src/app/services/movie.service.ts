import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { MoviesDto } from '../types/movie';

@Injectable({
  providedIn: 'root'
})
export class MovieService {

  private apiUrl = "https://api.themoviedb.org/3";
  private apiKey = "YOUR API KEY"

  constructor(private http: HttpClient) { }

  getPopularMovies(){
    return this.http.get<MoviesDto>(`${this.apiUrl}/movie/popular?api_key=${this.apiKey}`)
  }
}
