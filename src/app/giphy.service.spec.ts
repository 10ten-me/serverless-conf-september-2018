import { TestBed, inject } from '@angular/core/testing';
import { HttpClientTestingModule } from '@angular/common/http/testing';

import { GiphyService } from './giphy.service';

describe('GiphyService', () => {
  beforeEach(() => {
    TestBed.configureTestingModule({
      imports: [HttpClientTestingModule],
      providers: [GiphyService]
    });
  });

  it('should be created', inject([GiphyService], (service: GiphyService) => {
    expect(service).toBeTruthy();
  }));
});
