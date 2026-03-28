const obj1 = {a:1, b:2};
const obj2 = {c:3,d:4};


//use spread

const copy = {...obj1};
console.log(copy);
const merged = {...obj1,...obj2};
console.log(merged);


//this keyword
const user = {
    name:"Jyotsna",
    sayname (lastname){
        this.name += lastname;
        return this.name;
    }
}
console.log(user.sayname("rawat"));//pramodutta
