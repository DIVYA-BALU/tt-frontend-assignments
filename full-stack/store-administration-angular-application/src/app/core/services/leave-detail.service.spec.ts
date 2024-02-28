import { TestBed } from '@angular/core/testing';

import { LeaveDetailService } from './leave-detail.service';

describe('LeaveDetailService', () => {
  let service: LeaveDetailService;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(LeaveDetailService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
