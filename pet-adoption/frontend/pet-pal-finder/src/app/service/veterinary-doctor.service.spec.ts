import { TestBed } from '@angular/core/testing';

import { VeterinaryDoctorService } from './veterinary-doctor.service';

describe('VeterinaryDoctorService', () => {
  let service: VeterinaryDoctorService;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(VeterinaryDoctorService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
