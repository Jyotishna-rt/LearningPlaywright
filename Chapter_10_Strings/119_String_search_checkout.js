//searching and checking

let url = "https://staging.vwo.com/api/login?retry=true";


//includes===>return true or false
console.log(url.includes("staging"));
console.log(url.includes("production"));

//starts wiuth/end with

console.log(url.startsWith("https"));
console.log(url.startsWith("http://"));
console.log(url.endsWith("true"));

//indexof/lastindex of
console.log(url.indexOf("a"));
console.log(url.lastIndexOf("a"));
//when there is no index => -1
console.log(url.indexOf("nothere"));

//search()-----accepts regex, returns index
console.log(url.search("staging"));//regex ->it seraches the after indexing
console.log(url.search(/login/));

console.log(url.search(/\d+/));