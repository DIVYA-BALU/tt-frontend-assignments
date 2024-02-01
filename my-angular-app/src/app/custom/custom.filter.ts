import { Pipe, PipeTransform } from "@angular/core";

@Pipe({
    standalone: true,
    name: "filter1"
})
export class filterClass implements PipeTransform {
    transform(val1: string, val2: string): string {
        if (val1.includes(val2))
            return val1;
        return "";
    }
}