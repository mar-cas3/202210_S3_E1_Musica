/* tslint:disable:no-unused-variable */

import { HttpClientTestingModule } from '@angular/common/http/testing';
import { TestBed, async, inject } from '@angular/core/testing';
import { PodcastService } from './podcast.service';

describe('Service: Podcast', () => {
  beforeEach(() => {
    TestBed.configureTestingModule({
      imports: [HttpClientTestingModule],
      providers: [PodcastService]
    });
  });

  it('should ...', inject([PodcastService], (service: PodcastService) => {
    expect(service).toBeTruthy();
  }));
});
