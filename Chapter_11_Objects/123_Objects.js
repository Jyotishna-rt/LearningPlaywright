//objects
//javascript normal objevts does not have " " at names
// //key value pair


//keys are case sensitive also
let student1 = {name: "jyotsna", age:28};//2 key 2 value
let student2 = {name:"Pramod"};//1 key value
let student3 = {name: "himanshu",age : 87,phone:989237278};


//key will not be in the doubt quotes
//below key in doubt is actually JSON

let JSON_student4 = {"name":"Pramod", "age":87, "phone":489498984};

//

let a = {status :"pass"};
console.log(a);  //status : pass
console.log(a["status"]);//pass


let a1 = {status :"pass"};
console.log(a1.status);  // pass

//keys are case sensitive
let a22 = {status:"PASS", Status:"FAIL"};
console.log(a22.status);
console.log(a22.Status);


//b copies the reference, not the object
let b = a;
b.status = "fail"; //fail
console.log(a.status); //fail


//two separate objects -different memory
let c = {status :"pass"};
let d = {status :"pass"};
console.log(c===d); //false


//USE PROPER JSON
const t_json ={
        "name":"pramod",
        "age":10
};
console.log(t_json);
