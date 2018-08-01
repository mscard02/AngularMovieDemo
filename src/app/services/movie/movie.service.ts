import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs/Observable';
import { Movie } from '../../models/movie.model';

import 'rxjs/add/operator/map';
import 'rxjs/add/operator/do';
import * as _ from 'lodash';
import { environment } from '../../../environments/environment';
import { MovieServiceResult } from './movie-service-result.model';
import { IMovieServiceResult } from './movie-service-results.model';

@Injectable()
export class MovieService {
private _httpClient: HttpClient;

  constructor(httpClient: HttpClient) 
  { 
    this._httpClient = httpClient;
  }

  public GetPopularMovies(): Observable<Movie[]>{
   let queryUrl = `https://api.themoviedb.org/3/movie/now_playing?api_key=cc83b807249ba7c5273859f1eb51a230&language=en-US&page=1`; 

   return this._httpClient
   .get(queryUrl)
   .map((data: IMovieServiceResult) => 
      data.results.map((e: MovieServiceResult) => 
      {   
        return this.ResolveToMovie(e);
      })
    );     
  }

  public ResolveToMovie(m: MovieServiceResult): Movie{
    return new Movie(
        m.id, 
        m.vote_average, 
        m.title, 
        m.poster_path, 
        m.overview, 
        m.release_date);
  }
}
