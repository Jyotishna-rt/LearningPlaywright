//scope in functions
let env = "staging";//global scope

function setconfig(){
    let timeout = 2000;//local scope
    console.log(env); // can access global
    console.log(timeout); // can access local
}

setconfig();
console.log(env); // reference error - not accesible outside
console.log(timeout);// refence error

//nested scope
function outer(){
    let x = 10;

    function inner(){
        let y = 20;
        console.log(x);// inner can accesible outer variable here
    }

    inner();
    console.log(y);//outer cannot acces inner varib=able reference error

}