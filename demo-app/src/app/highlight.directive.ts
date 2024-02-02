import { Directive, ElementRef, HostListener, Input } from '@angular/core';

@Directive({
  selector: '[appHighlight]'
})
export class HighlightDirective {

  constructor(private element: ElementRef) {
    this.element.nativeElement.style.color = "purple";
  }

  @HostListener('mouseenter') mouseEnter() {
    this.highlight('yellow');
  }

  @HostListener('mouseleave') mouseLeave() {
    this.highlight('');
  }

  highlight(value: string) {
    this.element.nativeElement.style.backgroundColor = value;
  }

}
