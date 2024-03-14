// const object1 = {
//   question: "What is the capital of France?",
//   options: [
//     { value: 1, label: "London" },
//     { value: 2, label: "Paris" },
//     { value: 3, label: "Berlin" },
//     { value: 4, label: "Madrid" },
//   ],
//   print1: function () {
//     console.log(this);
//   },
// };

// object1.print1();

// const object2 = {
//   question: "What is the capital of France?",
//   options: [
//     { value: 1, label: "London" },
//     { value: 2, label: "Paris" },
//     { value: 3, label: "Berlin" },
//     { value: 4, label: "Madrid" },
//   ],
//   print1: function () {
//     function print2() {
//       console.log(this);
//     }

//     print2();
//   },
// };
// object2.print1();

// const object3 = {
//   question: "What is the capital of France?",
//   options: [
//     { value: 1, label: "London" },
//     { value: 2, label: "Paris" },
//     { value: 3, label: "Berlin" },
//     { value: 4, label: "Madrid" },
//   ],
//   print1: () => {
//     console.log(this);
//   },
// };
// object3.print1();

const object4 = {
  question: "What is the capital of France?",
  options: [
    { value: 1, label: "London" },
    { value: 2, label: "Paris" },
    { value: 3, label: "Berlin" },
    { value: 4, label: "Madrid" },
  ],
  print1: function () {
    const print2 = () => {
       console.log(this);
    const print3 = () => {
        console.log(this);
    }
    
    print3();

    };

    print2();
  },
};
object4.print1();


// const object = {
//     name : "bala",
//     regular_function : function() {
//         console.log(this);
//         const object2 = {
//             age : 20,
//             arrow_function : () => {
//                 console.log(this);
//             }
//         }
//         object2.arrow_function();
//     },
//     arrow_function : () => {
//         let val = 10;
//         console.log(this);
//     }
// }

// object.regular_function();
// object.arrow_function();
// arrow_function = () => {
//     let val = 10;
//     console.log(this);
// }
// arrow_function();