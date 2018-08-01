import { TestBed, inject } from '@angular/core/testing';

import { MovieService } from './movie.service';

describe('Movie.ServiceService', () => {
  beforeEach(() => {
    TestBed.configureTestingModule({
      providers: [MovieService]
    });
  });

  it('should be created', inject([MovieService], (service: MovieService) => {
    expect(service).toBeTruthy();
  }));
});
