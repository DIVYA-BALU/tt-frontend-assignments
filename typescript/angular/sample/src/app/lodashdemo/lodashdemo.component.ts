import { Component } from '@angular/core';
import * as _ from 'lodash';
import * as moment from 'moment';

@Component({
  selector: 'app-lodashdemo',
  templateUrl: './lodashdemo.component.html',
  styleUrls: ['./lodashdemo.component.scss']
})
export class LodashdemoComponent {

  constructor() { 
    console.log(_.chunk(['a', 'b', 'c', 'd'], 2));

    //Creates an array with all falsey values removed. The values false, null, 0, "", undefined, and NaN are falsey.
    console.log(_.compact([0, 1, false, 2, '', 3]));

    //Creates a slice of array with n elements dropped from the beginning.
    console.log(_.drop([1, 2, 3]));
    _.drop([1, 2, 3], 2);
    // => [3]
    
    _.drop([1, 2, 3], 5);
    // => []
    
    _.drop([1, 2, 3], 0);
    // => [1, 2, 3]

    //Creates a slice of array with n elements dropped from the end.
    console.log(_.dropRight([1, 2, 3]));

    //Fills elements of array with value from start up to, but not including, end.
    console.log(_.fill([4, 6, 8, 10], '*', 1, 3));

    const todayDate = moment().format('M/D/YYYY');
    console.log(todayDate);

    const currentDate = moment().format('MMMM Do YYYY, h:mm:ss a');
    console.log(currentDate);

    console.log(moment().format('dddd'));   

  }



}
