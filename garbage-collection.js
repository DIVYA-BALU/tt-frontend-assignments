const obj1={
    property1 : "data1"
}

let obj2 = obj1;

let obj3 = obj2.property1;

obj2 = "sjdf";

obj3 = null;

console.log(obj1);
console.log(obj2);
console.log(obj3);