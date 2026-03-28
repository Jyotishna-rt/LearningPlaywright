// let url 

let url = "httpa://www.vwo.com";
let status = 'pass';
let messgae = `Test completed in ${320}ms`;


//single quotes
let a = 'hello';

//double quotes
let b = "world";


//template literals-backtrick
let name = "Alice";
let msg = `hello,${name}! 2+2= ${2+2}`;
console.log(msg);


//multi line strings

let report = `
Test : Login
Status :Pass
Duration : 320ms`;


//string() constructor(convert other types)
console.log(String(200));
console.log(String(true));
console.log(String(null));
console.log(String([1,2]));