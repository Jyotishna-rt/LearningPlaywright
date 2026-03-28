

//var, let , const

//var ->function scoped

var a = 10;
console.log(a);


//definition of the function

function test (){
    console.log("The testing Academy");
    var a = 20;
    console.log(a);
    if(true){
        var a = 30;
        console.log(a);
    }
    console.log("F:" + a);
}
console.log("F:" + a);
    test();


    //var also allows re-decalaration;
    var a = 30;
    var a = 50;  // no error re-declaration is allowed
    console.log(a);




    //let -> block scoped
     
    let b = 10;
    console.log(b);

    function printHello (){
    console.log("The testing Academy");
    let b = 20;  //local scope
    console.log(b);
    if(true){
        let b = 30;
        console.log(b);
    }
    console.log("l:" + b);
}   
console.log("l:" + b);
    printHello();


    //let does not allow re-declaration
    let c = 10;
    //let c = 20; 
    // //error re-declaration is not allowed\




    //const -> block scoped and cannot be re-assigned


    const pi = 3.14;
    console.log(pi);
    //pi = 3.1415; //error assignment to constant variable is not allowed