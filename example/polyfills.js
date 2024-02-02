Array.prototype.contains = function (value) {
    flag = 0;
    for (let i = 0; i < this.length; i++) {
        if (this[i] === value) {
            flag = 1;
            break;
        }
    }

    if (flag === 1) {
        return true;
    }
    return false;
};

const testFruits = ["Banana", "Orange", "Apple", "Mango"];

const cars = ["Saab", "Volvo", "BMW"];

console.log(cars.contains("BMW"));
console.log(cars.contains("Apple"));
console.log(testFruits.contains("Mango"));