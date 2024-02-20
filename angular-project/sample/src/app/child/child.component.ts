import { Component, ContentChild, Input, SimpleChange, ViewChild } from '@angular/core';

@Component({
  selector: 'app-child',
  templateUrl: './child.component.html',
  styleUrls: ['./child.component.scss']
})
export class ChildComponent {
  counter:number = 0;
  timeInterval:any;

  @Input()
  value:string = '';

  @ContentChild('childContent', {static:true}) projectedContent: any;
  @ViewChild('childContent', {static:true}) childContent:any

  constructor(){
    console.log("child constructor");
    
  }

  ngOnChanges(change: SimpleChange) {
    // console.log(change);
    
    console.log("child Onchanges");
    console.log("childOnchanges......"+this.projectedContent);
    console.log("childOnchanges......"+this.childContent);
    
    
  }
  ngOnInit (){
    console.log("child Init");
    console.log("OnInit......"+this.projectedContent);
    console.log("OnInit......"+this.childContent);
    // this.timeInterval = setInterval(() => {
    //   console.log(this.counter++);
      
    // },1000)
    
  }
  ngDoCheck(){
    console.log("child Docheck");
    console.log("OnDoCheck......"+this.projectedContent);
    console.log("OnDoCheck......"+this.childContent);
    
  }

  ngAfterContentInit() {
    console.log("child AfterContentInit");
    console.log("AfterContentInit......"+this.projectedContent);
    console.log("AfterContentInit......"+this.childContent);
    
  }

  ngAfterContentChecked() {
    console.log("child AfterContentChecked");
    console.log("child AfterContentChecked....."+this.childContent);

  }

  ngAfterViewInit() {
    console.log("child AfterViewInit");
    console.log("child AfterViewInit......"+this.childContent);
    
  }

  ngAfterViewChecked() {
    console.log("child AfterViewChecked");
    console.log("child AfterViewChecked....."+this.childContent);
    
  }
  ngOnDestroy() {
    // clearInterval(this.timeInterval)
    console.log("child destroyed");
    
  }
}
