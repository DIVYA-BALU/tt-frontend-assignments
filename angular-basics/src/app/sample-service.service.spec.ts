import { TestBed } from '@angular/core/testing';

import { SampleServiceService } from './sample-service.service';

describe('SampleServiceService', () => {
  let service: SampleServiceService;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(SampleServiceService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
