function sayHello(msg: string): void{
    console.log(msg);// no return use void
}


//function annotations
function greet(name: string): string{
    return `Hello, ${name}!`;
}

sayHello("Hello, World!");
console.log(greet("Jyotsna"));


//never=> function that never returns a value (e.g., throws an error or has an infinite loop)
function throwError(message: string): never{
    throw new Error(message);
}

function infiniteLoop(): never{
    while(true){
        console.log("This loop will run forever");
    }}