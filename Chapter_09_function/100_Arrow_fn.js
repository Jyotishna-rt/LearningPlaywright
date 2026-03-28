//arrow function (ES6)

//if you want to make a normal function to arrow function
//remove the keyword function, remove the keyword return ,remove the curly braces, use the equal arrow
const greet = (name1) => `Hello, ${name1}!`;
//arrow functions only work when you have single line
console.log(greet("jyotsna"));




//double the function
const doubleIt = n=> n*2;
console.log(doubleIt(10));

//environment

const getEnv = () => "Stagging";
console.log(getEnv());


//suppose you have multi lines we can use arrow function ->use curly braces

const getResult = (score)=>{
    if(score>=70)
        return "pass";
    return "fail";
}
console.log(getResult());