let number1: number = 5;
let number2: number = 2.8;
let phrase: string = 'result is';
let permit: boolean = true;

const result: number = number1 + number2 ;
if (permit) {
    console.log(phrase + result);
    
}else {
    console.log('not show result');
    
}

// function add(x: number = 5) : string{
//     let phrase = 'result is';

//     phrase = 10;
//     x = '2.8';

//     return phrase + x;
// }
// let result: number = add();

var person : {
    name: string,
    age: number
}

person = {
    name: 'John',
    age: 30
}

console.log(person.name);
console.log(person.age);

// tao them mang object 
let hobbies : string[] = ['string', 'khiem'];

hobbies.forEach(element => {
    console.log(element.length);
    
});



enum Role {ADMIN, READ_ONLY, AUTHOR};

const person : {
    name: string,
    age: number,
    hobbies: string[]
}
