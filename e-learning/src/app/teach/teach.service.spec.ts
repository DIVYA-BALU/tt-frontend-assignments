import { TestBed } from '@angular/core/testing';

import { TeachService } from './teach.service';

describe('TeachService', () => {
  let service: TeachService;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(TeachService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
