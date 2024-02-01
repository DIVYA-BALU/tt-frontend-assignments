import { Component, Input, Output, EventEmitter, OnInit } from '@angular/core';

@Component({
  selector: 'app-child',
  templateUrl: './child.component.html',
  styleUrls: ['./child.component.sass']
})
export class ChildComponent {
  @Input() item: string = '';
  @Output() childClickEvent = new EventEmitter<string>();
  @Output() childClickEvent1 = new EventEmitter<string>();

  ngOnInit(): void {
    this.childClickEvent.emit("message from child");
  }
  buttonClick(): void {
    this.childClickEvent1.emit("button clicked");
  }

}
