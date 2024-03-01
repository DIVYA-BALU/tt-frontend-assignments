import { ComponentFixture, TestBed } from '@angular/core/testing';

import { ProductDialogFormComponent } from './product-dialog-form.component';

describe('ProductDialogFormComponent', () => {
  let component: ProductDialogFormComponent;
  let fixture: ComponentFixture<ProductDialogFormComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ ProductDialogFormComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(ProductDialogFormComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
