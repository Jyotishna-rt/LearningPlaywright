//primtive types

let name: string = "Jyotsna";
let age: number = 30;
let isStudent: boolean = true;
let hobbies: string[] = ["Reading", "Traveling", "Cooking"];
let person: { name: string; age: number } = { name: "Jyotsna", age: 30 };

let nothing: null = null;
let notDefined: undefined = undefined;


//Array
let numbers: number[] = [1, 2, 3, 4, 5];
let names: string[] = ["Alice", "Bob", "Charlie"];
let names1: Array<string> = ["Alice", "Bob", "Charlie"];

//any type(avoid when possible)

let anyValue: any = "This can be any type";



//unknwon safer than any
let unknownValue: unknown = "This is an unknown value";

console.log('name ->', name);
console.log('age ->', age);
console.log('isStudent ->', isStudent);
console.log('hobbies ->', hobbies);
console.log('person ->', person);
console.log('nothing ->', nothing);
console.log('notDefined ->', notDefined);
console.log('numbers ->', numbers);
console.log('names ->', names);
console.log('names1 ->', names1);
console.log('anyValue ->', anyValue);
console.log('unknownValue ->', unknownValue);