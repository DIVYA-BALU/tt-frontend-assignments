import { TestBed } from '@angular/core/testing';

import { CreateShortReadsService } from './create-short-reads.service';

describe('CreateShortReadsService', () => {
  let service: CreateShortReadsService;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(CreateShortReadsService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
