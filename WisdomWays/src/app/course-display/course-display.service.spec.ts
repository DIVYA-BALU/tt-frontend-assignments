import { TestBed } from '@angular/core/testing';

import { CourseDisplayService } from './course-display.service';

describe('CourseDisplayService', () => {
  let service: CourseDisplayService;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(CourseDisplayService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
