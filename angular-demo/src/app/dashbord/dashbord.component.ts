import { Component } from '@angular/core';

@Component({
  selector: 'app-dashbord',
  templateUrl: './dashbord.component.html',
  styleUrls: ['./dashbord.component.sass']
})
export class DashbordComponent {

  
  title = 'angular-demo';
  name: string = "";
  message:string = "";
  firstName:string = "";
  count:number = 0;
  onloadcount(){
    console.log('flower')
    this.count=this.count+1;
  }
  items = [
    {name:"ramu",age:17,voted:"flower"},
    {name:"somu",age:21,voted:"sun"},
    {name:"raju",age:16,voted:"leaf"},
    {name:"ram",age:23,voted:"hand"},
  ];
  currentItem:{name:string} = {
    name: 'ramu',
  };

  // filter
  // currency
  currencyVar:number = 20;

  // date
  dateVar:number = 1000*60*60*24*365*54;

  // filter
  filterArr1:string[] = [
    "Sachin",
    "Dhoni",
    "Virat",
    "Pradeep",
    "Brawo"
  ];

  // json
  jsonArr1:string[] = [
    "Sachin",
    "Dhoni",
    "Virat",
    "Pradeep",
    "Brawo"
  ];

  // limit
  limitArr1:string[] = [
    "Sachin",
    "Dhoni",
    "Virat",
    "Pradeep",
    "Brawo"
  ];

  // uppercase
  upperCaseVar:string = "sbdjvds";

  // fraction size
  fractionVar:number = 3466532;

  // order by
  orderByVar:{name:string,phone:string,age:number}[] = [
    {name: 'John',   phone: '555-1212',  age: 10},
    {name: 'Mary',   phone: '555-9876',  age: 19},
    {name: 'Mike',   phone: '555-4321',  age: 21},
    {name: 'Adam',   phone: '555-5678',  age: 35},
    {name: 'Julie',  phone: '555-8765',  age: 29}
  ];

  setUppercaseName(value: string) {
    this.currentItem.name = value.toUpperCase();
    console.log(this.currentItem.name);
  }

  

  // ngAfterViewInit() {
  //   this.message = this.child.message;
  // }
  // ngOnInit():void{
  //   // setTimeout(() => {
  //   //   console.log(10);
  //   //   setTimeout(() => {
  //   //     console.log(20);
  //   //     setTimeout(() => {
  //   //       console.log(30);
          
  //   //     },1000)
  //   //   },1000)
  //   // },1000)

  //   const promis1 = new Promise((resolve, reject) => {
  //     setTimeout(() => {
  //       Math.floor(Math.random() * 2) === 1 ? resolve('Success1') : reject('Failure1');
  //     },500)
  //   })
  //   const promis2 = new Promise((resolve, reject) => {
  //     setTimeout(() => {
  //       Math.floor(Math.random() * 2) === 1 ? resolve('Success2') : reject('Failure2');
  //     },500)
  //   })
  //   const promis3 = new Promise((resolve, reject) => {
  //     setTimeout(() => {
  //       Math.floor(Math.random() * 2) === 1 ? resolve('Success3') : reject('Failure3');
  //     },500)
  //   })

  //   promis1.then((data) => {
  //     console.log(data);
  //     return promis2;
  //   })
  //   .then((data) => {
  //     console.log(data);
  //     return promis3;
  //   })
  //   .then((data) => {
  //     console.log(data);
  //   })
  //   .catch((data) => {
  //     console.log(data);
  //   })
  // }
}
