class PlaywrightConfig{
    readonly baseURL: string;
    readonly timeout: number; 
    readonly headless: boolean;

    constructor(baseURL: string, timeout: number, headless: boolean) {
        this.baseURL = baseURL;
        this.timeout = timeout;
        this.headless = headless;
    }

    showConfig(): void {
        console.log("Base URL: " + this.baseURL);
        console.log("Timeout: " + this.timeout);
        console.log("Headless: " + this.headless);
    }
}

let config = new PlaywrightConfig("https://example.com", 30000, true);
config.showConfig();
// The following lines will cause errors because the properties are readonly
// config.baseURL = "https://newexample.com"; // Error: Cannot assign to 'baseURL' because it is a read-only property.
// config.timeout = 60000; // Error: Cannot assign to 'timeout' because it is a read-only property.
// config.headless = false; // Error: Cannot assign to 'headless' because it is a read-only property.   
