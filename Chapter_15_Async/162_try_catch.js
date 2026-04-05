//error handling-try catch


//with promise you can use .catch()
//with async /await you use try and catch -eaxctly like javascript error handling
async function testAPI(){
  try{

    let result = await Promise.reject("500 error");
    console.log(result);
  }catch(error){
    console.log(error);
  }finally{
    console.log("Cleanup");
  }
    //try/catch/finally always run - wheether  the test passed or failed. just ;like aftereach() in cypress or playwright
}

testAPI();//500 error