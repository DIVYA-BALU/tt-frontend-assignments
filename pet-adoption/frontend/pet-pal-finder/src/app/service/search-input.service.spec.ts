import { TestBed } from '@angular/core/testing';

import { SearchInputService } from './search-input.service';

describe('SearchInputService', () => {
  let service: SearchInputService;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(SearchInputService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
