
let apicall = new Promise(function(resolve, reject){
  reject("500 error");

});

apicall
.then(function(data){
    console.log("data is sucess!!");
})
.catch(function(error){
    console.log(error);;

});
///catch()  runs only when the promise is rejected with an error
//.then() is completely skipped
