class TestRunner{
    static totalTests = 0;
    static passCount = 0;
    constructor(name, passed){
        this.name = name;
        this.passed = passed;
        TestRunner.totalTests++;
        if(passed){
            TestRunner.passCount++;
       
     }
    }

    non_static_method(){
        console.log("This is a non static method");
    }

    static summary(){
        return TestRunner.passCount+"/"+TestRunner.totalTests+" passed";
    }
}

new TestRunner("Login", true);
new TestRunner("Signup", false);
new TestRunner("Cart", true);
new TestRunner("Checkout", true);
console.log(TestRunner.summary());//2/3 passed