//shallow copy

//A shallow copy copies the array structure, but references of nested objects/arrays remain the same.

//👉 If the array contains objects or other arrays, both arrays will still point to the same memory reference.
let original = [1,2,3,4];

let copy = [...original]; //spread concatentaion
console.log(copy);

//slice copy
let copy2 = original.slice();
console.log(copy2); //slice copy full 

let copy3 = Array.from(original);
console.log(copy3); //from yes

let copy4 = original.concat();
console.log(copy3);

copy.push(99);
console.log(copy); //copy  would change to 1,2,3,4,99 at end
console.log(original);  // nothing will change for orgiginal 
//all are shallow copy original will not change only copy would change


//deep copy----->used with json 
//in deep copy original will be change

original.push(99);
console.log(original);//original will change


let arr = [1,2,3];
let copy6 = arr;
copy6.push(4);
console.log(arr.length); //1, 2, 3, 4 //deep copy
console.log(copy6);