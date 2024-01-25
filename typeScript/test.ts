//explict
let name12: string = "udhay";
// console.log(name12);

//implicit
let newName = "udhay";
newName = "kumar"
// newName = 1;
// console.log(newName);

let xy: number = 12;
let xya: string = "new string";
let xyb: boolean = false;


//`any` accept all data and any can be assigned to any type
//any can't
let lastName: any = "prasadh";
lastName = 2;
// console.log(lastName);

let anyvariable: any = true;
anyvariable = "value";
// console.log(anyvariable);

//unknown can take be assigned with any data but unknown can't be assigned to any other
//we can't use any methods to unknow variable
let xyz: unknown = 1;
xyz = true;
anyvariable = xyz;
// console.log(anyvariable);

// let nvr : never = true; // error for assignment

let y: undefined = undefined;
let z: null = null;


//array
const names: string[] = [];
names.push("abhi");

// console.log(names);
// names.push(1); //error


const names1: readonly string[] = [];
// console.log(names1);
// names1.push("abhi"); //read only cannot push or pop
// let value : number = names[0] // error


const values: number[] = [9];
values.push(12);
values.push(62);
values.push(81);
// console.log(values);
// console.log(values[2]);

//tuple
// A tuple is a typed array with a pre-defined length and types for each index.
// Tuples allow each element in the array to be a known type of value.

let tuple: [number, boolean, string, any];

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

let sym1 = Symbol();
const sym2 = Symbol("key");
sym1 = Symbol("key");
console.log(sym1);

const nameAgeMap: { [index: string]: number, [index: number]: number, [index: symbol]: number } = {};
nameAgeMap.udhay = 12;
nameAgeMap.bala = 24;
// nameAgeMap.sym1 = 24;

nameAgeMap['1'] = 25;

console.log(nameAgeMap);

function add(a: number, b: number, ...rest: number[]) {
    return a + b + rest.reduce((prev, curr, ind, arr) => {
        console.log(prev, curr, ind, arr);

        return prev;
    });
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
class newcar {
    type: string;
    model: string;
    year: number;
    public constructor(t: string, m: string, y: number) {
        this.type = t;
        this.model = m;
        this.year = y;
    }
}
const car: newcar = new newcar("Toyota", "Corolla", 2009);
// console.log(car);
// console.log(car.type);

// Type Aliases allow defining types with a custom name (an Alias).

type CarYear = number
type CarType = string
type CarModel = string
type Car = {
    year: CarYear,
    type: CarType,
    model: CarModel
}

const carYear: CarYear = 2001
const carType: CarType = "Toyota"
const carModel: CarModel = "Corolla"
const car1: Car = {
    year: carYear,
    type: carType,
    model: carModel
};


enum StatusCodes {
    NotFound = 404,
    Success = 200,
    Accepted = 202,
    BadRequest = 400
}

// console.log(StatusCodes.NotFound);

// console.log(StatusCodes.Success);

// Interfaces are similar to type aliases, except they only apply to object types.


interface Rectangle {
    height: number,
    width: number
}

interface ColoredRectangle extends Rectangle {
    color: string
}

const coloredRectangle: ColoredRectangle = {
    height: 20,
    width: 10,
    color: "red"
};

// console.log(coloredRectangle);


function addition(a: number, b: number, c: number = 10): number {
    return a + b + c;
}

// console.log(addition(1, 2));
// console.log(addition(1, 2, 3));


function printStatusCode(code: string | number) {
    console.log(`My status code is ${code}.`)
}

// printStatusCode(404);
// printStatusCode('404');


let x: unknown = 'hello';
// console.log((x as string).length);

let x1: unknown = 'hello';
console.log((<string>x1).length);

let x2: unknown = '1';
// console.log("number x2", typeof x2 as number); //error


interface Shape {
    getArea: () => number;
}

class Rect implements Shape {
    public constructor(protected readonly w: number, protected readonly h: number) { }

    public getArea(): number {
        return this.w * this.h;
    }
}

class Square extends Rect {
    public constructor(w: number) {
        super(w, w);
    }
    // getArea gets inherited from Rectangle
}

function createPair<S, T>(v1: S, v2: T): [S, T] {
    return [v1, v2];
}
console.log(createPair<string, number>('hello', 42));

// Partial changes all the properties in an object to be optional.

interface Point {
    x: number;
    y: number;
}

let pointPart: Partial<Point> = {}; // Partial allows x and y to be optional
pointPart.x = 10;

interface Car1 {
    make: string;
    model: string;
    mileage?: number;
}

let myCar: Required<Car1> = {
    make: 'Ford',
    model: 'Focus',
    mileage: 12000 // Required forces mileage to be defined
};

// Record<string, number> is equivalent to { [key: string]: number }

// Omit removes keys from an object type.
// Pick removes all but the specified keys from an object type.
// Exclude removes types from a union.
// ReturnType extracts the return type of a function type.
// Parameters extracts the parameter types of a function type as an array.
// Readonly is used to create a new type where all properties are readonly, meaning they cannot be modified once assigned a value.



interface Person {
    name: string;
    age: number;
}
// keyof Person here creates a union type of "name" and "age", other strings will not be allowed
function printPersonProperty(person: Person, property: keyof Person) {
    console.log(`Printing person property ${property}: "${person[property]}"`);
}
let person = {
    name: "Max",
    age: 27
};
printPersonProperty(person, "age");













