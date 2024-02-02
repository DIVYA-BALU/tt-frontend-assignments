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
var stuName = "grace";
var mark = 90;
var isPass = true;
function result(mark) {
    if (mark > 50) {
        return "You are passed";
    }
}
console.log(result(mark));
var fruit = "apple";
fruit = 2;
console.log(fruit);
// const check: never = "check";
// function throwError(): never {
//     throw new Error("error");
// }
var num1 = undefined;
console.log(num1);
var num2 = null;
console.log(num2);
var place = "India";
place = "China";
console.log(place);
place = function () {
    return "unknow test";
};
// console.log(place());
var names = ["grace", "kala"];
names.push("mala");
// names.push(1);
console.log(names);
var fruits = ["apple"];
// fruits.push("orange");
var marks = [1, 2];
console.log("marks : ".concat(marks));
var numbers = [1, 2, 3];
// numbers.push("1");
numbers.pop();
console.log(numbers);
var mixedTypeTuple = [1, "grace", true];
mixedTypeTuple.push("externally something"); // here no type safety for index 3
console.log("Tuple : ".concat(mixedTypeTuple));
var readOnlyTuple = [1, "grace", true];
// readOnlyTuple.push("1");
console.log("Readonly Tuple : ".concat(readOnlyTuple));
var studentInfo = ["grace", 100];
console.log("Named Tuple : ".concat(studentInfo));
var graph = [1.2, 2.0];
var x = graph[0], y = graph[1];
console.log("Destructuring Tuple : ".concat(x));
var user = {
    name: "grace",
    place: "namakkal"
};
console.log(user);
var address = {
    state: "Tamilnadu"
};
// address.state = 1;
var graphObj = {
    x: 1.2,
    // y: 2.5
};
var directions;
(function (directions) {
    directions["North"] = "North";
    directions["South"] = "South";
    directions[directions["East"] = 1000] = "East";
    directions[directions["West"] = 1001] = "West";
})(directions || (directions = {}));
console.log(directions.North);
console.log(directions.South);
console.log(directions.East);
console.log(directions.West);
var number1 = 1;
var things = {
    item: "goods",
    weight: 50
};
var car = {
    name: "BMW",
    mileges: 4000
};
var unionType = 2;
unionType = "stringvalue";
unionType = true;
function multiply(number1) {
    return 10 * number1;
}
function add() {
    return 1 + 2;
}
function returnNothing() {
    console.log("return nothing");
}
function divide(_a) {
    var a = _a.a, b = _a.b;
    return a / b;
}
var subtract = function (value) { return value - 1; };
var percentage1 = 50;
console.log(percentage1 * 100); //casting using as
var percentage2 = "string";
console.log(percentage2.length); //casting using <>
var User = /** @class */ (function () {
    function User(name) {
        this.name = name;
    }
    User.prototype.getName = function () {
        return this.name;
    };
    return User;
}());
var user1 = new User("grace");
console.log(user1.getName());
var Square = /** @class */ (function () {
    function Square(name) {
        this.name = name;
    }
    Square.prototype.getShape = function () {
        return this.name;
    };
    return Square;
}());
var Rectangle1 = /** @class */ (function () {
    function Rectangle1(width, height) {
        this.width = width;
        this.height = height;
    }
    Rectangle1.prototype.getArea = function () {
        return this.width * this.height;
    };
    return Rectangle1;
}());
var Square1 = /** @class */ (function (_super) {
    __extends(Square1, _super);
    function Square1(width, height) {
        return _super.call(this, width, height) || this;
    }
    Square1.prototype.getArea = function () {
        return 10 * 20;
    };
    return Square1;
}(Rectangle1));
function createPair(v1, v2) {
    return [v1, v2];
}
console.log(createPair('hello', 42));
var NamedValue = /** @class */ (function () {
    function NamedValue(name) {
        this.name = name;
    }
    NamedValue.prototype.setValue = function (value) {
        this.value = value;
    };
    NamedValue.prototype.getValue = function () {
        return this.value;
    };
    return NamedValue;
}());
var value = new NamedValue('myNumber');
value.setValue(10);
console.log(value.getValue());
var pointPart1 = {
    y: 20
}; // `Partial` allows x and y to be optional
pointPart1.x = 10;
var pointPart2 = {
    x: 10,
    y: 20
};
var pointPart3 = {
    y: 10
};
var pointPart4 = {
    y: 20
};
var nameAgeMap = {
    'Alice': 21,
    'Bob': 25
};
var primitive = "string";
