interface testConfig{
    browser: string;
    headless: boolean;
    timeout: number;
    baseUrl: string;
}


let ciConfig: testConfig = {
    browser: "chrome",
    headless: true,
    timeout: 30000,
    baseUrl: "https://ci.example.com"
};

let localConfig: testConfig = {
    browser: "firefox",
    headless: false,
    timeout: 60000,
    baseUrl: "http://localhost:3000"
};


console.log("CI Config:", ciConfig);
console.log("Local Config:", localConfig);