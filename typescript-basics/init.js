// let variable: number = 1;
// const username: string = "sai";
// console.log("Number ", variable, "String", username);
// let anyvar: any = true;
// console.log(anyvar);
// anyvar = 1;
// console.log(anyvar);
// let unkn: unknown = "varun";
// // console.log(unkn.toLowerCase()); //error
// // let nvr : never = true; // error for assignment
// let y: undefined = undefined;
// let z: null = null;
// const names: string[] = [];
// names.push("abhi");
// console.log(names);
// // names.push(1); //error
// const names1: readonly string[] = [];
// console.log(names1);
// // names1.push("abhi"); //read only cannot push or pop
// // let value : number = names[0] // error
// // A tuple is a typed array with a pre-defined length and types for each index.
// // Tuples are great because they allow each element in the array to be a known type of value.
// let tuple1 : [number, string,boolean] = [1,"1", true];
// tuple1.push("no type safety");
// console.log(tuple1);
// const car: { type: string, model?: string, year: number } = {
//     type: "Toyota",
//     // model: "Corolla",
//     year: 2009
//   };
// console.log(car);
// const nameAgeMap: { [index: string]: number } = {};
// nameAgeMap.Bala = 25;
// console.log(nameAgeMap);
// enum StatusCodes {
//     NotFound = 404,
//     Success = 200,
//     Accepted = 202,
//     BadRequest = 400
//   }
//   console.log(StatusCodes.NotFound);
//   console.log(StatusCodes.Success);
// //   Type Aliases allow defining types with a custom name (an Alias).
// type CarYear = number
// type CarType = string
// type CarModel = string
// type Car = {
//   year: CarYear,
//   type: CarType,
//   model: CarModel
// }
// const carYear: CarYear = 2001
// const carType: CarType = "Toyota"
// const carModel: CarModel = "Corolla"
// const car1: Car = {
//   year: carYear,
//   type: carType,
//   model: carModel
// };
// // Interfaces are similar to type aliases, except they only apply to object types.
// interface Rectangle {
//     height: number,
//     width: number
//   }
// interface ColoredRectangle extends Rectangle {
//     color: string
//   }
// const coloredRectangle: ColoredRectangle = {
//     height: 20,
//     width: 10,
//     color: "red"
//   };
// function addition (a:number, b:number, c: number = 10): number {
//     return a + b + c;
// }
// console.log(addition(1, 2));
// console.log(addition(1, 2,3));
// function printStatusCode(code: string | number) {
//     console.log(`My status code is ${code}.`)
//   }
// printStatusCode(404);
// printStatusCode('404');
// function add(a: number, b: number, ...rest: number[]) {
//     return a + b + rest.reduce((p, c) => p + c, 0);
//   }
// console.log(add(4, 5, 6, 6, 9));
// let x: unknown = 'hello';
// console.log((x as string).length);
// let x1: unknown = 'hello';
// console.log((<string>x1).length);
// let x2: unknown = '1';
// // console.log( "number x2",typeof x2 as number); //error
// interface Shape {
//     getArea: () => number;
//   }
// class Rect implements Shape {
//     public constructor(protected readonly w: number, protected readonly h: number) {}
//     public getArea(): number {
//       return this.w * this.h;
//     }
// }
// class Square extends Rect {
//     public constructor(w: number) {
//       super(w, w);
//     }
//     // getArea gets inherited from Rectangle
// }
// function createPair<S, T>(v1: S, v2: T): [S, T] {
//     return [v1, v2];
// }
// console.log(createPair<string, number>('hello', 42));
// // Partial changes all the properties in an object to be optional.
// interface Point {
//     x: number;
//     y: number;
//   }
// let pointPart: Partial<Point> = {}; // `Partial` allows x and y to be optional
// pointPart.x = 10;
// interface Car1 {
//     make: string;
//     model: string;
//     mileage?: number;
// }
// let myCar: Required<Car1> = {
//     make: 'Ford',
//     model: 'Focus',
//     mileage: 12000 // `Required` forces mileage to be defined
// };
// // Record<string, number> is equivalent to { [key: string]: number }
// // Omit removes keys from an object type.
// // Pick removes all but the specified keys from an object type.
// // Exclude removes types from a union.
// // ReturnType extracts the return type of a function type.
// // Parameters extracts the parameter types of a function type as an array.
// // Readonly is used to create a new type where all properties are readonly, meaning they cannot be modified once assigned a value.
// interface Person {
//     name: string;
//     age: number;
//   }
//   // `keyof Person` here creates a union type of "name" and "age", other strings will not be allowed
//   function printPersonProperty(person: Person, property: keyof Person) {
//     console.log(`Printing person property ${property}: "${person[property]}"`);
//   }
//   let person = {
//     name: "Max",
//     age: 27
//   };
// printPersonProperty(person, "name");
// // TypeScript's inference system isn't perfect, there are times when it makes sense to ignore a value's possibility of being null or undefined. An easy way to do this is to use casting, but TypeScript also provides the ! operator as a convenient shortcut.
var big = BigInt(100);
console.log(big);
