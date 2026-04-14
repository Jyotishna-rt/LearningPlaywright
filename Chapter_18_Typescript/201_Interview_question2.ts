let statusCode : number[] = [200, 201, 300, 404, 500];
let testSuites : string[] = ["Smoke", "Regression", "E2E"];


console.log("Status Codes: ", statusCode);
console.log("Test Suites: ", testSuites);

let user : { name: string; status : string; duration :number } = {
    name: "Login test",
    status: "active",
    duration: 120
};
console.log(user.name +"->"+ user.status+"->"+user.duration+" seconds");
