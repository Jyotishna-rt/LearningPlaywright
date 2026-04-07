/*
class jsna{
    child1;
    child2;

    constructor(){

    }
}

let p = jsna();
console.log(p.child1);//undefined

*/

class Person{

    //hide your child
    #child1;
    #child2;

    constructor(name, chi1, chi2){
        this.name = name;
        this.#child1 = chi1;
        this.#child2 = chi2;
    }
    mom(){
        return this.#child1;
    }

    dad(){
        return this.#child2;
    }
}

let p = new Person("Alice", "jenny", "jimmy");
console.log(p.name);
//console.log(p.child1);//undefined
//console.log(p.child2);//undefined
console.log(p.mom());//jenny
console.log(p.dad());//jimmy
console.log("..............................")

//getter setter method 

class Human{

    //hide your child
    #child3;
    #child4;

    constructor(name1, chi3, chi4){
        this.name1 = name1;
        this.#child3 = chi3;
        this.#child4 = chi4;
    }
    
    getetchild1(){
    return this.#child3;
}
setchild1(name){
    this.#child3 = name;
}
    
}

let p1 = new Human("Alice", "jenny", "jimmy");
console.log(p1.name1);
//console.log(p1.child3);//undefined
//console.log(p1.child4);//undefined
console.log(p1.getetchild1());//jenny
p1.setchild1("julia");
console.log(p1.getetchild1());//julia


