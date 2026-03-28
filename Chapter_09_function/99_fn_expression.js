//type 4 method
 //rather typing like this 
 /*
 const greet1(name){
    return 'hello,${name}!';
 }

 console.log(greet1("bob"));
 */
//TYPE 4 FUNCTION
 function greet1(name){
    return 'hello,${name}!';
 }

 console.log(greet1("bob"));

 //FUNCTION as expression
 const greet2 = function(name2){
   return `hello, ${name2}!`;
 }
 console.log(greet2("bobby"));