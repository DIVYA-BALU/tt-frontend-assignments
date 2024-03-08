import { ComponentFixture, TestBed } from '@angular/core/testing';

import { VotingHistoryComponent } from './voting-history.component';

describe('VotingHistoryComponent', () => {
  let component: VotingHistoryComponent;
  let fixture: ComponentFixture<VotingHistoryComponent>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      declarations: [VotingHistoryComponent]
    });
    fixture = TestBed.createComponent(VotingHistoryComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
