import { Pipe, PipeTransform } from '@angular/core';

@Pipe({
  name: 'customfilter'
})
export class CustomfilterPipe implements PipeTransform {

  transform(value: string, arg1: string, arg2: string): string {
    return arg1 + value + arg2;
  }

}
