//acessing & modifying

let statuses = ["pass", "fail", "skip"];
console.log(statuses[0]);
console.log(statuses[1]);


//at -1 ----->gives the last element
console.log(statuses.at(-1));
console.log(statuses.at(-2));
console.log(statuses.at(-3));
console.log(statuses.at(-4)); //undefined


//modify direct assigning value
statuses[1] = "blocked";
console.log(statuses[1]);
console.log(statuses.length);

