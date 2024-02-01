import { Component } from '@angular/core';
import * as _ from 'lodash';

@Component({
  selector: 'app-lodash-different-example',
  templateUrl: './lodash-different-example.component.html',
  styleUrls: ['./lodash-different-example.component.sass']
})
export class LodashDifferentExampleComponent {

  sub1 = [2, 8, 5, 6, 7];
  sub2 = [2, 3, 5, 6, 7];
  diff = _.difference(this.sub1,this.sub2);
}
