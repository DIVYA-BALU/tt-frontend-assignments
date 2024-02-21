import { Component } from '@angular/core';
import { ChildComponent } from '../child/child.component';
import { Observable, Subject, filter, from, interval, map, of } from 'rxjs';

@Component({
  selector: 'app-admin',
  templateUrl: './admin.component.html',
  styleUrls: ['./admin.component.sass']
})
export class AdminComponent {
  isDisabled=true;
  component:any='';
isActive=true;
hasError=true;
isPrimary=true;

subject=new Subject<number>();
values: number[] = [];

toggle() {
this.component=this.component===ChildComponent?null:ChildComponent;
}

constructor(){
  console.log("parent cons");
  
}
ngOnInit(){

  console.log("parent Oninit");

  // const observable=of(1,2,3,4,5);
  const observable=from([1,2,3,4,5]);
  observable.subscribe({next:(data)=>{
// console.log(data);
  }})

  observable.pipe(
    filter(value => value % 2 === 0),
    map(value => value * 2)
  ).subscribe(result => {
    // console.log(result)
  }
    );

    const observable1: Observable<number> = interval(500);
    // observable1.subscribe(value => this.values.push(value)); 

}
parentValue='';
isChild=true;

getMessage(msg:any){
this.parentValue=msg;
}
getChild(){
  this.isChild=!this.isChild;
}

}
