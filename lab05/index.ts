// class Student {
//     name: string;

//     constructor() {
//         this.name = "Student";
//     }

// } 

// let Chiphuog = new Student();

// class Student {
//     name: string;

//     constructor() {
//         this.name = "Student";
//     }
// }

// // Tạo một thể hiện của lớp Student
// const studentInstance = new Student();

// // In ra tên của thể hiện
// console.log(studentInstance.name); 

/*-----------------------------------------------*/
// Bai 1 Intersection Type

type Admin = {
    name: string;
    privileges: string[];
};

type Employee = {
    name: string;
    startDate: Date;
};
type ElevateEmployee = Admin & Employee;

// Bai 2 Type guard

class Car {
    drive(){
        console.log("Lai Xe.....");
        
    }
}

class Truck {
    drive(){
        console.log('Lai xe tai....');
    }

    loadCargo(amount: number){
        console.log('Loading cargo...' + amount);
        
    }
}
type Vehicle = Car | Truck ;

const v1 = new Car();
const v2 = new Truck();

function useVehicle(vehicle: Vehicle){
    vehicle.drive();
    if (vehicle instanceof Truck){
        vehicle.loadCargo(1000);
    }
}

// Bai 3 Discriminated unions
interface Bird {
    type: "Bird";
    flyingSpeed: number;
}

interface Horse{
    type: "Horse";
    runningSpeed: number;
}

type Animal = Bird | Horse;

function moveAnimal(animal: Animal){
    let speed;
    switch (animal.type){
        case "Bird":
            speed = animal.flyingSpeed;
            break;
        case "Horse":
            speed = animal.runningSpeed;
    }
    console.log('Moving at speed: ' + speed);
    
}

// Bai 4 Generic
//Generic

function merge<T extends object, U extends object>(objA: T, objB: U){
    return Object.assign(objA, objB);
}

const mergedObj = merge({ name: 'Max', hobbies: ['Sports']}, { age: 30});
console.log(mergedObj);
//Generic Interface

interface Lengthy{
    length: number;
}

function countAndDescribe<T extends Lengthy>(element: T): [T, string] {
    let descriptionText = 'Go no value';
    if(element.length === 1){
        descriptionText = 'Go 1 element';
    }else if(element.length >1){
        descriptionText = 'Got' + element.length + ' elements.';
    }
    return [element, descriptionText];
}

//Generic class
class DataStorage<T extends string | number | boolean > {
    private data: T[] = [];
    addItem(item: T){
        this.data.push(item);
    }

    removeItem(item: T){
        if (this.data.indexOf(item) === -1){
            return;
        }
        this.data.splice(this.data.indexOf(item), 1); //-1
    }

    getItems(){
        return [...this.data];
    }
}
 const textStorage = new DataStorage<string>();
 textStorage.addItem('Hello');
 textStorage.addItem('Phuong');
 textStorage.removeItem('Hello');
 console.log(textStorage.getItems());

const numStorage = new DataStorage<number>();
 
