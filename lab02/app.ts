// let number1: number = 5;
// let number2: number = 2.8;
// let phrase: string = 'result is';
// let permit: boolean = true;

// const result: number = number1 + number2 ;
// if (permit) {
//     console.log(phrase + result);
    
// }else {
//     console.log('not show result');
    
// }

// function add(x: number = 5) : string{
//     let phrase = 'result is';

//     phrase = 10;
//     x = '2.8';

//     return phrase + x;
// }
// let result: number = add();

// var person : {
//     name: string,
//     age: number
// }

// person = {
//     name: 'John',
//     age: 30
// }

// console.log(person.name);
// console.log(person.age);

// // tao them mang object 
// let hobbies : string[] = ['string', 'khiem'];

// hobbies.forEach(element => {
//     console.log(element.length);
    
// });


// bai 4.1
enum Role {ADMIN, READ_ONLY, AUTHOR};

const person : {
    name: string,
    age: number,
    hobbies: string[],
    role: number,// sua thanh number 
    roletuple: [number, string, string]
} = {
    name: 'John',
    age: 20,
    hobbies: ['sport','cooking'],
    role: Role.ADMIN,
    roletuple: [2,'author','khiem']//
}

let favouriteActivites: any[];
favouriteActivites = [5, 'sport', true];

if(person.role === Role.AUTHOR) {
    console.log('is author');
    
}

person.roletuple.push('admin');
person.roletuple[1] = '10'; //
person.roletuple = [0,'admin','user']; // truyen vao them du lieu

// bai 4.2

type Combinable = number | string;

function combine(input1: Combinable, input2: Combinable, resultConversion: 'as-number' | 'as-text') {
    let result;
    
    if (typeof input1 === 'number' && typeof input2 === 'number' || resultConversion === 'as-number') {
        result = +input1 + +input2;
    } else {
        result = input1.toString() + input2.toString();
    }

    return result;
}

const combineNumber = combine(30, 25, 'as-number');
console.log(combineNumber); // 55

const combineStringNumber = combine('30', '25', 'as-number');
console.log(combineStringNumber); // 55

const combineText = combine('Typescript vs', 'javascript', 'as-text');
console.log(combineText); // Typescript vsjavascript


// bai 4.3
// Variables defined and assigned to null
var a = null;
console.log(a);
console.log(typeof(a));

// Variables declarations without assigning any values to it
var b;
var undeclaredVar = null;
console.log(b);
console.log(typeof(a));
console.log(undeclaredVar);

// bai 4.4
let userInput: unknown;
let userName: string;

userInput = 5;
userInput = 'Typescript';

// Cách 1: Sử dụng kiểm tra kiểu
if (typeof userInput === 'string') {
    userName = userInput;
}

// Cách 2: Sử dụng type assertion
userName = userInput as string;

// Cách 3: Sử dụng kiểm tra kiểu với guard
function isString(value: any): value is string {
    return typeof value === 'string';
}

if (isString(userInput)) {
    userName = userInput;
}

console.log(userName); // 'Typescript'








