import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class CommonService {

  constructor() { }

  editableData : any;

  setData(data: any){
    this.editableData = data;
  }

  getData(){
    return this.editableData;
  }
}
