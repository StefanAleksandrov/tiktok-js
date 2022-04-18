// Value type variables
let number = 5;
let string = 'string';
let boolean = false;
let nothing = undefined;
let missing = null;

// Reference type variables
const arr = [1, 2, 3];
const obj = { a: 1, b: 2, c: 3 };

const newArr = arr;

arr.push(4);

console.log(arr);
console.log(newArr);
