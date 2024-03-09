import { TestBed } from '@angular/core/testing';
import { CommonService } from './common-service.service';



describe('SportsService', () => {
  let service: CommonService;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(CommonService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
