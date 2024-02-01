import { Component, OnInit } from '@angular/core';
import { SampleService } from '../sample.service';
import { sample } from '../sample.interface'; // Import the Comment interface

@Component({
  selector: 'app-sample-list',
  templateUrl: './sample-list.component.html',
  styleUrls: ['./sample-list.component.sass']
})
export class SampleListComponent implements OnInit{
  sample: sample[] = [];

  constructor(private sampleService: SampleService) {}

  ngOnInit(): void {
    this.sampleService.getComments().subscribe((sample) => {
      this.sample = sample;
    });
  }
}
