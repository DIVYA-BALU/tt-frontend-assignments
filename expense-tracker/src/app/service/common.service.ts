import { Injectable } from '@angular/core';
import { BehaviorSubject, Observable } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class CommonService {

  // editableData: any;
  
  private behaviourSubject = new BehaviorSubject<Object>({});
  // public editableData = this.behaviourSubject.asObservable();

  constructor() { }

  setData(data: Object){
    this.behaviourSubject.next(data);
  }

  getData(){
    return this.behaviourSubject;
  }

  private searchBarValue = new BehaviorSubject<string>('');

  setSearchBarData(value : string){
    this.searchBarValue.next(value);
  }
}
