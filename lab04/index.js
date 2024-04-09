// class Department {
//     // ghi chu acces motifiles
//   public name: string;
//     //thuoc tinh duoc dat dau tien, truoc constructor
var __extends = (this && this.__extends) || (function () {
    var extendStatics = function (d, b) {
        extendStatics = Object.setPrototypeOf ||
            ({ __proto__: [] } instanceof Array && function (d, b) { d.__proto__ = b; }) ||
            function (d, b) { for (var p in b) if (Object.prototype.hasOwnProperty.call(b, p)) d[p] = b[p]; };
        return extendStatics(d, b);
    };
    return function (d, b) {
        if (typeof b !== "function" && b !== null)
            throw new TypeError("Class extends value " + String(b) + " is not a constructor or null");
        extendStatics(d, b);
        function __() { this.constructor = d; }
        d.prototype = b === null ? Object.create(b) : (__.prototype = b.prototype, new __());
    };
})();
//     constructor(_name: string){
//         this.name = _name;
//     }
// // phuong thuc : dung de dien ta hanh dong cua doi tuong do 
//     describe(){
//         console.log('Department: ' + this.name);
//     }
// }
// /*
// */
// const accounting = new Department('Accounting');
// console.log(accounting.name); //truy cap den  thuoc tinh
// accounting.name = 'phuong'; // thay doi gia tri thuoc tinh
// accounting.describe(); //truy suat phuong thuc
/*---------------------------------------------------------------------*/
var Department = /** @class */ (function () {
    // Property placed first, before constructor
    function Department(n, id) {
        this.employees = [];
        this.name = n;
    }
    Department.prototype.describe = function () {
        console.log("Department: " + this.name);
    };
    Department.prototype.addEmployee = function (employee) {
        this.employees.push(employee);
        console.log(employee + " has been added to the department.");
    };
    Department.prototype.printEmployeeInformation = function () {
        console.log("Employees of " + this.name + ": ");
        for (var _i = 0, _a = this.employees; _i < _a.length; _i++) {
            var employee = _a[_i];
            console.log(employee);
        }
    };
    return Department;
}());
var accounting = new Department('Accounting', 'ACC');
// console.log(accounting.name);
accounting.addEmployee('Khiem Ngu');
accounting.describe();
// accounting.name = 'NEW NAME'; // This line won't work because 'name' is a public property
accounting.printEmployeeInformation();
/*---------------------------------------------------------------------*/
var ITDepartment = /** @class */ (function (_super) {
    __extends(ITDepartment, _super);
    function ITDepartment(id, admins) {
        var _this = _super.call(this, id, 'IT') || this;
        _this.admins = admins;
        return _this;
    }
    return ITDepartment;
}(Department));
var WebDepartment = /** @class */ (function (_super) {
    __extends(WebDepartment, _super);
    function WebDepartment() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    WebDepartment.prototype.addEmployee = function (name) {
        if (name === 'Tinh') {
            return;
        }
    };
    return WebDepartment;
}(ITDepartment));
var SoftwareDepartment = /** @class */ (function (_super) {
    __extends(SoftwareDepartment, _super);
    function SoftwareDepartment() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    return SoftwareDepartment;
}(WebDepartment));
var GameDepartment = /** @class */ (function (_super) {
    __extends(GameDepartment, _super);
    function GameDepartment() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    return GameDepartment;
}(SoftwareDepartment));
var add;
add = function (n1, n2) {
    return n1 + n2;
};
var Person = /** @class */ (function () {
    function Person(name) {
        if (name) {
            this.name = name;
        }
    }
    Person.prototype.greet = function (phrase) {
        console.log("".concat(phrase, ", ").concat(this.name));
    };
    return Person;
}());
var user1 = new Person("John");
user1.greet('hello - I am');
console.log(user1);
// Bai 3 Class
var Department = /** @class */ (function () {
    function Department(id, name) {
        this.id = id;
        this.name = name;
        this.employees = [];
    }
    Department.createEmployees = function (name) {
        return { name: name };
    };
    Department.prototype.addEmployee = function (employee) {
        this.employees.push(employee);
    };
    Department.prototype.printEmployeeInformation = function () {
        console.log(this.employees.length);
        console.log(this.employees);
    };
    Department.fiscalYear = 2020;
    return Department;
}());
var ITDepartment = /** @class */ (function (_super) {
    __extends(ITDepartment, _super);
    function ITDepartment(id, admins) {
        var _this = _super.call(this, id, 'IT') || this;
        _this.admins = admins;
        return _this;
    }
    ITDepartment.prototype.describe = function () {
        console.log('IT Department - ID: ' + this.id);
    };
    return ITDepartment;
}(Department));
var employees1 = Department.createEmployees('Max');
console.log(employees1, Department.fiscalYear);
var it = new ITDepartment('d1', ['Max']);
it.addEmployee('Max');
it.addEmployee('Manu');
