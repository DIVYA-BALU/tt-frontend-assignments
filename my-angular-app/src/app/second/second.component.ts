import { Component } from '@angular/core';
import { filterClass } from '../custom/custom.filter';

@Component({
  selector: 'app-second',
  templateUrl: './second.component.html',
  styleUrls: ['./second.component.sass']
})
export class SecondComponent {
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
