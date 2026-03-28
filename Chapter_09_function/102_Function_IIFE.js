//immediate invoke function expression (IIFE)

//THEY DO NOT need to call
/*
function name(){
    console.log("Hi");
}
    name();
*/
//wrap it into braclket and call ()
(function name1(){
    console.log("Hi")
})();

(function (){
    console.log("UAT")
})();