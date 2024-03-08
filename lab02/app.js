var number1 = 5;
var number2 = 2.8;
var phrase = 'result is';
var permit = true;
var result = number1 + number2;
if (permit) {
    console.log(phrase + result);
}
else {
    console.log('not show result');
}
// function add(x: number = 5) : string{
//     let phrase = 'result is';
//     phrase = 10;
//     x = '2.8';
//     return phrase + x;
// }
// let result: number = add();
var person;
person = {
    name: 'John',
    age: 30
};
console.log(person.name);
console.log(person.age);
// tao them mang object 
var hobbies = ['string', 'khiem'];
hobbies.forEach(function (element) {
    console.log(element.length);
});
