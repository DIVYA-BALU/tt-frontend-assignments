//map and filter
const newArray = [1, 334, 546, 78, 76, 83, 26, 45, 67, 345];
const modifiedArray = newArray.map(checkPrime);
// const modifiedArray = newArray.filter(checkPrime);
function checkPrime(num) {
    return num * 2;
}
console.log(modifiedArray);

const persons = [
    { firstname: "Malcom", lastname: "Reynolds" },
    { firstname: "Kaylee", lastname: "Frye" },
    { firstname: "Jayne", lastname: "Cobb" }
];

console.log(persons.map(getFullName));
function getFullName(item) {
    return item.firstname + " " + item.lastname;
}

//find
const ages = [3, 100, 18, 20, 22, 87];

// console.log(ages.find(checkAge));

function checkAge(age) {
    return age > 18;
}


//reduce
const numbers = [175, 25];
console.log(numbers.reduce(myFunc));

function myFunc(total, num) {
    console.log("total:" + total + "num:" + num);
    return total - num;
}

//promise
let myPromise = new Promise(function (myResolve, myReject) {
    // "Producing Code" (May take some time)

    myResolve(); // when successful
    myReject();  // when error
});

// "Consuming Code" (Must wait for a fulfilled Promise)
myPromise.then(
    function (value) { /* code if successful */ },
    function (error) { /* code if some error */ }
);