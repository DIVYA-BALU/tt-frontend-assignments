import { Component } from '@angular/core';
import * as _ from 'lodash';
import * as moment from 'moment';

@Component({
  selector: 'app-lodash-example',
  templateUrl: './lodash-example.component.html',
  styleUrls: ['./lodash-example.component.scss']
})
export class LodashExampleComponent {

  constructor() {
    console.log(_.chunk(['a', 'b', 'c', 'd'], 2));
    console.log(_.compact([0, 1, false, 2, '', 3]));
    console.log(_.concat([1], 2, [3], 4));

    console.log(_.drop([1, 2, 3]));
    console.log(_.drop([1, 2, 3], 2));
    console.log(_.drop([1, 2, 3], 0));
    console.log(_.drop([1, 2, 3], 5));

    console.log(_.reverse([1, 2, 3]));

    console.log(moment().format('MMMM Do YYYY, h:mm:ss a'));
    console.log(moment().format('dddd'));
    console.log(moment().format("MMM Do YY"));
    
  }

}
