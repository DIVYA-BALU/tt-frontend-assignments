import { Component } from '@angular/core';

@Component({
  selector: 'app-select',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.sass']
})
export class AppComponent {
  title = 'my-angular-app';
  constructor() {
    console.log(2);


    // let big1: BigInt = BigInt(4003846284914791);
    // let big2: bigint = 4003834584914791n;
    // console.log(typeof big1);

    // const nameAgeMap: { [index: string]: number, [index: number]: number, [index: symbol]: number } = {};
    // nameAgeMap.udhay = 12;
    // nameAgeMap.bala = 24;
    // // nameAgeMap.sym1 = 24;

    // nameAgeMap['1'] = 25;

    // console.log(nameAgeMap);
    // function add(a: number, b: number, ...rest: number[]) {
    //   return a + b + rest.reduce((prev, curr, ind, arr) => {
    //     console.log(prev, curr, ind, arr);

    //     return prev;
    //   });
    // }
    // add(1, 3, 4, 5,);

    //reduce
    // const numbers: number[] = [1, 67, 9, 5, 3, 3, 9, 1, 4, 98, 47]
    // const total: number = numbers.reduce((accu, curr, ind, arr) => {
    //   console.log(accu, curr, ind, arr);
    //   if (curr % 2 === 0) {
    //     return accu + curr;
    //   }
    //   else {
    //     return accu;
    //   }
    // }, 0)
    // console.log(total);

    //promise
    let myPromise = new Promise<void>(function (myResolve, myReject) {
      // "Producing Code" (May take some time)

      myResolve(); // when successful
      myReject();  // when error
    });

    // "Consuming Code" (Must wait for a fulfilled Promise)
    myPromise.then(
      function (value) { /* code if successful */ },
      function (error) { /* code if some error */ }
    );
  }
}
