import { TestBed } from '@angular/core/testing';

import { AddAccountService } from './add-account.service';

describe('AddAccountService', () => {
  let service: AddAccountService;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(AddAccountService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
