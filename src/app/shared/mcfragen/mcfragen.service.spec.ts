import { TestBed } from '@angular/core/testing';

import { McfragenService } from './mcfragen.service';

describe('McfragenService', () => {
  let service: McfragenService;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(McfragenService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
