

//console.log(status1);
console.log("jyotsna is happy");
console.log("Be positive");
let status1 ="Non Active";

console.log("Be positive");
console.log("Be positive");
console.log(status1);


let x = "global";

if (true) {
    // TDZ for block-scoped "x" starts here
    // console.log(x);   // ReferenceError (NOT "global"!)
    let x = "block";     // TDZ ends
    console.log(x);      // "block"
}

console.log(x);