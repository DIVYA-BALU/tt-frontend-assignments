import { Component } from '@angular/core';
import { filterClass } from '../custom-folder/custom.filter';

@Component({
  selector: 'app-second',
  templateUrl: './custom.component.html',
  styleUrls: ['./custom.component.sass']
})
export class CustomComponent {
  inpVal = '';
  filterArr1: string[] = [
    "sachin",
    "dhoni",
    "virat",
    "pradeep",
    "brawo",
    "kholi",
    "ashwin",
    "yuvaraj",
    "jadeja"
  ];

}
