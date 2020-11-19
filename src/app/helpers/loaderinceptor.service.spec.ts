import { TestBed, inject } from '@angular/core/testing';

import { LoaderinceptorService } from './loaderinceptor.service';

describe('LoaderinceptorService', () => {
  beforeEach(() => {
    TestBed.configureTestingModule({
      providers: [LoaderinceptorService]
    });
  });

  it('should be created', inject([LoaderinceptorService], (service: LoaderinceptorService) => {
    expect(service).toBeTruthy();
  }));
});
