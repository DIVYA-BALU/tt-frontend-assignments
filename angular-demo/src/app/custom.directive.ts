import { Directive, ElementRef } from '@angular/core';
 
@Directive({
  selector: '[appCustomDirective]'
})
 
export class CustomDirective {
  constructor(private el: ElementRef) {
  }
  ngOnInit(){
    this.el.nativeElement.style.backgroundColor = 'yellow';
  }
}
 