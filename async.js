//asynchronous

// default execution - before complting one process it goes to the next process

// let fruits
// function getFruits() {
//     console.log("Get fruits")
//     setTimeout(()=>{
//         fruits = "Apple";
//         console.log(`${fruits} is available`)
//     })
//     console.log("Fruits was ordered");
// }
// getFruits();
// console.log("Finished purchasing");
// console.log(`Eat ${fruits}`);






// manually setting a callback back function - which will executes the 2 process only after the completion of first process

// function getFruits(fruitsReady) {
//     setTimeout(()=>{
//         const fruits ="Apple";
//         fruitsReady(fruits);
//     },2000);
// }
// function fruitsReady(fruits){
//     console.log(`Eat ${fruits}`);
// };
// getFruits(fruitsReady);
// console.log("Finished purchasing");







