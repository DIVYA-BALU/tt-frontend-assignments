import { Injectable } from '@angular/core';
import { AsyncSubject, BehaviorSubject, ReplaySubject, Subject } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class SampleServiceService {

  behaviourSubject = new BehaviorSubject<any>("Sample1");
  // behaviourData = this.behaviourSubject.asObservable();
  behaviourData = this.behaviourSubject;


  subject = new Subject<any>();
  subjectData = this.subject;


  replaySubject = new ReplaySubject<any>(2,5000);
  replayData = this.replaySubject;

  asyncSubject = new AsyncSubject<any>();
  asyncData = this.asyncSubject

  constructor() { }
}
