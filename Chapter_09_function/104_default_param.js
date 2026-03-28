function retry(testName , maxRetries = 3, delay = 100){
    console.log(`Retrying ${testName} up to ${maxRetries} times, ${delay}ms apart`);

}
retry("Login");//it will return default value
retry ("checkout",5);
retry ("Api test", 2, 500)
//now it will return parameters value