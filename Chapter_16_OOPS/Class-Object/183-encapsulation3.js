class ICICI{
    #balance;
    constructor(balance, name){
        this.#balance = balance;
        this.name = name;

    }

    getBalance(){
        return this.#balance;
    }
    setBalance(balance, ifcashier){
        if(ifcashier){
            this.#balance = balance;
            console.log("Balance updated successfully");
        }
        else{
            console.log("Only cashier can update balance");
        }
}
}
let p = new ICICI(1000, "Alice");
console.log(p.name);
console.log(p.getBalance());
p.setBalance(2000, false);
console.log(p.getBalance());
p.setBalance(2000, true);
console.log(p.getBalance());


let p2 = new ICICI(500, "Bob");
console.log(p2.name);
console.log(p2.getBalance());
p2.setBalance(1000, true);
console.log(p2.getBalance());