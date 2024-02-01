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
var num = 1;
console.log(typeof num);
var username = "sai";
console.log("Number ", num, "String", username);
var anyvar = 44;
console.log(anyvar);
anyvar = 'Assign string';
console.log(anyvar);
anyvar = true;
console.log(anyvar);
anyvar = false;
console.log(anyvar);
anyvar = [35, 45, 44];
console.log(anyvar);
// any type can assigned to different data types
num = anyvar;
console.log(num, typeof num);
num = 5;
console.log(num, typeof num);
var unkn = "sample";
// console.log(unkn.length);  //error unknown can not use function
unkn = num;
// num = unkn; unknown can't assign to any other data type
var y = undefined;
var z = null;
var names = [];
names.push("simple");
console.log(names);
var varString = names[0];
console.log(varString);
// names.push(1); //error
var names1 = [];
console.log(names1);
// names1.push("simple"); //read only cannot push or pop
// let value : number = names[0] // error
// A tuple is a typed array with a pre-defined length and types for each index.
// Tuples are great because they allow each element in the array to be a known type of value.
var tuple1 = [1, "1", true];
tuple1.push("no type safety");
console.log("tuple", tuple1);
var car = {
    type: "Toyota",
    // model: "Corolla", this is optional if we didn't mention '?' to model we should assign value to it
    year: 2009
};
console.log(car);
var nameAgeMap = {};
nameAgeMap.Bala = 25;
// const nameAgeMap: {[index: number]: number } = {};
// nameAgeMap.Bala = 25;
// nameAgeMap.num=4;
// nameAgeMap.num =2;
console.log("nameAgeMap   ", nameAgeMap["Bala"]);
var StatusCodes;
(function (StatusCodes) {
    StatusCodes[StatusCodes["NotFound"] = 404] = "NotFound";
    StatusCodes[StatusCodes["Success"] = 200] = "Success";
    StatusCodes[StatusCodes["Accepted"] = 202] = "Accepted";
    StatusCodes[StatusCodes["BadRequest"] = 400] = "BadRequest";
})(StatusCodes || (StatusCodes = {}));
console.log(StatusCodes.NotFound);
console.log(StatusCodes.Success);
var carYear = 2001;
var carType = "Toyota";
var carModel = "Corolla";
var car1 = {
    year: carYear,
    type: carType,
    model: carModel
};
var coloredRectangle = {
    height: 20,
    width: 10,
    color: "red"
};
function addition(a, b, c) {
    if (c === void 0) { c = 10; }
    return a + b + c;
}
console.log(addition(1, 2));
console.log(addition(1, 2, 3));
function printStatusCode(code) {
    console.log("My status code is ".concat(code, "."));
}
printStatusCode(404);
printStatusCode('404');
function add(a, b) {
    var rest = [];
    for (var _i = 2; _i < arguments.length; _i++) {
        rest[_i - 2] = arguments[_i];
    }
    return a + b + rest.reduce(function (p, c) { return p + c; }, 0);
}
console.log(add(4, 5, 6, 6, 9));
var x = 'hello';
console.log(x.length);
var x1 = 'hello';
console.log(x1.length);
var x2 = '1';
var Rect = /** @class */ (function () {
    // a: number;
    // public constructor(a: number){
    //     this.a = a;
    // }
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
printPersonProperty(person, "name");
var big = BigInt(10089999999999999999999999999999999999967777777777777779999999);
// TypeScript's inference system isn't perfect, there are times when it makes sense to ignore a value's possibility of being null or undefined. An easy way to do this is to use casting, but TypeScript also provides the ! operator as a convenient shortcut.
