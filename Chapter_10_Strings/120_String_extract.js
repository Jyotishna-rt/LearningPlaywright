//extracting strings


let str = "Login_Test_Pass_001";

//slice(start,end)-negative indexes supported
console.log(str.slice(0,5)); //0 to 5
console.log(str.slice(11)); // 11 to last
console.log(str.slice(-3)); //001
//let testNumber = str.slice(-3);

//substring (start,end)-no negatives(treat as 0)
console.log(str.substring(6,10));//Test


//at() for single chars
console.log(str.at(0));//L
console.log(str.at(-1));//1