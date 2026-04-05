Promise.allSettled([
    Promise.resolve("Test A Passed!"),
        Promise.reject("Test B Passed!"),
    Promise.resolve("Test C Passed!"),
]).then(function(results){
    results.forEach(function(r,i){
    console.log("Test "+(i+1)+": "+r.status,r.value||r.reason);
    })
})

//this is like a test report where we want results for all tests, not just stop at first failure.
