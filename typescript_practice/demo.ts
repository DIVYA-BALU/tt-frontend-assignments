
const stuName: string = "grace";
const mark: number = 90
const isPass: boolean = true;

function result(mark: number) {
    if (mark > 50) {
        return "You are passed";
    }
}
console.log(result(mark));

let fruit: any = "apple";
fruit = 2;
console.log(fruit);

// const check: never = "check";

// function throwError(): never {
//     throw new Error("error");
// }

const num1: undefined = undefined;
console.log(num1);

const num2: null = null;
console.log(num2);

let place: unknown = "India";
place = "China";
console.log(place);

place = () => {
    return "unknow test";
}
// console.log(place());

const names: string[] = ["grace", "kala"];
names.push("mala");
// names.push(1);
console.log(names);

const fruits: readonly string[] = ["apple"];
// fruits.push("orange");

const marks: number[] = [1, 2];
console.log(`marks : ${marks}`);

const numbers = [1, 2, 3];
// numbers.push("1");
numbers.pop();
console.log(numbers);

const mixedTypeTuple: [number, string, boolean] = [1, "grace", true];
mixedTypeTuple.push("externally something"); // here no type safety for index 3
console.log(`Tuple : ${mixedTypeTuple}`);

const readOnlyTuple: readonly [number, string, boolean] = [1, "grace", true];
// readOnlyTuple.push("1");
console.log(`Readonly Tuple : ${readOnlyTuple}`);

const studentInfo: [name: string, mark: number] = ["grace", 100];
console.log(`Named Tuple : ${studentInfo}`);

const graph: [x: number, y: number] = [1.2, 2.0];
const [x, y] = graph;
console.log(`Destructuring Tuple : ${x}`);

const user: { name: string, place: string } = {
    name: "grace",
    place: "namakkal"
};
console.log(user);

const address = {
    state: "Tamilnadu"
};
// address.state = 1;

const graphObj: { x: number, y?: number } = {
    x: 1.2,
    // y: 2.5
};

enum directions {
    "North" = "North",
    South = "South",
    East = 1000,
    West
}
console.log(directions.North);
console.log(directions.South);
console.log(directions.East);
console.log(directions.West);

type alias = number;

const number1: alias = 1;

interface Items {
    item: string,
    weight: number
}

const things: Items = {
    item: "goods",
    weight: 50
}

interface Car {
    name: string;
}
interface Milege extends Car {
    mileges: number
}

const car: Milege = {
    name: "BMW",
    mileges: 4000
}

let unionType: number | string | boolean = 2;
unionType = "stringvalue";
unionType = true;

function multiply(number1: number) {
    return 10 * number1;
}

function add(): number {
    return 1 + 2;
}

function returnNothing(): void {
    console.log("return nothing");
}

function divide({ a, b }: { a: number, b: number }) {
    return a / b;
}

type Subtract = (value: number) => number;
const subtract: Subtract = (value) => value - 1;

const percentage1: unknown = 50;
console.log((percentage1 as number) * 100); //casting using as

const percentage2: unknown = "string";
console.log((<string>percentage2).length); //casting using <>

class User {
    private name: string;
    public constructor(name: string) {
        this.name = name;
    }
    public getName(): string {
        return this.name;
    }
}
const user1 = new User("grace");
console.log(user1.getName());

interface Shape {
    getShape(): string;
}

class Square implements Shape {
    constructor(private name: string) { }

    public getShape(): string {
        return this.name;
    }

}

class Rectangle1 {
    public constructor(private width: number, private height: number) { }

    public getArea(): number {
        return this.width * this.height;
    }
}

class Square1 extends Rectangle1 {

    public constructor(width: number, height: number) {
        super(width, height);
    }

    public override getArea(): number {
        return 10 * 20;
    }
}

function createPair<S, T>(v1: S, v2: T): [S, T] {
    return [v1, v2];
}
console.log(createPair<string, number>('hello', 42));

class NamedValue<T> {
    private value: T | undefined;

    constructor(private name: string) { }

    public setValue(value: T) {
        this.value = value;
    }

    public getValue(): T | undefined {
        return this.value;
    }
}

const value = new NamedValue<number>('myNumber');
value.setValue(10);
console.log(value.getValue());


interface Point {
    x: number;
    y: number;
}

const pointPart1: Partial<Point> = {
    y: 20
}; // `Partial` allows x and y to be optional
pointPart1.x = 10;

const pointPart2: Required<Point> = {
    x: 10,
    y: 20
};

const pointPart3: Omit<Point, "x"> = {
    y: 10
}

const pointPart4: Pick<Point, "y"> = {
    y: 20
}

const nameAgeMap: Record<string, number> = { //key,value
    'Alice': 21,
    'Bob': 25
};

type Primitive = string | number;
const primitive: Exclude<Primitive, number> = "string";

type PointGenerator = () => { x: number; y: number; };
const point: ReturnType<PointGenerator> = {
    x: 10,
    y: 20
};
console.log(point);

type Pointer = (p: { x: number; y: number; }) => void;
const pointer: Parameters<Pointer>[0] = {
    x: 10,
    y: 20
    // w: 10
}

interface Person {
    name: string;
    age: number;
}

function printPersonProperty(person: Person, key: keyof Person) {
    console.log(`Printing person property ${key}: "${person[key]}"`);
}
let person = {
    name: "Max",
    age: 27
};
printPersonProperty(person, "age");
