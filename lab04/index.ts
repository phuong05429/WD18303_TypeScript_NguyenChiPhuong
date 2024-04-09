


// class Department {
//     // ghi chu acces motifiles
//   public name: string;
//     //thuoc tinh duoc dat dau tien, truoc constructor

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
class Department {
    // Access modifiers comment

    public name: string;
    private employees: string[] = [];

    // Property placed first, before constructor
    constructor(n: string, id: string){
        this.name = n;
    }

    describe(this: Department){
        console.log("Department: " + this.name);
    }

    addEmployee(employee: string){
        this.employees.push(employee);
        console.log(employee + " has been added to the department.");
    }

    printEmployeeInformation(){
        console.log("Employees of " + this.name + ": ");
        for(let employee of this.employees){
            console.log(employee);
        }
    }
}

const accounting = new Department('Accounting', 'ACC');
// console.log(accounting.name);
accounting.addEmployee('Khiem Ngu');
accounting.describe();
// accounting.name = 'NEW NAME'; // This line won't work because 'name' is a public property
accounting.printEmployeeInformation();

/*---------------------------------------------------------------------*/

class ITDepartment extends Department {
    admins: string[];
    constructor(id: string, admins: string[]){
        super(id, 'IT');
        this.admins = admins;
    }
}

class WebDepartment extends ITDepartment {
    addEmployee(name: string) {
        if(name === 'Tinh'){
            return;
        }
        
    }
}
class SoftwareDepartment extends WebDepartment {}
class GameDepartment extends SoftwareDepartment {}
/*---------------------------------------------------------------------*/



// Bai 1 Interface
interface AddFn {
    (a: number, b: number): number;
}

let add: AddFn;
add = (n1: number, n2: number) => {
    return n1 + n2;
}

// Bai 2 Interface va Ke thua

interface Named {
    readonly name?: string;
    outputName?: string;
}

interface Greetable extends Named {
    greet(phrase: string): void;
}

class Person implements Greetable {
    name?: string;

    constructor(name?: string) {
        if (name) {
            this.name = name;
        }
    }

    greet(phrase: string) {
        console.log(`${phrase}, ${this.name}`);
    }
}

let user1: Greetable = new Person("John");
user1.greet('hello - I am');
console.log(user1);

// Bai 3 Class

abstract class Department {
    static fiscalYear = 2020;
    protected employees: string[] = [];
    constructor(protected readonly id: string, public name: string) {}

    static createEmployees(name: string) {
        return { name: name };
    }

    abstract describe(this: Department): void;

    addEmployee(employee: string) {
        this.employees.push(employee);
    }

    printEmployeeInformation() {
        console.log(this.employees.length);
        console.log(this.employees);
    }
}

class ITDepartment extends Department {
    admins: string[];
    constructor(id: string, admins: string[]) {
        super(id, 'IT');
        this.admins = admins;
    }

    describe() {
        console.log('IT Department - ID: ' + this.id);
    }
}

const employees1 = Department.createEmployees('Max');
console.log(employees1, Department.fiscalYear);
const it = new ITDepartment('d1', ['Max']);

it.addEmployee('Max');
it.addEmployee('Manu');
