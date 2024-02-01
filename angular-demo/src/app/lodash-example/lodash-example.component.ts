import { Component } from '@angular/core';
import * as _ from 'lodash';

@Component({
  selector: 'app-lodash-example',
  templateUrl: './lodash-example.component.html',
  styleUrls: ['./lodash-example.component.sass']
})
export class LodashExampleComponent {
  filterArr1 = [
    "Sachin",
    "Dhoni",
    "Virat",
    "Pradeep",
    "Brawo"
  ];
  myItem = { "name": "udhaya", "age": 12 };
  clonedItem = _.clone(this.myItem);
 
  splitArr = _.chunk(this.filterArr1, 3);
 
  compact = [0, 1, false, 2, '', 3];
  newCompact = _.compact(this.compact);
 
  concat = [1];
  newConcat: any = _.concat(this.concat, 2, [3], [4, 5]);
 
  sub = [2, 3, 5, 6, 7];
  diff = _.difference(this.newConcat, this.sub);


}
