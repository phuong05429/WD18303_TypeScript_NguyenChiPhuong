import {
    validate,
    validateOrReject,
    Contains,
    IsInt,
    Length,
    IsEmail,
    IsFQDN,
    IsDate,
    Min,
    Max,
    IsNotEmpty,
    IsNumber,
    IsPositive,
    IsString,
    MinLength,
    MaxLength,
    IsBoolean,
    IsArray,
    IsObject
  } from 'class-validator';
import { isNumber } from 'lodash';


  export class Product{
    @IsNotEmpty()
    title: string;
    @IsNumber()
    @IsPositive()
    price: number;

    constructor(title: string, price: number){
          this.title = title;
          this.price = price;
        }

    getInformation(){
        return 
           [  this.title,
            `$${this.price}`];
        
    }
  }
  





