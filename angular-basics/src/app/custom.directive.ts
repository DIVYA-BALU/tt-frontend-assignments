import {Directive, ElementRef} from '@angular/core';

@Directive({
  selector: '[appHighlight]',
})
export class CustomDirective {

  constructor(private el: ElementRef) {}

  ngOnInit(): void {
    this.el.nativeElement.style.backgroundColor = 'grey';
    this.el.nativeElement.innerText = this.el.nativeElement.innerText.toUpperCase();
  }
}