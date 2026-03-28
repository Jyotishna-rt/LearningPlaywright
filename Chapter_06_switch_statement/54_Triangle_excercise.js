let a = 10;
let b = 20;
let c = 30;

if(a === b && b === c){
    console.log("Equilateral triangle");
}

else if(a ===b || b === c || a ===c){
    console.log("Isosceles triangle");
}
else{
    console.log("scalene triangle");
}