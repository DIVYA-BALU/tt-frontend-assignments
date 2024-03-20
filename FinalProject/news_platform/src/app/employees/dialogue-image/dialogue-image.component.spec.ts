import { ComponentFixture, TestBed } from '@angular/core/testing';

import { DialogueImageComponent } from './dialogue-image.component';

describe('DialogueImageComponent', () => {
  let component: DialogueImageComponent;
  let fixture: ComponentFixture<DialogueImageComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ DialogueImageComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(DialogueImageComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
