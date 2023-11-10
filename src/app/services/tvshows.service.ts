import { Injectable } from '@angular/core';
import { TvshowsDto } from '../types/tvshow';
import { HttpClient } from '@angular/common/http';
import { map } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class TvshowsService {
  
  private apiUrl = "https://api.themoviedb.org/3";
  private apiKey = ""

  constructor(private http: HttpClient) { }

  getTvShowsByType(type:string,count = 20){
    return this.http.get<TvshowsDto>(`${this.apiUrl}/tv/${type}?api_key=${this.apiKey}`)
    .pipe(map(data => data.results.slice(0,count)))
  }
}
