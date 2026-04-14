let unknown: unknown = "hello";
//let unknown : unknown = 123;
if(typeof unknown === "string"){
    console.log("HI");
    console.log(unknown.toUpperCase());
}


let message : string = "hello";

let username : string = "Jyotishna";
let userID : number = 12345;

//function annotatrions
function greet(name: string): string{
    return `Hello, ${name}!`;
}

//arrow function annotations
const multiply = (a:number, b:number):number => a*b;

//object annotations
let user : { name: string; age: number } = {
    name: "Jyotsna",
    age: 30
};