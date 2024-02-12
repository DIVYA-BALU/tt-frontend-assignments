import { TestBed } from '@angular/core/testing';

import { ViewStatementService } from './view-statement.service';

describe('ViewStatementService', () => {
  let service: ViewStatementService;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(ViewStatementService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
