import { ComponentFixture, TestBed } from '@angular/core/testing';

import { SectionDialogFormComponent } from './section-dialog-form.component';

describe('SectionDialogFormComponent', () => {
  let component: SectionDialogFormComponent;
  let fixture: ComponentFixture<SectionDialogFormComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ SectionDialogFormComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(SectionDialogFormComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
