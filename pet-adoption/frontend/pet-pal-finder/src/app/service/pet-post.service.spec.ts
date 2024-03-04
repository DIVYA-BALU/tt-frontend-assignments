import { TestBed } from '@angular/core/testing';

import { PetPostService } from './pet-post.service';

describe('PetPostService', () => {
  let service: PetPostService;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(PetPostService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
