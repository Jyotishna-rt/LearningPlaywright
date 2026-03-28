//primitive data types -call by value
//primitive, number, string, boolean, null, undefined

let a = 10;
let b = a;
b=99;// always create a new copy and not copy the refernce a 
console.log(a);
console.log(b);

//objects -copied by refernce, call by reference
//reference-object, array, function
let obj1 = {val:10};
let obj2 = obj1;//refernce copr
obj2.val = 99;copy
console.log(obj1.val);copy