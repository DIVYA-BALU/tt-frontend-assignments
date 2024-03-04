import { ComponentFixture, TestBed } from '@angular/core/testing';

import { PetPostComponent } from './pet-post.component';

describe('PetPostComponent', () => {
  let component: PetPostComponent;
  let fixture: ComponentFixture<PetPostComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [ PetPostComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(PetPostComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
