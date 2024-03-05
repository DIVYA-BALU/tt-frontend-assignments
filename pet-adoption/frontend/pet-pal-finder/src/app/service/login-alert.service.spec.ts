import { TestBed } from '@angular/core/testing';

import { LoginAlertService } from './login-alert.service';

describe('LoginAlertService', () => {
  let service: LoginAlertService;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(LoginAlertService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
