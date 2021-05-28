import { TestBed } from '@angular/core/testing';

import { TVShowService } from './tvshow.service';

describe('TVShowService', () => {
  let service: TVShowService;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(TVShowService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
