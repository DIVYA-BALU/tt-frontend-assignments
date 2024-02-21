import { Component, Input, Output, EventEmitter, OnInit, SimpleChange, ContentChildren, ContentChild, ViewChild } from '@angular/core';
import { Validators } from '@angular/forms';
import { timeInterval } from 'rxjs';

@Component({
  selector: 'app-child',
  templateUrl: './child.component.html',
  styleUrls: ['./child.component.sass']
})
export class ChildComponent {
  @Input() item: string = '';
  @Output() childClickEvent = new EventEmitter<string>();
  @ContentChild('head') projection:any;
  @ViewChild('child') child:any;

  constructor(){
    console.log("child cons");
  }

  counter:number=0;
  time!:any;

  ngOnInit(): void {
    console.log("child Oninit");
    console.log(this.projection);

    //  this.time=setInterval(()=>{
    //   this.counter=this.counter+1;
    //   console.log(this.counter);
    // },1000);

  }

  ngOnChanges(changes:SimpleChange){
    console.log(changes);
    console.log("child ngOnChange:",this.item);
  }

  ngDoCheck(){
    console.log("child Docheck");
  }
  
  ngAfterContentInit(){
    console.log("child after content init");
    console.log(this.projection);
    console.log(this.child);
  
  }

  ngAfterContentChecked(){
    console.log("child after content checked");
    console.log(this.child);

  }

  ngAfterViewInit(){
    console.log("child ngAfterViewInit");
    console.log(this.child);

  }

  ngAfterViewChecked(){
    console.log("child ngAfterViewChecked");
    console.log(this.child);
    console.warn();

  }

  emitter(e:any): void {
    this.childClickEvent.emit(e.target.value);
  }

  ngOnDestroy(){
    clearInterval(this.time);
    console.log("child destroy");
    
  }
}
