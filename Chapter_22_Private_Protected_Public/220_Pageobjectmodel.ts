class basePage{
    protected baseUrl : string; 
    constructor(baseUrl : string){
        this.baseUrl = baseUrl;
    }   

    protected   navigateTo(path : string) : void {
        console.log("Navigating to: " + this.baseUrl + path);
}

}


class LoginPage extends basePage {
    constructor(baseUrl : string){
        super("https://example.com");
    }   

    login(username : string, password : string) : void {
        this.navigateTo("/login");
        console.log("Logging in with username: " + username);
    }   

}
let page = new LoginPage("https://example.com");
page.login("user1", "password123");         