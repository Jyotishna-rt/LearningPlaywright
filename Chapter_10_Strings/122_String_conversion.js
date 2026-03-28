//String conversion
//to string

console.log((200).toString());//"200"

true.toString();//true
number("42");//42
parseInt("42px");//42
parseFloat("3.14rem")//3.14


//strings are immutable
let str = "hello";
str[0] ="h";
console.log(str);
console.log(str);//strings are immutable

let str = "hello";
let upr = str.toUpperCase();
console.log(upr);
