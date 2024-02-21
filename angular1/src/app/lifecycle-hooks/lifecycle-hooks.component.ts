import { Component } from '@angular/core';

@Component({
  selector: 'app-lifecycle-hooks',
  templateUrl: './lifecycle-hooks.component.html',
  styleUrls: ['./lifecycle-hooks.component.css']
})
export class LifecycleHooksComponent {
  constructor(){
    console.log("constructor");
  }
  ngOnInit() : void{
    console.log("ngOnInit");
  }
  ngOnChanges()	: void {
    console.log("ngOnChange");
  }
  
  var1 : string = '';
}
