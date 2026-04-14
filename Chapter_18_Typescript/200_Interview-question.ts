function buildEndpointUrl(baseUrl: string, endpoint: string): string {
    return baseUrl + endpoint;
}


function isSucessCode(statusCode: number): boolean {
    return statusCode >= 200 && statusCode < 300;
}

function logTestStep(step: string): void {
    console.log("[STEP"+step);
}


console.log(buildEndpointUrl("https://api.example.com", "/users"));
console.log(isSucessCode(200));
console.log(isSucessCode(404));
logTestStep("Naviagate to Login page");
