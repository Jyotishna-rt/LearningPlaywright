//iterate -----. to go from one to another

//traversing

//first for loop

let tests = ["login","search","checkout"];
for(let i =0; i<tests.length; i++){
    console.log(tests[i]);
}

console.log("------------------");
//for---of(cleanest of values)====>for each loop

for(let test of tests){
    console.log(test);
}

console.log("------------------");


tests.forEach((test, index)=>{
    console.log(`${index}:${test}`);
});

console.log("------------------");

//entries ---->index + value
for(let [i,test] of tests.entries()){
    console.log(i,test);
}

console.log("------------------");

let students=["jyotsna","himanshu","mithilja"];

//in gives you indexing
//of gives you values

for(let student in students){
    console.log(student,"->",students[student]);
}