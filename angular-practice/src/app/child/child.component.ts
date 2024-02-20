import { Component, ContentChild, ElementRef, Input } from '@angular/core';

@Component({
  selector: 'app-child',
  templateUrl: './child.component.html',
  styleUrls: ['./child.component.scss'],
})
export class ChildComponent {
  @Input()
  value: string = '';

  someValue: string = "";

  @ContentChild('progection') paragraph!: ElementRef;

  ngOnInit() {
    console.log('child init');
  }

  ngOnChanges() {
    console.log('ngOnChanges');
  }

  ngAfterContentInit() {
    if (this.paragraph) {
      this.paragraph.nativeElement.style.fontSize = '30px';
    }
    console.log('contentInit');
  }

  ngAfterContentChecked(){
    this.paragraph.nativeElement.style.backgroundColor = 'red';
    console.log(true);    
  }

  ngAfterViewInit() {
    console.log('ChildComponent ngAfterViewInit');
  }

  ngOnDestroy() {
    console.log('destroyed');
  }
}
