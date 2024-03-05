import { Component, ElementRef, ViewChild } from '@angular/core';
import { ChildComponent } from './child/child.component';

@Component({
  selector: 'app-parent',
  templateUrl: './parent.component.html',
  styleUrls: ['./parent.component.scss'],
})
export class ParentComponent {
  val: string = '';
  display: boolean = false;

  @ViewChild('para') paragraph!: ElementRef<HTMLParagraphElement>;
  @ViewChild('button') button!: ElementRef<HTMLButtonElement>;

  constructor() {
    console.log('constructor');
  }

  ngOnInit() {
    console.log('ngOnInit');
  }

  ngDoCheck() {
    console.log('docheck');
  }

  ngAfterContentInit() {
    console.log('parent contentInit');
  }

  ngAfterViewInit() {
    if (this.paragraph) {
      console.log(this.paragraph);    
    }
    if (this.button) {
      console.log(this.button.nativeElement.id);    
    }
  }

  toggled() {
    this.display = !this.display;
  }
}
