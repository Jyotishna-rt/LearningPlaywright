class car{
//attributes
//constructor
constructor(name){
    this. name = name;
}
    drive(){
        console.log("driving"+ this.name);
    }

    print(){
        console.log("details of the car: "+ this.name)
    }
}


let tesla = new car("tesla model v3");
tesla.drive();
tesla.print();

