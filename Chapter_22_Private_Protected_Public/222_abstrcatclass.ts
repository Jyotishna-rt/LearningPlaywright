abstract class BaseTest{
     protected testName : string;

     constructor(testName : string){
        this.testName = testName;
     }

     abstract setUp() : void;
     abstract executeTest() : void;
     abstract tearDown() : void;    
      
        }   



class UITest extends BaseTest{

    setUp(): void {
        console.log(`Setting up UI test: ${this.testName}`);
    }   

    executeTest(): void {
        console.log(`Executing UI test: ${this.testName}`);                 
    }

    tearDown(): void {
        console.log(`Tearing down UI test: ${this.testName}`);
    }   
}