//

console.log("A");

async function test() {
    console.log("B");
    await Promise.resolve();//await makes the function wait for the promise to resolve before moving to the next line of code
    console.log("C");

}
test();
console.log("D");

//output- A B D C
//async function test() is called and it prints B and then it encounters await new Promise(resolve) and it waits for the promise to resolve and then it prints C
//but in the meantime, the main thread continues to execute and it prints D before C because C is waiting for the promise to resolve.




//Q2. - 
async function runAll(){
    let[a,b,c] = await Promise.all([
        Promise.resolve("Login  : OK"),
        Promise.resolve("Cart : OK"),
        Promise.resolve("Checkout : OK")
    ]);
    console.log(a, b, c);
}
runAll();