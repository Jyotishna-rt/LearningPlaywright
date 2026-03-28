const config= {
    //base urls
    baseUrl : 'https://localhost:3000',
    apiBaseUrl : "https://localhost:3000/api",
    testUser :{
     userName :"testuser@gmail.com",
     password:"pasd123",
    },

    //Logging
    loglevel:"INFO",

    //RETRY configuration
    retryCount:parseInt(process.env.RETRY_COUNT||'3',10),
}