import { ComponentFixture, TestBed } from '@angular/core/testing';

import { RejectedArticleComponent } from './rejected-article.component';

describe('RejectedArticleComponent', () => {
  let component: RejectedArticleComponent;
  let fixture: ComponentFixture<RejectedArticleComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ RejectedArticleComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(RejectedArticleComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
