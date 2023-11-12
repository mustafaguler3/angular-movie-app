import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { GenreDto, Movie, MoviesDto } from '../types/movie';
import { map } from 'rxjs';
import { VideoDto } from '../types/video';
import { ImagesDto } from '../types/image';
import { CreditDto } from '../types/credits';

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

  getMovieById(id: string){
    return this.http.get<Movie>(`${this.apiUrl}/movie/${id}?api_key=${this.apiKey}`)
  }

  getMovieVideos(id: string){
    return this.http.get<VideoDto>(`${this.apiUrl}/movie/${id}/videos?api_key=${this.apiKey}`)
    .pipe(map(data => data.results))
  }

  getMovieImages(id: string){
    return this.http.get<ImagesDto>(`${this.apiUrl}/movie/${id}/images?api_key=${this.apiKey}`)
    .pipe(map(data => data.backdrops))
  }

  getMovieCast(id: string){
    return this.http.get<CreditDto>(`${this.apiUrl}/movie/${id}/credits?api_key=${this.apiKey}`)
    .pipe(map(data => data.cast))
  }

  searchMovies(page: number,searchValue?: string){
    const uri = searchValue ? "search/movie" : "movie/popular"
    return this.http.get<MoviesDto>(`${this.apiUrl}/${uri}?query=${searchValue}&page=${page}&?api_key=${this.apiKey}`)
    
  }

  getMovieGenres(){
    return this.http.get<GenreDto>(`${this.apiUrl}/genre/movie/list?api_key=${this.apiKey}`)
    .pipe(map(data => data.genres))
  }

  getMovieByGenre(genreId:string,pageNumber = 1){
    return this.http.get<MoviesDto>(`${this.apiUrl}/discover/movie?with_genres=${genreId}&page=${pageNumber}?api_key=${this.apiKey}`)
    .pipe(map(data => data.results))
  }
}
