import { Component, EventEmitter, Input, Output } from '@angular/core';
import { ParentComponent } from '../parent/parent.component';

@Component({
  selector: 'app-child',
  templateUrl: './child.component.html',
  styleUrls: ['./child.component.sass']
})
export class ChildComponent {
  @Input() parentComp: string = "";
  @Input() productsToLoad: { name: string; id: number; price: number; }[] = []

  val = 0
  @Output() childClickEvent = new EventEmitter<string>();
  
  ngOnInit(){  
    // this.childClickEvent.emit("Child Data");
    this.val++;
  }

  buttonClick() {
    this.childClickEvent.emit("Child Data Requested");
  }


}
