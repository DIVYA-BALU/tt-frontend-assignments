import { ComponentFixture, TestBed } from '@angular/core/testing';

import { ProductsBillingComponent } from './products-billing.component';

describe('ProductsBillingComponent', () => {
  let component: ProductsBillingComponent;
  let fixture: ComponentFixture<ProductsBillingComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ ProductsBillingComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(ProductsBillingComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
