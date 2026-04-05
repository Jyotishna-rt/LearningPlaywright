//when step 2 results depends on step 1, you must run them sequnecially
//step 1- step 2

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

  let r1 = await apiCall("Login");
  console.log(r1);

  let r2 = await apiCall("Dashboard");
  console.log(r1);
    

  let r3 = await apiCall("Report");
  console.log(r1);
    
  console.log("Time:~"+(Date.now()-start)+"ms");
    
}

sequentialTest();