import { BrowserModule, BrowserTransferStateModule  } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { HttpClientModule, HttpClient } from '@angular/common/http';
import {MatButtonModule, MatCheckboxModule,MatCardModule, MatGridListModule, MatToolbarModule} from '@angular/material';

//components
import { AppComponent } from './app.component';
import { MovieListComponent } from './components/movie-list/movie-list.component'

//services
import {MovieService }from './services/movie/movie.service';
import { MovieDetailComponent } from './components/movie-detail/movie-detail.component';

@NgModule({
  declarations: [
    AppComponent,
    MovieListComponent,
    MovieDetailComponent
  ],
  imports: [
    BrowserModule.withServerTransition({appId: 'movie-app'}),
    BrowserTransferStateModule,
    HttpClientModule,
    MatButtonModule, MatCheckboxModule, MatCardModule, MatGridListModule, MatToolbarModule,
  ],
  providers: [MovieService],
  bootstrap: [AppComponent]
})
export class AppModule { }
