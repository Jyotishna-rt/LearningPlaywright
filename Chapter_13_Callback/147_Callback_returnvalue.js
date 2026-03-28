function calulate(a,b, operation){
    return operation(a,b);
}//calling here


let sum = calulate(10,5, function(x,y){
    return x+y;
});//defintion here

console.log(sum);



//async callbcak

console.log("A: Test suite started");
setTimeout(function(){
    console.log("B:Slow API test finished");
});

console.log("C:Fast Unit test finished")