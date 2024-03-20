import { ComponentFixture, TestBed } from '@angular/core/testing';

import { ContentDialogDataComponent } from './content-dialog-data.component';

describe('ContentDialogDataComponent', () => {
  let component: ContentDialogDataComponent;
  let fixture: ComponentFixture<ContentDialogDataComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ ContentDialogDataComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(ContentDialogDataComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
