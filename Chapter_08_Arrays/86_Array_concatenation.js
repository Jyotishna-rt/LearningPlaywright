let  arr = [1,2,3,4,5,6];
let a = [1,2];
let b = [3,4];
//let c concateneta a and b
//let c = a.concat(b,[5,6]);
let c = a.concat(b);
console.log(c);


//spread (modern way )---concatenation ,(....)
let d = [...a,...b];//.. means all elements of this
console.log(d);

// join -> join them by using , = |
let s = (["pass", "fail","skip"].join ("|"));
console.log(s);

let s1 = (["pass", "fail","skip"].join ("="));
console.log(s1);

