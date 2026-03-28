//write a function makeratelimiter(limit) that returns a function
//Each call to the returned function should track usage and return true if under limit
// , false when limit is execeeded


function makeRateLimiter(limit){
    let call = 0;

    function check(){
        call++;
        return call<=limit;
    }
    return check;
}

let limiter = makeRateLimiter(3);
console.log(limiter());
console.log(limiter());
console.log(limiter());
console.log(limiter());

//used in API testing