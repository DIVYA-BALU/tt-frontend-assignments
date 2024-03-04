import { Pipe, PipeTransform } from '@angular/core';

@Pipe({
  name: 'dateConverter',
  standalone:true
})
export class DateConverterPipe implements PipeTransform {

  transform(value: Date): Date {
    return new Date(value);
  }

}
