//salary increasing after one year
//transforimg array

let scores = [45,78,98,34,26];
//map transform each and every element, returns new array
//change value into new arrays
let grades = scores.map(s=>s>50 ? "Pass":"fail");
console.log(grades);

console.log("--------------");

//filter --------->reverse of map
//filter ->keeps the elements that pass the test

let passing = scores.filter(s=>s>70);
console.log(passing);

console.log("--------------");


//reduce---------->accumulates to a single value
let total = scores.reduce((sum,s)=>sum +s,0);
console.log(total);

console.log("--------------");


//flat ----------->flattened nested array
let nested = [[1,2],[3,4],[5,6],[7,8]];
nested.flat();
console.log(nested.flat());