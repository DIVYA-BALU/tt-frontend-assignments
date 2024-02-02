import { TestBed } from '@angular/core/testing';
 import { DisplayjsonService } from './displayjson.service';

describe('DisplayjsonService', () => {
  let service: DisplayjsonService;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(DisplayjsonService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
