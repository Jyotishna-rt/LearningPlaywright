Promise.resolve("start")
.then(function(val){
  console.log(val);
  throw new Error("Broke at step 2");
})
.then(function(){
    console.log("This will not run");
})
.catch(function(err){
    console.log("Caught: ",err.message);
});



//q2

Promise.reject("Test failed")
.then(function(data){
    console.log("Data:",data);
})
.catch(function(err){
    console.log("Caug: ",err);
})
.finally(function(){
    console.log("Cleanup done");
});


//q3

Promise.resolve("Quick win")
.then(function(msg){
  console.log(msg);
});

Promise.reject("Quick Loss")
.catch(function(msg){
  console.log(msg);
});


//q4
let t1 = Promise.resolve("Login: PASS");
let t2 = Promise.resolve("Search: PASS");
let t3 = Promise.resolve("LogOut: PASS");

Promise.all([t1,t2,t3])
.then(function(results){
    console.log("All tests passed:", results);
});

//reject catcxh will be print

Promise.allSettled([
    Promise.resolve("API 200"),
    Promise.reject("API 500"),
    Promise.resolve("API 201")
]).then(function (results) {
    results.forEach(function (r) {
        let val = r.status === "fulfilled" ? r.value : r.reason;
        console.log(r.status + " → " + val);
    });
});