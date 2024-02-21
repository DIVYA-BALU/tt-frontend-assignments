import { Directive, HostListener } from '@angular/core';

@Directive({
  selector: '[appMouse]'
})
export class MouseDirective {

  constructor() { }
  @HostListener('mouseenter') onMouseEnter() {
    console.log('Mouse entered');
    this.doSomething();
  }

  @HostListener('mouseleave') onMouseLeave() {
    console.log('Mouse left');
  }

  @HostListener('click') onMouseClick() {
    console.log('Mouse Clicked');
  }

  private doSomething() {
    console.log(this);
  //  this.elementRef.nativeElement.style.backgroundColor = 'red';
  }

}
