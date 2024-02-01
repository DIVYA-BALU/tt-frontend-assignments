import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class MyService {
  public newArr: string[] = [];

  getArr(): string[] {
    return this.newArr;
  }

  addArr(val: string) {
    this.newArr.push(val);
  }
}
