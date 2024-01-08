let names = ['raj','ram','ajay'];
console.log(names);
console.log(names[0]);
console.log(names[1]);
names[1] = 50
console.log(names.at(1));//names[1] also used for this
console.log(names.length);//length of array
console.log(names.sort());//sort the array
console.log(names);
console.log(names.toString());//convert array to string
names.forEach(printAllElement);//accessing through for each loop

names.push('ram');// add element at last
console.log(names); 

names[6] = "bala";// it creates the hole in array
console.log(names);
console.log(names.length)//length is 7 

names.forEach(printAllElement);

console.log(typeof(names));//return object because array in js is object
console.log(Array.isArray(names));

console.log(names.join('/'));//join the elements in array 
 
names.pop()//remove last element
names.shift()//remove first element
console.log(names)
names.unshift('bala');//add element at first
console.log(names)
delete names[0]//remove the elemnt and leave that place undefined
console.log(names)

let names1 = ['surya']
let names2 = ['sai']
names = names.concat(names1,names2);//re-asign need to be done 
console.log(names);


console.log(names);

names.splice(4,2,'thamil','sri')//splice(index where the element need to add,no.of element to be removed,elements,elements,..)
console.log(names)
names.slice()

const fruits = ['apple','orange','goa','kiwi','banana'];
console.log(fruits);
fruits.copyWithin(2,3,4);
console.log(fruits);















function printAllElement(element,index,arr){
    console.log(element+"  "+index+"  "+arr);
}
