import { TestBed } from '@angular/core/testing';

import { ReniecRestApiService } from './reniec-rest-api.service';

describe('ReniecRestApiService', () => {
  let service: ReniecRestApiService;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(ReniecRestApiService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
