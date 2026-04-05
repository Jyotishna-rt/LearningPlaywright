let testRun = new Promise(function(resolve,reject){
    reject("Assertion failed");
});

testRun.then(function(data){//resolve
    console.log(data);
}).catch(function(error){//reject
    console.log(error);
}).finally(function(){//always execute
    console.log("I will execute anyhow");
})

//finally() runs regardless of the promise being resolved or rejected
//finally always executed whether the test passed or failed.just like aftereach() in cypress or playwright