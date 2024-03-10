import { TestBed } from '@angular/core/testing';

import { ShortReadsService } from './short-reads.service';

describe('ShortReadsService', () => {
  let service: ShortReadsService;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(ShortReadsService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
