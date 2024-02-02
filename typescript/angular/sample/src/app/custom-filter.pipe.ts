import { Pipe, PipeTransform } from '@angular/core';

@Pipe({
  name: 'customFilter'
})
export class CustomFilterPipe implements PipeTransform {

  transform(value: string, arg1: string, arg2: string ): unknown {
    return value + ' ' + arg1 + ' ' + arg2;
  }

  

}
