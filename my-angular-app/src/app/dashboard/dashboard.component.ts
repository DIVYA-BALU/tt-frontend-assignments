import { Component } from '@angular/core';
import { MyService } from '../service/my-service.service';
import { ChildComponent } from '../child/child.component';
@Component({
  selector: 'app-dashboard',
  templateUrl: './dashboard.component.html',
  styleUrls: ['./dashboard.component.sass']
})
export class DashboardComponent {
  val: any = '';
  resultArr: string[] = [];
  constructor(public myService: MyService) {
  }
  addItem() {
    this.myService.addArr(this.val);
    this.val = '';
    this.resultArr = this.myService.getArr();
    // console.log("new:" + [this.myService.getArr()]);
    // console.log("result:" + [this.resultArr]);
  }


  currentItem: string = "Andriod";
  valueFromChild: string = '';
  valueFromChild1!: string;
  isSpecial: boolean = false;
  ngname: string = "your name";
  ngstyle = { 'font-style': true ? 'italic' : 'normal', 'color': 'red' };
  courses: string[] = ["java", "python", "html", "css"];
  item1: string = "c";
  items: string[] = ["udhaya", "kumar", "ramesh", "dhinesh", "vinith"];
  output: string = '';


  // limit
  limitArr1: string[] = [
    "sachin",
    "dhoni",
    "virat",
    "pradeep",
    "brawo"
  ];

  // uppercase
  upperCaseVar: string = "sbdjvds";

  // fraction size
  fractionVar: number = 3466532;

  // order by
  orderByVar = [
    { name: 'John', phone: '555-1212', age: 10 },
    { name: 'Mary', phone: '555-9876', age: 19 },
    { name: 'Mike', phone: '555-4321', age: 21 },
    { name: 'Adam', phone: '555-5678', age: 35 },
    { name: 'Julie', phone: '555-8765', age: 29 }
  ];


  // currency
  currencyVar = 20;

  // date
  dateVar = 20031001;

  // filter
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

  getFunction(value: string): void {
    this.valueFromChild1 = value;
    console.log(value);
  }

  getFunction1(value: string): boolean {
    this.valueFromChild1 = value;
    console.log(value);
    return true;
  }

  clickMethod(): void {
    this.output = "button clicked";
    console.log("12");

  }

  ngOnInit(): void {
    // this.myService.getArr().subscribe(() =>{
    // });

    // const promise1 = new Promise((resolve, reject) => {
    //   setTimeout(() => {
    //     resolve("success1");
    //   }, 500);

    // });
    // const promise2 = () => {
    //   return new Promise((resolve, reject) => {
    //     setTimeout(() => {
    //       resolve("success2");
    //     }, 500);

    //   });
    // }
    // const promise3 = () => {
    //   return new Promise((resolve, reject) => {
    //     setTimeout(() => {
    //       resolve("success3");
    //     }, 500);

    //   });
    // }
    // promise1.then((value) => {
    //   console.log(value);
    //   return promise2();
    // }).then((value) => {
    //   console.log(value);
    //   return promise3();
    // }).then((value) => {
    //   console.log(value);
    // }).catch((value) => {
    //   console.log(value);
    // });
  }

}
