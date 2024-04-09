// import Operator from "./components/Operator";

// class Add implements Operator{
//     eval(a: number, b: number): number {
//         return a + b;
//     }
// }


// console.log("abc");

// const add = new Add();
// console.log(add.eval(2,2));

import 'reflect-metadata';
import {plainToClass} from 'class-transformec';
import {validate} from 'class-validator';

import {Product} from './product.model';

const products = [
    {title: 'A carpet', price: 29.99},
    {title: 'A Book', price: 19.99},

];

const newPord = new Product('', -5.99);
validate(newPord).then(errors => {
    if (errors.length >0){
        console.log('Validation errors');
        console.log(errors);
        
    }else{
        console.log(newPord.getInformation());
    }
})

const loadedProducts = plainToClass(Product, products);

for (const prod of loadedProducts) {
    console.log(prod.getInformation());
}