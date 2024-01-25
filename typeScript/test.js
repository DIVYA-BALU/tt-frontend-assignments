var __extends = (this && this.__extends) || (function () {
    var extendStatics = function (d, b) {
        extendStatics = Object.setPrototypeOf ||
            ({ __proto__: [] } instanceof Array && function (d, b) { d.__proto__ = b; }) ||
            function (d, b) { for (var p in b) if (Object.prototype.hasOwnProperty.call(b, p)) d[p] = b[p]; };
        return extendStatics(d, b);
    };
    return function (d, b) {
        if (typeof b !== "function" && b !== null)
            throw new TypeError("Class extends value " + String(b) + " is not a constructor or null");
        extendStatics(d, b);
        function __() { this.constructor = d; }
        d.prototype = b === null ? Object.create(b) : (__.prototype = b.prototype, new __());
    };
})();
//explict
var name12 = "udhay";
// console.log(name12);
//implicit
var newName = "udhay";
newName = "kumar";
// newName = 1;
// console.log(newName);
var xy = 12;
var xya = "new string";
var xyb = false;
//`any` accept all data and any can be assigned to any type
//any can't
var lastName = "prasadh";
lastName = 2;
// console.log(lastName);
var anyvariable = true;
anyvariable = "value";
// console.log(anyvariable);
//unknown can take be assigned with any data but unknown can't be assigned to any other
//we can't use any methods to unknow variable
var xyz = 1;
xyz = true;
anyvariable = xyz;
// console.log(anyvariable);
// let nvr : never = true; // error for assignment
var y = undefined;
var z = null;
//array
var names = [];
names.push("abhi");
// console.log(names);
// names.push(1); //error
var names1 = [];
// console.log(names1);
// names1.push("abhi"); //read only cannot push or pop
// let value : number = names[0] // error
var values = [9];
values.push(12);
values.push(62);
values.push(81);
// console.log(values);
// console.log(values[2]);
//tuple
// A tuple is a typed array with a pre-defined length and types for each index.
// Tuples allow each element in the array to be a known type of value.
var tuple;
tuple = [32, false, 'udhay', values];
tuple.push(1);
tuple.push("kumar");
// console.log(tuple);
// console.log(tuple[3][0]);
/*****************************************************************************************************/
// let big1: bigint = 4003846284914791n;
// let big2: bigint = 4003834584914791n;
// let sum: bigint = big1 + big2;
// console.log(sum);
// let sym1 = Symbol();
// const sym2 = Symbol("key");
// sym1 = Symbol("key");
// console.log(sym1);
var nameAgeMap = {};
nameAgeMap.udhay = 12;
nameAgeMap.bala = 24;
nameAgeMap.sym1 = 24;
// nameAgeMap.1 = 25;
// console.log(nameAgeMap);
function add(a, b) {
    var rest = [];
    for (var _i = 2; _i < arguments.length; _i++) {
        rest[_i - 2] = arguments[_i];
    }
    return a + b + rest.reduce(function (p) { return p; }, 0);
}
// console.log(add(4, 5, 6));
/*****************************************************************************************************/
//object
// const car: object = {
//     type: "Toyota",
//     model: "Corolla",
//     year: 2009
// };
// assigning object should contain all property and value
// const car2: { type: string, mileage: number } = { // Error: Property 'mileage' is missing in type '{ type: string; }' but required in type '{ type: string; mileage: number; }'.
//     type: "Toyota",
// };
// car2.mileage = 2000;
// const car:{
//     type: string,
//     model: string,
//     year: number
// }  = {
//     type: "Toyota",
//     model: "Corolla",
//     year: 2009
// };
//class
var newcar = /** @class */ (function () {
    function newcar(t, m, y) {
        this.type = t;
        this.model = m;
        this.year = y;
    }
    return newcar;
}());
var car = new newcar("Toyota", "Corolla", 2009);
var carYear = 2001;
var carType = "Toyota";
var carModel = "Corolla";
var car1 = {
    year: carYear,
    type: carType,
    model: carModel
};
var StatusCodes;
(function (StatusCodes) {
    StatusCodes[StatusCodes["NotFound"] = 404] = "NotFound";
    StatusCodes[StatusCodes["Success"] = 200] = "Success";
    StatusCodes[StatusCodes["Accepted"] = 202] = "Accepted";
    StatusCodes[StatusCodes["BadRequest"] = 400] = "BadRequest";
})(StatusCodes || (StatusCodes = {}));
var coloredRectangle = {
    height: 20,
    width: 10,
    color: "red"
};
// console.log(coloredRectangle);
function addition(a, b, c) {
    if (c === void 0) { c = 10; }
    return a + b + c;
}
// console.log(addition(1, 2));
// console.log(addition(1, 2, 3));
function printStatusCode(code) {
    console.log("My status code is ".concat(code, "."));
}
// printStatusCode(404);
// printStatusCode('404');
var x = 'hello';
// console.log((x as string).length);
var x1 = 'hello';
console.log(x1.length);
var x2 = '1';
var Rect = /** @class */ (function () {
    function Rect(w, h) {
        this.w = w;
        this.h = h;
    }
    Rect.prototype.getArea = function () {
        return this.w * this.h;
    };
    return Rect;
}());
var Square = /** @class */ (function (_super) {
    __extends(Square, _super);
    function Square(w) {
        return _super.call(this, w, w) || this;
    }
    return Square;
}(Rect));
function createPair(v1, v2) {
    return [v1, v2];
}
console.log(createPair('hello', 42));
var pointPart = {}; // Partial allows x and y to be optional
pointPart.x = 10;
var myCar = {
    make: 'Ford',
    model: 'Focus',
    mileage: 12000 // Required forces mileage to be defined
};
// keyof Person here creates a union type of "name" and "age", other strings will not be allowed
function printPersonProperty(person, property) {
    console.log("Printing person property ".concat(property, ": \"").concat(person[property], "\""));
}
var person = {
    name: "Max",
    age: 27
};
printPersonProperty(person, "age");
// TypeScript's inference system isn't perfect, there are times when it makes sense to ignore a value's possibility of being null or undefined. An easy way to do this is to use casting, but TypeScript also provides the ! operator as a convenient shortcut.l
