import { Component } from '@angular/core';
import { SampleServiceService } from '../sample-service.service';
import {  Subscription } from 'rxjs';
import { any } from 'underscore';

@Component({
  selector: 'app-sample',
  templateUrl: './sample.component.html',
  styleUrls: ['./sample.component.sass']
})
export class SampleComponent {

  subscribeDataFromInstance: Subscription | null = null;

  constructor(private sampleService:SampleServiceService) {}

  buttonClick() {
    // this.sampleService.behaviourData.next("Sample2");
    // this.sampleService.subjectData.next("Sample SubjectData");
    // this.sampleService.replayData.next("Data 1");
    // this.sampleService.replayData.next("Data 2");
    // this.sampleService.replayData.next("Data 3");
    // this.sampleService.replayData.next("Data 4");
    // this.sampleService.replayData.next("Data 5");

    this.sampleService.asyncData.next("Data 1");
    this.sampleService.asyncData.next("Data 2");
    this.sampleService.asyncData.next("Data 3");
    this.sampleService.asyncData.next("Data 4");
    this.sampleService.asyncData.next("Data 5");
    this.sampleService.asyncData.complete();
  }

  ngOnInit() {
    // this.sampleService.behaviourSubject.subscribe({
    //   next: (response) => {
    //     // console.log("Sample 1 Component ", response);       
    //   }
    // })

    // this.sampleService.subject.subscribe({
    //   next: (response) => {
    //     console.log("Sample 1 Component ", response);       
    //   }
    // })

    // this.subscribeDataFromInstance = this.sampleService.replaySubject.subscribe({
    //   next: (response) => {
    //     console.log("Sample 1 Component ", response);       
    //   }
    // })

    this.subscribeDataFromInstance = this.sampleService.asyncSubject.subscribe({
      next: (response) => {
        console.log("Sample 1 Component ", response);       
      }
    })
  }

  ngOnDestroy() {
    this.subscribeDataFromInstance!.unsubscribe(); 
  }
}
