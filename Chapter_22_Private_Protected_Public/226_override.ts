class Father{
    home():void{
        console.log("Father's home");
    }   
}


class Pramod extends Father{        
    override home(): void {
        console.log("Pramod's home");
    }
}

let pramod = new Pramod();
pramod.home();  