// let demo : Number = 34;
// console.log(demo);
// let firstName : String = "Nathis"
// console.log(firstName);
// const booleanVariable : boolean = true;
// console.log(booleanVariable);
// const var1 : any = "HELLO GUYS";
// console.log(var1);
// console.log(var1.length);
// const var2 : unknown = "arf";
// console.log(var2);
// console.log(var2.length);
// let var3 : never = "svfd";
// let var4: null = null;
// console.log(var4);
// function fun1() : any {
//     return "any function";
// }
// console.log(fun1());
// function fun2() : void{
//     console.log("void function");
// }
// console.log(fun2());
// function fun3() : undefined{
//     return "undefined function";
// }
// console.log(fun3());
// function fun4() : never{
//     throw new Error("error");
// }
// fun4();
// function fun5() : never | number{
//     return 43;
//     throw new Error("error");
// }
// console.log(fun5());
// const arr1: string[] = [];
// arr1.push("dvds");
// console.log(arr1);
// arr1.pop();
// arr1.push(3);
// console.log(arr1);
// const arr2: readonly string[] = ["name1"];
// arr2.push("name2");
// const arr3 = [1, 2, 3]; 
// arr3.push(43);
// console.log(arr3);
// arr3.push("34");
// let tuple1: [number, boolean, string];
// // any
// let var1:any = 44;
// var1 = 'String';             // valid
// var1 = true;                // valid
// var1 = false;               // valid
// var1 = [35, 56, 64];        // valid
// // can reassign from any type of variable
// let var1 : any = 'String any';
// let var2 : String = 'String';
// let var3 : unknown = 'String unknown'; 
// let var4 : null = null;
// let var5 : undefined = undefined;
// var1 = var2;
// var1= var3;
// var1 = var4;
// var1 = var5;
// unknown
// // we can reassign any type of data to 'unkown' type variable
// let var1 : unknown =34;
// var1 = 'busbd';
// var1 = true;
// var1 = false
// var1 = [53,35,56];
// // we can't access properties for 'unknown' type
// let var2 : unknown = 23;
// var2.sayHello();             // error    
// // 'unknown' type  variable can be reassigned from any type of variable
// let var1 : unknown = 'it is a unknown';
// let var2 : String = 'it is a string';
// let var3 : null = null;
// let var4 : undefined = undefined;
// var1 = var2;
// var1 = var3;
// var1 = var4;
// // 'unknown' type variable can't be assigned to any other type variable except 'any' type variable
// let var1 : unknown = 'it is a unknown';
// let var2 : String = 'string type';
// var2=var1;                      // invalid
// let var3 : unknown = 'it is a string';
// let var4 : any = 'it is any';
// var4=var3;                      // valid
// // null
// let var1 : null = null;             // valid
// console.log(var1);
// // let var2 : null = 34;               // invalid
// // can't reassign from any type of variable except 'any'
// let var1 : null = null;
// let var2 : number = 35;
// let var3 : any = 34;
// let var4 : unknown = 54;
// let var5 : undefined = undefined;
// var1 = var2;
// var1 = var3;
// var1 = var4;
// var1 = var5;
// // can't reassign to any type of variable except 'any' and 'unknown'
// let var1 : null = null;
// let var2 : number = 35;
// let var3 : any = 34;
// let var4 : unknown = 54;
// let var5 : undefined = undefined;
// var2 = var1;                     // invalid
// var3 = var1;                     // valid
// var4 = var1;                     // valid
// var5 = var1;                     // invalid
// undefined
// can't assign any type of data except 'undefined'
// let var1 : undefined = undefined;
// var1 = 54;
// var1 = 'string';
// var1 = null;
// var1 = true;
// // can't reassign from any type of variable except 'any'
// let var1 : undefined = undefined;
// let var2 : number = 54;
// let var3 : String = "it is string";
// let var4 : any = "it is any";
// let var5 : unknown = "it is unknown";
// let var6 : null = null;
// let var7 : boolean = true;
// var1 = var2;
// var1 = var3;
// var1 = var4;
// var1 = var5;
// var1 = var6;
// var1 = var7;
// // can't reassign to any type of variable except 'any' & 'unknown'
// let var1 : undefined = undefined;
// let var2 : number = 54;
// let var3 : String = "it is string";
// let var4 : any = "it is any";
// let var5 : unknown = "it is unknown";
// let var6 : null = null;
// let var7 : boolean = true;
// var2 = var1;
// var3 = var1;
// var4 = var1;
// var5 = var1;
// var6 = var1;
// var7 = var1;
// // never
// // never can't be assigned -> it throws an error
// let var1 : never = 'never';
// array
//  2 ways to declare an array
// normal array
// let arr1 : number[] = [2,4,5,7];
// let var1 : any = 34;
// let var2 : any = 'string';
// let var3 : unknown = true;
// let var4 : boolean = true;
// let var5 : null = null;
// let var6 : undefined = undefined;
// arr1.push(var1);            // valid
// arr1.push(var2);            // valid
// arr1.push(var3);            // invalid
// arr1.push(var4);            // invalid
// arr1.push(var5);            // invalid
// arr1.push(var6);            // invalid
// tuple
// can declare the data type for each index and if you insert value for any index then you need to fill the value for all the indexes
// let tuple1 : [number, string, boolean, any, unknown, undefined, null];
// // tuple1 = [43,"string"];                     // invalid
// tuple1 = [43, "string", true, "any", "unknown", undefined, null];           // valid
// console.log(tuple1);
// object type;
// let obj1 : {field1 : string, field2 : number} = {
//     field1 : "it is string",
//     field2 : 43
// }
// gives error
// let obj1 : {field1 : string, field2 : number} = {
//     field1 : "it is string"
// }
// obj1.field2=34;
// // to resolve the error in above code
// // by using '?:' symbol in type declaration so we can declare the value for that field later
// let obj1 : {field1 : string, field2 ?: number} = {
//     field1 : "it is string"
// }
// obj1.field2=34;
// not recommened
// let obj1 : object = {
//     field1 : "String",
//     fun1 : ()=> {
//         console.log("fun1() call");
//     }
// }
// console.log(obj1);
// // void 
// // by default void return undefined so if void function return any value it is not considered
// function fun1 (var1 : string) : void{
//     return void 435;
// }
// console.log(fun1("void fun1 call"));
// never
// "never" type never returns any value (or)  the function never stops its execution
// function throwSomeError():never {
// throw new Error('I am only throwing error');
// return void 77;
// }
// function neverReturn() {
// while(true) {}
// }
// neverReturn();
// console.log(throwSomeError());
// enum
// enum Fruit {
//     Apple,
//     Orange,
//     Melon,
// }
// let enumvar1 : Fruit = Fruit.Melon;         // valid
// enumvar1 = "Melon";                          // invalid
// // here we can access the enum value and check it through '0' based indexing
// enum Fruit {
//     Apple,
//     Orange,
//     Melon,
// }
// let enumvar1 : Fruit = Fruit.Apple;
// let enumvar2 : Fruit = Fruit.Orange;
// console.log(enumvar1 === 0);                // valid
// console.log(enumvar2 === 1);                // valid
// // here once we assign any value inside the enum then the indexing starts from the current value;
// enum Fruit {
//     Apple = 5,
//     Orange,
//     Melon,
// }
// let enumvar1 : Fruit = Fruit.Apple;
// let enumvar2 : Fruit = Fruit.Orange;
// console.log(enumvar1 === 5);                // true;
// console.log(enumvar2 === 2);                // error;
// console.log(enumvar2 === 6);                // true;
// function:
var fun1 = function (a, b) {
    return a + b;
};
console.log(fun1(4, 6));
// big int
// let bigint1 : bigint = 156577777777719222222222222222222222775000n;
// let bigint2 : bigint = 123566543423999999999239999999944567896343n;
// let sum : bigint = bigint1+bigint2;
// console.log(sum);
