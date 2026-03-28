//higher order functions
//a function that takes a function as argument or returns a function


function runWithLogin(testfn, testName){
console.log(`Starting:${testName}`);
let result = testfn();
console.log(`Finished:${testName}->${result}`);
return result;
}

function loginTest(){
    return "pass";

}
function loginFailedTest(){
    return "fail";

}

runWithLogin(loginTest,"Login Test");
runWithLogin(loginFailedTest,"Dashboard  Failed Test");