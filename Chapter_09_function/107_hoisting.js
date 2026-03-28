//hos=isting
//function declaration as hoisting
//u can call them before declarartion
//function expression and arrow function are not
greet('Alice');

function greet(name){
    return `Hello.${name}!`;
}


sayHi("bob");// X typerror :say Hi is not a function
const sayHi = function(name){
    return `hI,${name}`;
};