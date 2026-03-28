//array have in built method

let results = ["pass", "fail","pass","error"];

//index of ---------.returns the first index , or -1 if not found
console.log(results.indexOf("pass"));//1
console.log(results.indexOf("skip"));//-1

//last index of
console.log(results.lastIndexOf("error"));



//includes return ---------->true or false

console.log(results.includes("error"));//true ------>exist
console.log(results.includes("skip")); //false ------>not exist


//find->returns first matching element

let nums = [10,20,25,35,45];
console.log(nums.find(x=>x>20));/// 25,35,45 ->print first find number

//index of find first matching element

console.log(nums.findIndex(n=>n>25));//index of 35 is 3

//last index
console.log(nums.findLast(n=>n>10));// last number find matching element
console.log(nums.findLastIndex(x=>x>20)); //last number indexing


console.log("-------------p------");