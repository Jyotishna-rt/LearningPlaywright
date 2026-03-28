//rest parameters
function logResults(suiteName, ...results){
    console.log(`Suite :${suiteName}`);
    console.log(`Results:${results.join(" , ")}`);

}
logResults("Auth Suite", "pass","fail","pass","skip");

//used spread with join function
function add(a,b,c){
    return a+b+c;
}
let nums = [1,2,3];
add(...nums);//same as add 1,2,3.....6
//spread response code into validator
function hasError(...codes){
    return codes.some(c=>c>=400);
}

let responsecode = [200,201,401];
hasError(...responsecode);//true
