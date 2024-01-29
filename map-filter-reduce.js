// map

// const arr = [23,65,23,68,10];
// const map = arr.map((x) => {
//     return x * 2;
// })
// console.log(map);



// const arr = [43,76,2,67];
// const map = arr.map(function(x){
//     return x*2;
// })
// console.log(map);



// const arr = [345,923,14,66];

// function mapFunction(x){
//     return x/3;
// }
// const map = arr.map(mapFunction);
// console.log(map);








// filer

// const arr = [34,65,23,68,10];

// const filter = arr.filter((x) => {
//     return x%2 === 0;
// })
// console.log(filter);




// const arr = [34,65,23,68,10];

// const filter = arr.filter(function(x){
//     return x%2 === 0;
// })
// console.log(filter);




// const arr = [34,23,65,19,50];

// function filterFunction(x){
//     return x%2 === 0;
// }

// const filter = arr.filter(filterFunction);
// console.log(filter);









// reduce

// const arr = [34,73,87,10];

// const reduce = arr.reduce((acc, curr) => {
//     acc += curr;
//     return acc;
// },(0));

// console.log(reduce);




// const arr = [34,73,87,10];

// const reduce = arr.reduce(function(acc, curr){
//     acc += curr;
//     return acc;
// },(0));

// console.log(reduce);





// if we don't specify the initial value for accumulator then it will take the first value in array

// const arr = [34,73,87,10];

// function reduceFunction(acc,curr){
//     return acc += curr;
// }

// const reduce = arr.reduce(reduceFunction);

// console.log(reduce);







// explicitly mentioning the accumulator value

// const arr = [34,73,87,10];

// function reduceFunction(acc,curr){
//     return acc += curr;
// }

// const reduce = arr.reduce(reduceFunction,10);

// console.log(reduce);





// find max element in the array using reduce function

// const arr = [34,73,87,10];

// function reduceFunction(acc, curr){
//     if(curr > acc){
//         acc = curr;
//     }
//     return acc;
// }

// const reduce = arr.reduce(reduceFunction,0);
// console.log(reduce);









// other examples

// to display full name         -       here we use map function

// const users = [{firstName: "akshay",lastName: "saini", age: 26},
//             {firstName: "donald" ,lastName: "trump", age: 75},
//             {firstName: "elon" ,lastName: "musk", age: 50 } ,
//             {firstName:"deepika" ,lastName: "padukone" ,age:26}
// ]

// function mapFunction(x){
//     return `${x.firstName} ${x.lastName}`
// }

// const map = users.map(mapFunction);
// console.log(map);






// to display the total count for particular age

// expected output : {26:2, 75:1, 50:1}

// we can use reduce function

// const users = [{firstName: "akshay",lastName: "saini", age: 26},
//             {firstName: "donald" ,lastName: "trump", age: 75},
//             {firstName: "elon" ,lastName: "musk", age: 50 } ,
//             {firstName:"deepika" ,lastName: "padukone" ,age:26}
// ]

// function reduceFunction(acc,curr){
//     if(acc[curr.age]){
//         acc[curr.age]++;
//     }
//     else{
//         acc[curr.age] = 1;
//     }
//     return acc;
// }

// const reduce = users.reduce(reduceFunction,{});

// console.log(reduce);






// return firstName if given user's age is less than 30

const users = [{firstName: "akshay",lastName: "saini", age: 26},
            {firstName: "donald" ,lastName: "trump", age: 75},
            {firstName: "elon" ,lastName: "musk", age: 50 } ,
            {firstName:"deepika" ,lastName: "padukone" ,age:26}
]

function filterFunction(x){
    if(x.age < 30){
        return x.firstName;
    }
}

const reduce = users.filter(filterFunction);

console.log(reduce);