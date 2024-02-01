import { Component, Input } from '@angular/core';

@Component({
  selector: 'app-child',
  templateUrl: './child.component.html',
  styleUrls: ['./child.component.sass']
})
export class ChildComponent {
  @Input() childMessage: string="";
  message: string = "Hello There!";
  constructor() { }
}
