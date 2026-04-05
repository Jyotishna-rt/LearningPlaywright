//Q1 can we use async and then together-> no

/*
async function sayHello(){
    return "Hello, QA!";


    sayHello().then(function(result){
        console.log(result);
    });
    
}
    */



//Q2
async function getStatus() {
   let status = await Promise.resolve(200);
    console.log(status);
}

getStatus();//200


//Q3

async function testFlow() {
   let step1 = await Promise.resolve("Step 1 Opened the browser"); 
   console.log(step1);

   let step2 = await Promise.resolve("Step 2 Logged in successfully");
   console.log(step2);

   let step3 = await Promise.resolve("Step 3 Credentials entered");
   console.log(step3);
}

testFlow();


console.log("")


//Q4 error handling-try catch

async function riskyTest() {
    try {
        let data = await Promise.reject("Element not found");
        console.log(data);
    } catch (error) {
        console.error("An error occurred:", error);
    }
}

riskyTest();


//Q5 - 
async function apiTest(){
    try{
        let response = await Promise.resolve({ status: 200, body: "Created" });
        console.log("Status:",response.status);
        console.log("Body:",response.body);
    } catch(error){
        console.error("API call failed:", error);
}finally{
    console.log("Test completed");
}
    
}
apiTest();