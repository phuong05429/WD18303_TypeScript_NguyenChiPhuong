/*--------------------VD 01---------------------------*/
var __runInitializers = (this && this.__runInitializers) || function (thisArg, initializers, value) {
    var useValue = arguments.length > 2;
    for (var i = 0; i < initializers.length; i++) {
        value = useValue ? initializers[i].call(thisArg, value) : initializers[i].call(thisArg);
    }
    return useValue ? value : void 0;
};
var __esDecorate = (this && this.__esDecorate) || function (ctor, descriptorIn, decorators, contextIn, initializers, extraInitializers) {
    function accept(f) { if (f !== void 0 && typeof f !== "function") throw new TypeError("Function expected"); return f; }
    var kind = contextIn.kind, key = kind === "getter" ? "get" : kind === "setter" ? "set" : "value";
    var target = !descriptorIn && ctor ? contextIn["static"] ? ctor : ctor.prototype : null;
    var descriptor = descriptorIn || (target ? Object.getOwnPropertyDescriptor(target, contextIn.name) : {});
    var _, done = false;
    for (var i = decorators.length - 1; i >= 0; i--) {
        var context = {};
        for (var p in contextIn) context[p] = p === "access" ? {} : contextIn[p];
        for (var p in contextIn.access) context.access[p] = contextIn.access[p];
        context.addInitializer = function (f) { if (done) throw new TypeError("Cannot add initializers after decoration has completed"); extraInitializers.push(accept(f || null)); };
        var result = (0, decorators[i])(kind === "accessor" ? { get: descriptor.get, set: descriptor.set } : descriptor[key], context);
        if (kind === "accessor") {
            if (result === void 0) continue;
            if (result === null || typeof result !== "object") throw new TypeError("Object expected");
            if (_ = accept(result.get)) descriptor.get = _;
            if (_ = accept(result.set)) descriptor.set = _;
            if (_ = accept(result.init)) initializers.unshift(_);
        }
        else if (_ = accept(result)) {
            if (kind === "field") initializers.unshift(_);
            else descriptor[key] = _;
        }
    }
    if (target) Object.defineProperty(target, contextIn.name, descriptor);
    done = true;
};
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
function autobind(_, _2, descriptor) {
    var originalMethod = descriptor.value;
    var adjDescriptor = {
        configurable: true,
        enumerable: true,
        get: function () {
            var boundFn = originalMethod.bind(this);
            return boundFn;
        }
    };
    return adjDescriptor;
}
var Printer = function () {
    var _a;
    var _instanceExtraInitializers = [];
    var _showMessage_decorators;
    return _a = /** @class */ (function () {
            function Printer() {
                this.message = (__runInitializers(this, _instanceExtraInitializers), 'this works');
            }
            Printer.prototype.showMessage = function () {
                console.log(this.message);
            };
            return Printer;
        }()),
        (function () {
            var _metadata = typeof Symbol === "function" && Symbol.metadata ? Object.create(null) : void 0;
            _showMessage_decorators = [autobind];
            __esDecorate(_a, null, _showMessage_decorators, { kind: "method", name: "showMessage", static: false, private: false, access: { has: function (obj) { return "showMessage" in obj; }, get: function (obj) { return obj.showMessage; } }, metadata: _metadata }, null, _instanceExtraInitializers);
            if (_metadata) Object.defineProperty(_a, Symbol.metadata, { enumerable: true, configurable: true, writable: true, value: _metadata });
        })(),
        _a;
}();
var p = new Printer();
p.showMessage(); // "this works"
var button = document.querySelector('button');
button.addEventListener('click', p.showMessage);
