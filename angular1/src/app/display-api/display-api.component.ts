import { Component } from '@angular/core';
import * as _ from 'lodash';

@Component({
  selector: 'app-display-api',
  templateUrl: './display-api.component.html',
  styleUrls: ['./display-api.component.css']
})

export class DisplayApiComponent {
  // transfer the data from parent component to child component
  currentItem = "Data from parent to child";

  // store the data from child component
  childValue : string = '';
  getFunction(value : string) : void{
    this.childValue=value;
  }

  // ng if
  variable1 : string = "if works"; 

  // ng for
  variable2 : number[] = [43,23,76,97];

  // switch
  variable3 : number = 10;
  variable4 = "Nathis";

  // ngStyle
  styles = {
    'font-style': true ? 'italic' : 'normal',
    'font-size' : '40px'
  }


  // ngModel
  name : string = '';

  currentItem2 = {
    name: 'nathis',
  };
  setUppercaseName(value: string) {
    this.currentItem2.name = value.toUpperCase();
  }




  // filter
  // currency
  currencyVar : number = 20;

  // date
  dateVar : number = 20031001;

  // filter
  filterArr1 : object = [
    "Sachin",
    "Dhoni",
    "Virat",
    "Pradeep",
    "Brawo"
  ];

  // json
  jsonArr1 : object= [
    "Sachin",
    "Dhoni",
    "Virat",
    "Pradeep",
    "Brawo"
  ];

  // limit
  limitArr1 = [
    "Sachin",
    "Dhoni",
    "Virat",
    "Pradeep",
    "Brawo"
  ];

  // uppercase
  upperCaseVar = "sbdjvds";

  // fraction size
  fractionVar = 3466532;

  // order by
  orderByVar = [
    {name: 'John',   phone: '555-1212',  age: 10},
    {name: 'Mary',   phone: '555-9876',  age: 19},
    {name: 'Mike',   phone: '555-4321',  age: 21},
    {name: 'Adam',   phone: '555-5678',  age: 35},
    {name: 'Julie',  phone: '555-8765',  age: 29}
  ];


  // custom filter

  inpVal : any = null;
  
  filterArr2 : string[] = [
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

  myItem = { "name": "nathis", "age": 20 };
  clonedItem = _.clone(this.myItem);
 
  filterArr3 : string[] = [
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
  splitArr = _.chunk(this.filterArr3, 3);
 
  compact : any[]= [0, 1, false, 2, '', 3,null,undefined];
  newCompact = _.compact(this.compact);
 
  concat = [1];
  newConcat: any = _.concat(this.concat, 2, [3], [4, 5]);
 
  sub = [2, 3, 5, 6, 7];
  diff = _.difference(this.newConcat, this.sub);

  index : number[]= [34,78,65,23,56,78,20,10];
  lastIndex = _.lastIndexOf(this.index,78,2);
}
