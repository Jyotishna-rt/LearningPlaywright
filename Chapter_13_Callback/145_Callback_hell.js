//call back hell
//real QA scnearios :E2E login flow
function openBrowser(callback){
    console.log("Opening the browser");//opening the bowser
    setTimeout(function(){ //after 2 sec exceute this
        console.log("Step 1-browser starting...");
        callback();
    },500);
}


function gotoLoginpage(callback){
    //opening the login page
    setTimeout(function(){ //after 2 sec exceute this
        console.log("Step 2-Login page loaded...");
        callback();
    },500);
}


function enterCredentials(callback){
    //opening the login page
    setTimeout(function(){ //after 2 sec exceute this
        console.log("Step 3-Credentials entered...");
        callback();
    },500);
}

function clickLoginButton(callback){
    //opening the login page
    setTimeout(function(){ //after 2 sec exceute this
        console.log("Step 4-Login Button clicked...");
        callback();
    },500);
}

openBrowser(function(){
    gotoLoginpage(function(){
        enterCredentials(function(){
            clickLoginButton(function(){
                console.log("test complete");
            })
        })
    })
})