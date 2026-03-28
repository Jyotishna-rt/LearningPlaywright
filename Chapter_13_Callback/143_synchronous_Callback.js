//synchronous call back
let test_results = ["pass","fail","skip"];

test_results.forEach(function(result, index){
   console.log("Test"+index+"->"+result);
});

test_results.forEach(forEachfn);