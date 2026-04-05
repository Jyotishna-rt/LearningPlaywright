//all promises combined in one go
let checkAuth = Promise.resolve("Auth Ok");
let checkDb = Promise.resolve("Db Ok");
let checkCache = Promise.resolve("Cache Ok");

Promise.all([checkAuth, checkDb, checkCache]).then(function(results){
    console.log(results);
})

//2 thing
Promise.all([
    Promise.resolve("OK"),
    Promise.reject("DB Down"),
    Promise.resolve("OK")
]).then(function(r){
    console.log(r);
}).catch(function(err){
     console.log(err);
});
   
