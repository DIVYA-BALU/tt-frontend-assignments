import { HighlightDirective } from './highlight.directive';
import { ElementRef } from '@angular/core';
describe('HighlightDirective', () => {
  it('should create an instance', () => {
    const directive = new HighlightDirective( new ElementRef(''));
    expect(directive).toBeTruthy();
  });
});
