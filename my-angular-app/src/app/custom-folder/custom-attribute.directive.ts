import { Directive, ElementRef } from '@angular/core';
@Directive({
    standalone: true,
    selector: '[appHighlight]'
})
export class HighlightDirective {
    constructor(eleRef: ElementRef) {
        eleRef.nativeElement.style.background = 'blue';
    }
}
