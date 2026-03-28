//Transforming strings

let str = "hello, World!";

console.log(str.toUpperCase());
console.log(str.toLowerCase());


//trim -<>remove extra spaces

console.log(str.trim());
console.log(str.trimStart());
console.log(str.trimEnd());

//replace
let msg = "Test : FAIL. Retry: FAIL.";
console.log(msg.replace("FAIL","PASS"));//"Test:PASS"AND Retry :Fail
console.log(msg.replace(/FAIL/g,"PASS"));// replace all with regex



//concatenation
let str1 ="Hello"+" "+"World";
console.log(str1);
console.log("Hello".concat(" ","World"));
console.log(`${"Hello"} ${"World"}`);


let url = "https://staging.vwo.com/api/login?retry=true";
console.log(url.replace(/staging/g,"qa"));




//splitting and joining
let a = "pass,fail,skip";
console.log(a.split(",")); //[ 'pass', 'fail', 'skip' ]

let b = "hello"; 
console.log(b.split(""));//[ 'h', 'e', 'l', 'l', 'o' ]

let c= "test-login-pass";
console.log(c.split("-").join(" "));//test login pass


//template literal joining with format
let parts = ["2024","03","07"];
let date = parts.join('-');
console.log(date);