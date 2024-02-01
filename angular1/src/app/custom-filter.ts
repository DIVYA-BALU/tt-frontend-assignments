import { Pipe, PipeTransform } from "@angular/core";
 
@Pipe({
    name: "filter1"
})
export class filterClass1 implements PipeTransform {
    transform(val1: string, val2: string): string {
        if (val1.includes(val2))
            return val1;
        return "";
    }
}