//checking of array


//check if something is array or not// boolean
let results = Array.isArray([1,2,3,4]);
let results1 = Array.isArray('a');
console.log(results);
console.log(results1);

//every ->check conditions for all array
/*
1. every() method

Checks if ALL elements in the array satisfy the condition.

Returns true only if every element passes the test.

Returns false if even one element fails.

*/
let r = [80,70,50].every(s=> s>=40); //true
let r1 = [80,60,86].every(s=>s>=70); //false
console.log(r);
console.log(r1);

//some -.atleast one must pass
/*
2. some() method

Checks if AT LEAST ONE element satisfies the condition.

Returns true if any element passes the test.

Returns false only if none pass.
*/

let r2 = [80,70,50].some(s=> s>=40); //true
let r3 = [80,60,86].some(s=>s>=70);  //false
console.log(r2);
console.log(r3);