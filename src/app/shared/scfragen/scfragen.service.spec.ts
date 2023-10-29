import { TestBed } from '@angular/core/testing';

import { ScfragenService } from './scfragen.service';

describe('ScfragenService', () => {
  let service: ScfragenService;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(ScfragenService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
