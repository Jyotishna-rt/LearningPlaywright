const obj = {a:1, b:2, c:3};

console.log(Object.keys(obj));//all keys
console.log(Object.values(obj));//all values
console.log(Object.entries(obj));//key value pair


const user = {name:"John", age:30};


//for each loop
for(const key in user){
    console.log(`${key}:${user[key]}`);
}

//object.keys/values/entries
Object.keys(user).forEach(key=> {
    console.log(key);

});

Object.entries(user).forEach(([key, value])=> {
     console.log(`${key}:${value}`);
});
