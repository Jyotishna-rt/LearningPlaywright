//sorting-------->alphanumeric charcters

let fruits = ['banana','apple','grapes','cherry'];
console.log(fruits.sort());


//le

let numbers = [1, 10, 21, 2];
numbers.sort();
console.log(numbers);//sort compares=>works as strings


numbers.sort((a , b ) => a-b);//ascenidng
console.log(numbers);


numbers.sort((a,b)=>b-a);
console.log(numbers);
