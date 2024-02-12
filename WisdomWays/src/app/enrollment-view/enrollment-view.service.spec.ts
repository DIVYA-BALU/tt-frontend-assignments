import { TestBed } from '@angular/core/testing';

import { EnrollmentViewService } from './enrollment-view.service';

describe('EnrollmentViewService', () => {
  let service: EnrollmentViewService;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(EnrollmentViewService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
