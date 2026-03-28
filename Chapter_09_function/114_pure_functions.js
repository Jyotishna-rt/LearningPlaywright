//pure function
//pure function always return the same output for the same input and has no side effects


function calculatePassRate(total,passed){
    return((passed/total)*100).toFixed(2);
}

console.log(calculatePassRate(10,7));
console.log(calculatePassRate(10,7));


//impure->depends on external stare



function isPassing(score){
    return score >=threshold
}

//gives value and then print is impure
let threshold = 70;
console.log(isPassing(threshold));


threshold = 50;
console.log(isPassing(threshold));
