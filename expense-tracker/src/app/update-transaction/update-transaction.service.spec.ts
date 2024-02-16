import { TestBed } from '@angular/core/testing';

import { UpdateTransactionService } from './update-transaction.service';

describe('UpdateTransactionService', () => {
  let service: UpdateTransactionService;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(UpdateTransactionService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
