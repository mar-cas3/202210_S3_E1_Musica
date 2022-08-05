/* tslint:disable:no-unused-variable */

import { HttpClientTestingModule } from '@angular/common/http/testing';
import { TestBed, async, inject } from '@angular/core/testing';
import { CreadorService } from './creador.service';

describe('Service: Creador', () => {
  beforeEach(() => {
    TestBed.configureTestingModule({
      imports: [HttpClientTestingModule],
      providers: [CreadorService]
    });
  });

  it('should ...', inject([CreadorService], (service: CreadorService) => {
    expect(service).toBeTruthy();
  }));
});
