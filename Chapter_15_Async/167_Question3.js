async function healthCheck(){
    let results = await Promise.allSettled([
        Promise.resolve("Auth : UP"),
        Promise.reject("User : DOWN"),
        Promise.resolve("Payment : UP")
    ]);

    results.forEach(function(r){
    let status = r.status === "fulfilled" ? "UP" : "DOWN";
    let msg = r.value || r.reason;
    console.log(`${msg} is ${status}`);
});
}

healthCheck();