import { TestBed } from '@angular/core/testing';

import { FifragenService } from './fifragen.service';

describe('FifragenService', () => {
  let service: FifragenService;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(FifragenService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
