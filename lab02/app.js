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
var Role;
(function (Role) {
    Role[Role["ADMIN"] = 0] = "ADMIN";
    Role[Role["READ_ONLY"] = 1] = "READ_ONLY";
    Role[Role["AUTHOR"] = 2] = "AUTHOR";
})(Role || (Role = {}));
;
var person = {
    name: 'John',
    age: 20,
    hobbies: ['sport', 'cooking'],
    role: Role.ADMIN,
    roletuple: [2, 'author', 'khiem'] //
};
var favouriteActivites;
favouriteActivites = [5, 'sport', true];
if (person.role === Role.AUTHOR) {
    console.log('is author');
}
person.roletuple.push('admin');
person.roletuple[1] = '10'; //
person.roletuple = [0, 'admin', 'user']; // truyen vao them du lieu
function combine(input1, input2, resultConversion) {
    var result;
    if (typeof input1 === 'number' && typeof input2 === 'number' || resultConversion === 'as-number') {
        result = +input1 + +input2;
    }
    else {
        result = input1.toString() + input2.toString();
    }
    return result;
}
var combineNumber = combine(30, 25, 'as-number');
console.log(combineNumber); // 55
var combineStringNumber = combine('30', '25', 'as-number');
console.log(combineStringNumber); // 55
var combineText = combine('Typescript vs', 'javascript', 'as-text');
console.log(combineText); // Typescript vsjavascript
// bai 4.3
// Variables defined and assigned to null
var a = null;
console.log(a);
console.log(typeof (a));
// Variables declarations without assigning any values to it
var b;
var undeclaredVar = null;
console.log(b);
console.log(typeof (a));
console.log(undeclaredVar);
