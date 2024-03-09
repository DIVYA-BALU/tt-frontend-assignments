import { TestBed } from '@angular/core/testing';

import { ExplainersService } from './explainers.service';

describe('ExplainersService', () => {
  let service: ExplainersService;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(ExplainersService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
