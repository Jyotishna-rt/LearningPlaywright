console.log(greeting);//output undefined

var greeting = "Hello, World!";
console.log(greeting); //output "hello dashboard"""

//behind the scenes
//var greeting                    ->hoiseted at the top with undefined
//console.log(greeting);          ->undefined
//greeting = "Hello, World!";     ->assigned stays in place
//console.log(greeting);         ->hello