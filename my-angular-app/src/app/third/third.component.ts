import { Component } from '@angular/core';
import * as _ from 'lodash';

@Component({
  selector: 'app-third',
  templateUrl: './third.component.html',
  styleUrls: ['./third.component.sass']
})
export class ThirdComponent {
  concat: number[] = [1];
  newConcat: number[] = _.concat(this.concat, 2, [3], [4, 5]);
  sub: number[] = [2, 3, 5, 6, 7];
  diff: number[] = _.difference(this.newConcat, this.sub);

}
