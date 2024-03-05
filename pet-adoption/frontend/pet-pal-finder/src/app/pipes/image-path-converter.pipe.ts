import { Pipe, PipeTransform } from '@angular/core';

@Pipe({
  name: 'imagePathConverter',
  standalone:true
})
export class ImagePathConverterPipe implements PipeTransform {

  transform(value: string,): string {
    if(value === '' || value === null){
      console.log("pipe");
      
      return '/assets/profile.png'
    }
    return value;
  }

}
