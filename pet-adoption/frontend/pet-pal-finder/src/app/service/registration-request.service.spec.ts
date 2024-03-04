import { TestBed } from '@angular/core/testing';

import { RegistrationRequestService } from './registration-request.service';

describe('RegistrationRequestService', () => {
  let service: RegistrationRequestService;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(RegistrationRequestService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
