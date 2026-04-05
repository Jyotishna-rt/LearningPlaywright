//promise chaining - the solution of callback hell

function opebbrowser(){
    return new Promise(function(resolve){
   resolve("open the browser");
    })
}

function gotoLogin(){
    return new Promise(function(resolve){
   resolve("Logged in sucessfully");
    })
}

function enterCredentials(){
    return new Promise(function(resolve){
   resolve("Credentials entered");
    })
}

function clickLogin(){
    return new Promise(function(resolve){
   resolve("Login button clicked");
    })
}



opebbrowser().then(function(msg){
    console.log("Step 1",msg);
    return gotoLogin();
}).then(function(msg){
    console.log("Step 2",msg);
    return enterCredentials();
}).then(function(msg){
    console.log("Step 3",msg);
    return clickLogin();
}).then(function(msg){
    console.log("Step 4",msg);
}).catch(function(error){
    console.log(error);
}).finally(function(){
    console.log("test completed");
})

/*
//we can use this independent function
let gotoLogin = openbrowser().then(function(msg){
    console.log(msg);
});

let entercredentials = gotoLogin().then(function(msg){
    console.log(msg);
});
let clickLogin = enterCredentials().then(function(msg){
    console.log(msg);
});
*/