import { Component,Input } from '@angular/core';
import { Output, EventEmitter } from '@angular/core';


@Component({
  selector: 'app-child-component',
  templateUrl: './child-component.component.html',
  styleUrls: ['./child-component.component.css']
})
export class ChildComponentComponent {
  @Input() item = '';
  
  @Output() newItemEvent = new EventEmitter<string>();

  // ngOnInit(){
  //   this.newItemEvent.emit("data transfer from child to parent component");
  // }

  buttonClick(){
    this.newItemEvent.emit("Button clicked");
  }

  @Input() childVar1 = '';

  @Input() childVar2 : number = 0;

  @Input() childVar3 : string = '';
}
