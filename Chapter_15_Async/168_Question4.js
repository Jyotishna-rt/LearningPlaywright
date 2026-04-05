//Async IIFE(iMMEDIATLEY INVOKED)


(async function(){
    let msg = await Promise.resolve("Hello World");
    console.log(msg);
})();

console.log("This is an async IIFE");//printed before the promise is resolved because the IIFE is async and runs in the background while the rest of the code continues to execute.