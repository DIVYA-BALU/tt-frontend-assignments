import { Component } from '@angular/core';
import * as _ from 'lodash';

@Component({
  selector: 'app-first',
  templateUrl: './first.component.html',
  styleUrls: ['./first.component.css']
})
export class FirstComponent {
  filterArr: string[] = [
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

  // lodash
  myItem: object = { "name": "udhaya", "age": 12 };
  clonedItem: any = _.clone(this.myItem);

  splitArr: any = _.chunk(this.filterArr, 3);

  compact: any[] = [0, 1, false, 2, '', 3];
  newCompact = _.compact(this.compact);

  concat: number[] = [1];
  newConcat: number[] = _.concat(this.concat, 2, [3], [4, 5]);


}
