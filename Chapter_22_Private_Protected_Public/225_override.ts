class baseTest{
    setup():void{
        console.log("Setting up base test...");     
    }

    teardown():void{
        console.log("Tearing down base test...");
    }   
}

class LoginTest extends baseTest{

    override setup(): void {
        console.log("login test setup...");
    }   

}


let test = new LoginTest();
test.setup();
test.teardown();    