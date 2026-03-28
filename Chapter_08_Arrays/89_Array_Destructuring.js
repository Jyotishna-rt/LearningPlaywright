//destructing means=============>breaking ->respectively their values will come
let [first,second, third] = [10,20,30];
console.log(first);
console.log(second);
console.log(third);

let [four, five, ...six] = [10,20,30,40,50]; //....six ->spread goes to all rest it will never be in between
console.log(four);
 console.log(five);
 console.log(six);