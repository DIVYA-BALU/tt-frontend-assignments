import { Pipe, PipeTransform } from '@angular/core';

@Pipe({
  standalone: true,
  name: 'multipleOfNumber'
})
export class CustomPipe implements PipeTransform {
  transform(value: number, multiplier = 1): number {
    return value * multiplier;
  }
}