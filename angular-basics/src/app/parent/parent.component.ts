import { Component } from '@angular/core';
import * as _ from 'lodash';
import * as __ from 'underscore';
import * as moment from 'moment';


@Component({
  selector: 'app-parent',
  templateUrl: './parent.component.html',
  styleUrls: ['./parent.component.sass'],
})
export class ParentComponent {
  time:number;
  now:string = "";

  timer = () => {
    this.now = moment().format('LTS');
    console.log(this.now)
  }

  clearTime():void {
    console.log("interval cleared");
    
    window.clearInterval(this.time);
  }

  getRandomInt(max: number) {
    return Math.floor(Math.random() * max);
  }
  parent: string = "Parent Component";
  products = [
    { name: 'Rice', id: 1, price: 200 },
    { name: 'Beans', id: 2, price: 300 },
    { name: 'Bananna', id: 3, price: 400 },
  ];

  childVal: string = "";

  count:number = 0;

  switchCaseArray: string[] = ["Red","Blue","Green","Yellow"];
  switchCaseVal: string = this.switchCaseArray[this.getRandomInt(this.switchCaseArray.length)]
  
  getFunction(value: string): void {
    this.childVal = value;
    console.log("Triggered " + value);
  }

  // filter
  // currency
  currencyVar = 20;

  // date
  dateVar = 20031001;

  // filter
  filterArr1 = [
    "Sai",
    "Varun",
    "Abhi",
    "Guru",
    "Pradish"
  ];

  // json
  jsonArr1 = [
    "Sai",
    "Varun",
    "Abhi",
    "Guru",
    "Pradish"
  ];

  // limit
  limitArr1 = [
    "Sai",
    "Varun",
    "Abhi",
    "Guru",
    "Pradish"
  ];

  // uppercase
  upperCaseVar = "sai";

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


  ld: number = _.mean([4, 2, 8, 6]);

  evens:number[] = __.filter([1, 2, 3, 4, 5, 6], function(num){ return num % 2 == 0; });

  constructor(){
    // works
    // this.time = setInterval(() => {
    //   this.now = moment().format('LTS');
    // },1000);
    
    // works
    this.time = setInterval(this.timer,1000);
    this.now = moment().format('LTS');
  }

  onDestroy(){
    clearInterval(this.time)
  }
}


