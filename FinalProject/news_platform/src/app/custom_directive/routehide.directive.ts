import { Directive, Input, TemplateRef, ViewContainerRef } from '@angular/core';

@Directive({
  selector: '[appRoutehide]'
})
export class RoutehideDirective {

  constructor(private templateRef: TemplateRef<HTMLElement>, private viewContainer: ViewContainerRef) { }

  @Input() set appRoutehide(condition: boolean){
    
    if (condition) {
      this.viewContainer.createEmbeddedView(this.templateRef);
    }else {
      this.viewContainer.clear();
    }
  }

}
