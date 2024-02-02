import { Component, EventEmitter, Input, Output } from '@angular/core';

@Component({
  selector: 'app-child-component',
  templateUrl: './child-component.component.html',
  styleUrls: ['./child-component.component.scss']
})
export class ChildComponentComponent {

  @Input() name: string = "";
  @Input() fruits: string[] = [];

  @Output() eventItem = new EventEmitter<string>();

  buttonClick(){
    this.eventItem.emit("child data emitted");
  }

}
