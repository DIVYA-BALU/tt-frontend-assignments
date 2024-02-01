// //map and filter
// function checkPrime(num) {
//     return num * 2;
// }

// const newArray = [1, 334, 546, 78, 76, 83, 26, 45, 67, 345];
// // const modifiedArray = newArray.map(checkPrime);
// const modifiedArray = newArray.filter(checkPrime);
// console.log(modifiedArray);


// function getFullName(item) {
//     return item.firstname + " " + item.lastname;
// }
// const persons = [
//     { firstname: "Malcom", lastname: "Reynolds" },
//     { firstname: "Kaylee", lastname: "Frye" },
//     { firstname: "Jayne", lastname: "Cobb" }
// ];
// console.log(persons.map(getFullName));

// //find
// function checkAge(age) {
//     return age > 18;
// }
// const ages = [3, 100, 18, 20, 22, 17];
// console.log(ages.find(checkAge));

// //reduce
// const numbers = [175, 50, 25];
// console.log(numbers.reduce(myFunc));

// function myFunc(total, num) {
//     console.log("total:" + total + "num:" + num);
//     return total - num;
// }



//promise

// let promise = new Promise(function (myResolve, myReject) {
//     const val = 13;
//     if (val % 2 === 0)
//         myResolve();
//     else// when successful
//         myReject();  // when error
// });

// promise.then(
//     function (value) { console.log("code successful"); },
//     function (error) { console.log("code error"); }
// );




// let myPromise = new Promise(function (myResolve, myReject) {
//     setTimeout(function () { myResolve("code executed!"); }, 3000);
// });

// myPromise.then(function (value) {
//     console.log(value);
// });


// async function myFunction() {
//     return "Hello";
// }
// myFunction().then(
//     function (value) { console.log("value:", value); },
//     function (error) { console.log("error:", error); }
// );

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


function myDisplayer(some) {
    console.log("value:", some);
}

function myCalculator(num1, num2, myCallback) {
    let sum = num1 + num2;
    myCallback(sum);
}

myCalculator(5, 5, myDisplayer);