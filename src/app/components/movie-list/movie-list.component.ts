import { Component, OnInit, trigger, state, style, transition, animate } from '@angular/core';
import { MovieService } from '../../services/movie/movie.service';
import { Movie } from '../../models/movie.model';
import { TransferState, makeStateKey } from '@angular/platform-browser';

const MOVIES_KEY = makeStateKey('movies');

@Component({
  selector: 'app-movie-list',
  templateUrl: './movie-list.component.html',
  styleUrls: ['./movie-list.component.css']
})

export class MovieListComponent implements OnInit {
  private _movieService: MovieService;
  public newMovies: Array<Movie> = new Array<Movie>();

  constructor(movieService: MovieService, private state: TransferState) {
    this._movieService = movieService;
  }

  ngOnInit() {
    this.newMovies = this.state.get(MOVIES_KEY, null as Movie[]);

    if (this.newMovies == null) {
      this._movieService.GetPopularMovies()
        .subscribe(
          result => {
            this.newMovies = result;
            this.state.set(MOVIES_KEY, result);
          },
          error => {
          }
        );
    }
  }

}
