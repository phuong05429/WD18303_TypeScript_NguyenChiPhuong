const f_name =  (num: number): boolean =>{
    return (num % 2) === 0 ? true : false; ;


}
console.log(f_name(5));


const sum = (x: number, y:number) => {

    return (x + y);
}

console.log(sum(5, 5));


const printOutput = (output:string|number): string| number => {
    return output;
}
// khong co return thi no la void 

console.log(printOutput("Hello")); // In ra: Hello
console.log(printOutput(42)); // In ra: 42



const hello = (msg:string = "Word"): string => {
    return `Hello ${msg}`;
};

console.log(hello()); // In ra: Hello
console.log(hello("Phuong")); // In ra: Hello




let phuong = (x:number = 5, y?:number) =>{
    return x + <number>y;
    // ep kieu tham so y ve number Nếu y không được cung cấp, giá trị của nó sẽ là undefined, và khi thực hiện phép cộng, undefined sẽ được chuyển đổi thành NaN.
}
const printoUtput = (output:string|number) => console.log("Printing:"+ output);

printoUtput(phuong(3)); //
printoUtput(phuong(undefined,5)); //
printoUtput(phuong(3,5));

// MERGING OBJECTS
const person : {
    name: string,
    age: number
}={
    name: "John",
    age: 22
}
const salary : {
    grade: string,
    basic: string
}={
    grade: "Basic",
    basic: "20000"
}

const sumary = {...person, ...salary};
console.log(sumary);


function AddandHandle(x: number, y: number, cb: (num: number) => void){
    const result = x + y;
    cb(result);
}
AddandHandle(10,20, (result) => {console.log(result);});

