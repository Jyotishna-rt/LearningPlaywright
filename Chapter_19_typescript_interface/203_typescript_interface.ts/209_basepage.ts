interface basePage{
    url: string;
    title: string;
    navigate(): void;
    getTitle(): string;
}


interface LoginPage extends basePage{
    enterUsername(username: string): void;
    enterPassword(password: string): void;
    clickLogin(): void;
}


let loginPage : LoginPage = {
    url: "https://example.com/login",
    title: "Login Page",
    navigate: function(): void {
        console.log(`Navigating to ${this.url}`);
    },
    getTitle: function(): string {
        return this.title;
    },
    enterUsername: function(username: string): void {
        console.log(`Entering username: ${username}`);
    },
    enterPassword: function(password: string): void {
        console.log(`Entering password`);
    },
    clickLogin: function(): void {
        console.log(`Clicking login button`);
    }
};   


console.log("Login Page Title:", loginPage.getTitle());
loginPage.navigate();
loginPage.enterUsername("testuser");
loginPage.enterPassword("password123");
loginPage.clickLogin();
