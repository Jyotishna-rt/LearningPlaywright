//array create

//js store multiple hetrogenous data types as object

let fruits = []; //empty array

let fruits_fresh = ["apple", "banana", "mango"];
//3 , index -0,1,2

//no array
let arr = [10,20,30,40];
console.log(arr.length); // length is a property,() function
console.log(arr[0]);
console.log(arr[3]);
console.log(arr[4]); // undefined not array out of bound exception

//duplicate items 
let testresults = ["pass" , "fail", "pass","skip"];

//mixed items
let mixed = [1, "hello", true, null];// js arrays can hold mixed datatypes-> hetrogenuous

//creating arrays
//array litersla
let browsers = ["chrome", "firefox", "safari"];


//array constructor
//let scores = new Array[3]; //creates empty 3 elements
let scores1 = new Array(1,2,3);

//console.log(scores);


let numbers = new Array(10,20,30,40,50);
console.log(numbers);

let test = Array.of(10, 20, 30, 40 , 50); //array of create same things just multiple ways
console.log(test);
console.log(test[0]);


//arrays.from->craete charcters and divide into charcters

let chars = Array.from("hello");
console.log(chars);


//accessing & modifying

