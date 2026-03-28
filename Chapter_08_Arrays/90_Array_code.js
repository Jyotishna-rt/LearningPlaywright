//let responses = [200, 201, 404, 500, 404, 200, 503];

/*
Exercise 1 : API Response Validation

You receive an array of API response codes. Write code to:


Check if ALL responses are successful (200–299)


Find the FIRST non-success code

Return all unique error codes
*/
let responses = [200, 201, 404, 500, 404, 200, 503];
let res = [200, 203, 400, 206];

let statusR =   responses.every(res=> res>=200 && res <499);
console.log(statusR);//returns false

let statusS = responses.every(res=>res>=200 && res <400);
console.log(statusS);

