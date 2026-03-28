//scope
const user ={
    name:"John",
    age: 30,
    email:"jsna@gmail.com"
};

console.log(user);

//accessing properties by name. or ""
console.log(user.name);
console.log("age");


//dynamic property access
const key = "email";
console.log(user[key]);//by using key and store email inside it

//adding/modifying properties
user.city = "NYC";//add
user.age = 67;//modify new from old

console.log(user);