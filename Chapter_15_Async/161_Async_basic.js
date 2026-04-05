//basic async await
async function getTestResults(){
    return "Pass";
}
//async function always returns a promise. So we can use then to get the result of the 
getTestResults().then(function(result){
    console.log(result);
})

//use when we dont want to use promise
//we dont want this need awair
async function runTest(){
    let result1 = await Promise.resolve("Login test passed");
    console.log(result1);

    let result2 = await Promise.reject("Dashboard test passed");
    console.log(result2);

}
runTest();