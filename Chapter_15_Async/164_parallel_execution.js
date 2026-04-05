
function apiCall(name){
   return new Promise(function(resolve){
    setTimeout(function(){
        resolve(name, "200 OK!");//// resolve function calls after 1000 ms
   },1000)
});
}

async function sequentialTest(){
  console.log("Starting of the test");
  let start = Date.now();
//need to remove await->make sure they run in parallel and not wait for each other
 /* let r1 = await apiCall("Login");
  console.log(r1);

  let r2 = await apiCall("Dashboard");
  console.log(r1);
    

  let r3 = await apiCall("Report");
  console.log(r1);
    */


  let [r1, r2, r3] = await Promise.all
  ([
    apiCall("Auth Service"), 
    apiCall("User service"), 
    apiCall("Payment service")
]);
console.log(r1);
console.log(r2);
console.log(r3);

  console.log("Time:~"+(Date.now()-start)+"ms");
    
}

sequentialTest();