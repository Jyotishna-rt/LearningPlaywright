//interface for test hook function
interface TestHook{
    (testName: string, status: string): void;
}


let beforeTest: TestHook = function(testName: string, status: string): void {
       console.log(`Before Test: ${testName}, Status: ${status}`);
};


let afterTest: TestHook = function(testName: string, status: string): void {
       console.log(`After Test: ${testName}, Status: ${status}`);
};

beforeTest("Login Test", "Started");
// Simulate test execution
setTimeout(() => {
    afterTest("Login Test", "Passed");
}, 2000);

afterTest("Login Test", "Passed");