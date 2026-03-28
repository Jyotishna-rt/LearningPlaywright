function makeRetryTracker(max){
    let attempts = 0;

/*
function tryAgain(){
 //return both types
    }
*/
    return function tryAgain(testName){
     attempts++;
     if(attempts>max){
        return `${testName} exceeded max retries(${max})`;
     }
      return `Attempts ${attempts}/{max} for ${testName}`;
    };

}

let retry = makeRetryTracker(3);
console.log(retry("Login"));
console.log(retry("Login"));
console.log(retry("Login"));
console.log(retry("Login"));