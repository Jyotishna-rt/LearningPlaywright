interface Executable{
    name:String;
    run():void;
    getStatuS():String;

}

class TestCase implements Executable{
    name: String;
    constructor(name: String){
        this.name = name;
    }
    run (): void{
        console.log("[RUN] "+this.name);
    }
    getStatuS(): String{
        return "PASS";
    }
}

let tc : Executable = new TestCase("Login Test");
tc.run();
console.log("Test Status:", tc.getStatuS());