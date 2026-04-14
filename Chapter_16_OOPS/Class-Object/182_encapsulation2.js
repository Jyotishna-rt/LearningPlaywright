class Car{
    constructor(name, model, year){
        this.name = name;
        this.model = model;
        this.year = year;
    }

    getEngine(){
        return "V8 Engine";
    }
    setEngine(engineType){
        console.log("Engine type set to: " + engineType);
    }
}

let car1 = new Car("BMW", "X5", 2020);
console.log(car1.name);
console.log(car1.model);
console.log(car1.year);
console.log(car1.getEngine());
car1.setEngine("V6 Engine");
