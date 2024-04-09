import Operator from "./components/Operator";

class Add implements Operator{
    eval(a: number, b: number): number {
        return a + b;
    }
}


console.log("abc");

const add = new Add();
console.log(add.eval(2,2));

