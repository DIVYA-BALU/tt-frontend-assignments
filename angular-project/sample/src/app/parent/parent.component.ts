import { Component } from '@angular/core';

@Component({
  selector: 'app-parent', 
  templateUrl: './parent.component.html',
  styleUrls: ['./parent.component.scss']
})
export class ParentComponent {
  child: boolean = false;
  value : string = ''

  constructor(){
    console.log("parent constructor");
    
  }

  ngOnchanges() {
    console.log("parent Onchanges");
    
  }

  ngOnInit (){
    console.log("parent Init");
    
  }

  ngDoCheck(){
    console.log("parent Docheck");
  }

  toggleChild(){
    this.child = !this.child;
  }
}
