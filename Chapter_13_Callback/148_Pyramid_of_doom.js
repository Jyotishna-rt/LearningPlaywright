//pyramid of doom

function step1(callback){
    console.log("Open brwoser");
    callback();
}

function step2(callback){
    console.log("Navigate to Page");
    callback();
}

function step3(callback){
    console.log("Click button");
    callback();
}


step1(function(){
    step2(function(){
        step3(function(){
            console.log("Done");
        })
    })
})