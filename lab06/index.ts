/*--------------------VD 01---------------------------*/

// function ThuCungEx(constructor: Function){
//     console.log("day la ham khim ngu");
    
// }
// @ThuCungEx
// class ThuCung{
//     constructor(private ten:string, private tuoi: number) {}
// }

// let tc1 = new ThuCung('No No',9);
// let tc2 = new ThuCung('Ngu',2);
// console.log("tc1=",tc1);
// console.log("tc2=",tc2);
/*-----------------------------------------------*/


/*--------------------VD 02---------------------------*/
// function BaseHV(constructor: Function){
//     constructor.prototype.gioitinh = true;
//     constructor.prototype.ngaytao = new Date().toLocaleString('vi');

// }
// @BaseHV
// class HocVien { constructor(public ht: string) { } }
// let hv1 = new HocVien('Iam Phuog');
// console.log(hv1);
/*-----------------------------------------------*/


/*--------------------VD 03---------------------------*/

// function themTT<T extends {new(...args: any[]): {} }> (constructor: T){
//     return class extends constructor{
//         mauxe: string = 'Xanh';
//     };
// }

// @themTT
// class XeMay {
//     constructor(private tenxe: string, private gia: number) { }
// }

// const x1:any = new XeMay('SH 150', 39.5);
// console.log(x1, x1["mauxe"]);
/*-----------------------------------------------*/


/*--------------------VD 04---------------------------*/
// function ChangeHS( constructor: Function) : any {
//     return class{
//         private hoten : string ;
//         public phai : boolean ;
//         constructor(h : string){
//             this.hoten = h;
//             this.phai = true;
//         }
//     }
// }
// @ChangeHS
// class HocSinh {
//     public name : string ;
//     constructor(h: string) {
//         this.name = h;
//     }
// }
// let u1 = new HocSinh('Khiem');
// console.log(u1);

/*===============================================================*/ 
// function BaseUser1(constructor: Function) {
//     console.log(`Day la Phuong Ngu 1`);
// }

// function BaseUser2(constructor: Function) {
//     console.log(`Day la Phuong Ngu 2`);
// }

// function BaseUser3(constructor: Function) {
//     console.log(`Day la Phuong Ngu 3`);
// }

// function BaseUser4(constructor: Function) {
//     console.log(`Day la Phuong Ngu 4`);
// }

// function BaseUser5(constructor: Function) {
//     console.log(`Day la Phuong Ngu 5`);
// }
// @BaseUser2 @BaseUser3 @BaseUser1 @BaseUser5 @BaseUser4

// class User {
//     constructor(public name: string){}
// }

// let u1 = new User('Khiem');
// console.log(u1);

/*===============================================================*/ 

// class Pet {
//     constructor(private name: string , private age: number){}
// }
// const pet = new Pet('Phuong',2);
// console.log(pet);

/*===============================================================*/ 
// function PetLogger(constructor: Function){
//     console.log('Day la Petlogger');
    
// }
// @PetLogger
// class Pet {
//     constructor(public name: string){}
// }
/*===============================================================*/ 
// class Animal{
//     constructor(public name: string, public age: number){    }
// }
// const  cat = new Animal("Tom", 2);

// console.log(cat);

/*===============================================================*/
// Property Decorator

// class User{
//     private username: string;
//     private password: string;
//     constructor(u: string, p: string){
//         this.username = u;
//         this.password = p;
//     }
//     get pass(){
//         console.log(`lay password luc ${new Date().toLocaleDateString('vi')}`);
//         return this.password;
        
//     }
//     set pass(p: string){
//         console.log(`Gan pass ${p} luc ${new Date().toLocaleDateString('vi')}`);
//         this.password =  p;
//     }
// }
// let u1 = new User('phuong', '1234');
// console.log(u1);
// u1.pass = '89898989';
// let p = u1.pass;


// function TheoDoiMin(sokytu: number) {
//     return function(constructor: any, tenthuoctinh: string) {
//         let value: string;

//         const laygiatri = function() {
//             return value;
//         };

//         const gangiatri = function(newVal: string) {
//             if (newVal.length <= sokytu) {
//                 value = newVal;
//             } else {
//                 console.log(`${tenthuoctinh} ${newVal} quá dài, lớn hơn ${sokytu} ký tự`);
//             }
//         };

//         Object.defineProperty(constructor, tenthuoctinh, {
//             get: laygiatri,
//             set: gangiatri,
//         });
//     };
// }

// class User {
//     public username: string;
//     @TheoDoiMin(7)
//     public password: string;
    
//     constructor(u: string, p: string) {
//         this.username = u;
//         this.password = p;
//     }
// }

// let u1 = new User('NGUYEN CHI PHUONG', '1234');
// console.log(u1.password); // In ra "1234" vì độ dài password không vượt quá 7 ký tự
// u1.password = '12345678'; // Sẽ in ra thông báo console vì độ dài password vượt quá 7 ký tự


/*=============================LAB 06==================================*/
/*---------class decorator----------*/
//  function Logger(constructor: Function){
//      console.log('Logging...');
//      console.log(constructor);
     
//  }
 
//  class Person {
//     name = 'John';

//     constructor(){
//         console.log('Creating person object...');
        
//     }
//  }
//  const pers = new Person();
//  console.log(pers);
 
/*--------- decorator factory ----------*/
//  function Logger(logString: string){
//      return function(constructor: Function){
//          console.log(logString);
//          console.log(constructor);
//      };
//  }
// @Logger('LOGGING - PERSON')
//  class Person {
//     name = 'Due';
//     constructor(){
//         console.log('Creating person object...');
//     }
//  }


/*--------- property decorator  ----------*/
// function Log(target: any, propertyName: string | Symbol){
//     console.log(`Property decorator`);
//     console.log(target, propertyName);
    
// }
// class Product{
//     @Log
//     name: string;
//     private _price: number;

//     set price(val: number){ }

//     constructor(t: string, p:number) {
//         this.name = t;
//         this._price = p;
//     }
//     getPriceWithTax(){ }
// }

/*--------- method decorator  ----------*/
// function Log3(target: any, propertyName: string | Symbol, descriptor: PropertyDescriptor){
//     console.log('method decorator');
//     console.log(target);
//     console.log(propertyName);
//     console.log(descriptor);
   
// }
// class Product{
//     title: string;
//     private _price: number;

//     set price(val: number){ }

//     constructor(t: string, p:number) {
//             this.title = t;
//             this._price = p;
//         }

//     @Log3
//         getPriceWithTax(){ }
// }

/*--------- autobind decorator  ----------*/
function autobind(_: any, _2: string, descriptor: PropertyDescriptor){
    const originalMethod = descriptor.value;
    const adjDescriptor: PropertyDescriptor = {
        configurable: true,
        enumerable: true,
        get(){
            const  boundFn = originalMethod.bind(this);
            return boundFn;
        }
    };
    return adjDescriptor;
}
 class Printer {
    message = 'this works';

    @autobind
    showMessage(){
        console.log(this.message);
    }
 }
 const p = new Printer();
 p.showMessage() // "this works"
 const button = document.querySelector('button')!;
 button.addEventListener('click', p.showMessage);