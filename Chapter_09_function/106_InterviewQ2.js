//returns a value

function getstatus (code){
    if(code>=200 && code<=300) return "sucess";
    if(code>=400 && code<=500) return "client error";
    if(code>=500) return "server error";
}

console.log(200);
console.log(400);
console.log(500);




function logtest(name){
    console.log(`Running :${name}`);
    //not return anything->undefined
}

let result = logtest("Login");
console.log(result);

//undefined not return anything


greet ("Alice");//hoisting possible

function greet (name1){
    return `hello, ${name1}1`;
}

//return multiple values via array or object
function aa(){
    return [2,2,3,4,...5];
    //return n[name ; pramod];=-object
}