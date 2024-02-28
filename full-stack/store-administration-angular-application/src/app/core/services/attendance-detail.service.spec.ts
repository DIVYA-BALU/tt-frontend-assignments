import { TestBed } from '@angular/core/testing';

import { AttendanceDetailService } from './attendance-detail.service';

describe('AttendanceDetailService', () => {
  let service: AttendanceDetailService;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(AttendanceDetailService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
