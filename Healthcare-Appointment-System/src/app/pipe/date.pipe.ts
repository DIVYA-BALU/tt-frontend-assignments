import { Pipe, PipeTransform } from '@angular/core';

@Pipe({
    name: 'toDate',
    standalone: true
})
export class datePipe implements PipeTransform {
    transform(value: string): Date {
        return new Date(value);
    }
}