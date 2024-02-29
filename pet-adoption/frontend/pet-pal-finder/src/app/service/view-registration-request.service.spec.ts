import { TestBed } from '@angular/core/testing';

import { ViewRegistrationRequestService } from './view-registration-request.service';

describe('ViewRegistrationRequestService', () => {
  let service: ViewRegistrationRequestService;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(ViewRegistrationRequestService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
