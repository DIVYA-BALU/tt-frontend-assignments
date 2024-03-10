import { TestBed } from '@angular/core/testing';

import { CreateExplainersService } from './create-explainers.service';

describe('CreateExplainersService', () => {
  let service: CreateExplainersService;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(CreateExplainersService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
