class APIClient {
    public baseURL: string;
    private apiKey: string; 
    protected timeout: number;

    constructor(baseURL: string, apiKey: string, timeout: number) {
        this.baseURL = baseURL;
        this.apiKey = apiKey;
        this.timeout = timeout;
    }
   

private getAuthHeader(): string {
    return "Bearer " + this.apiKey;
}

public sendRequest (path: string, method: string): void {
    console.log(method + this.baseURL + path);
    console.log("Auth Header: " + this.getAuthHeader());
    console.log("Timeout: " + this.timeout);
}
}

class UserAPIClient extends APIClient {
    constructor(baseURL: string, apiKey: string, timeout: number) {
        super(baseURL, apiKey, timeout);
    }
}

let client = new UserAPIClient("https://api.example.com", "my-secret-api-key", 5000);
console.log("Base URL: " + client.baseURL);
client.sendRequest("/users", "GET");

