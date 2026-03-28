const user = {name1: "John", age: 30, city:"Nyc"};

//basic destructuring
const {name1, age}= user;
console.log(name1);
console.log(age);


//rename variables
const{name1: userName, age :userAge}= user;
console.log(userName);
console.log(userAge);


//default values
const{country="USA"}= user;
console.log(country);//usa

const data = {user: {name :"John", address:{city:"NYC"}}};
const {user : {address : {city}}} = data;

