function outer(){
    let message = "hello";
    console.log("outer called");


    function inner(){
        console.log("message");
    }
    return inner;
}


let fn_inner = outer();
fn_inner();
//bcoz inner not allowed so called outer function with return inner


