import { Component } from '@angular/core';
import { SampleServiceService } from '../sample-service.service';
import { Subscription } from 'rxjs';

@Component({
  selector: 'app-sample2',
  templateUrl: './sample2.component.html',
  styleUrls: ['./sample2.component.sass']
})
export class Sample2Component {

  subscribeDataFromInstance: Subscription | null = null;

  constructor(private sampleService:SampleServiceService) {}

  ngOnInit() {
    // this.sampleService.behaviourSubject.subscribe({
    //   next: (response) => {
    //     // console.log("Sample 2 Component ", response);       
    //   }
    // })

    
    // this.sampleService.subject.subscribe({
    //   next: (response) => {
    //     console.log("Sample 2 Component ", response);       
    //   }
    // })

    // this.subscribeDataFromInstance = this.sampleService.replaySubject.subscribe({
    //   next: (response) => {
    //     console.log("Sample 2 Component ", response);       
    //   }
    // })

    this.subscribeDataFromInstance = this.sampleService.asyncSubject.subscribe({
      next: (response) => {
        console.log("Sample 2 Component ", response);       
      }
    })
  }

  ngOnDestroy() {
    this.subscribeDataFromInstance!.unsubscribe(); 
  }
}
