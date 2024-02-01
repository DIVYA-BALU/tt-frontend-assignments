import { Pipe, PipeTransform } from '@angular/core';

@Pipe({
  name: 'filter'
})
export class OrdinalPipe implements PipeTransform {
    // transform(value: string, val:number)
    // {{ | filter :1}}
    transform(value: string, key:string): string {

        if(value.includes(key)){
            return value
        }
        return "";
    }
}