//objects can store functions
//till we store key value pair

//now function can store
const calculator ={
    value : 10,
   //ame :"Pramod",
    add(n){
        this.value += n;
        //this.name
        return this;//10+5
    },
    subtract(n){
        this.value -= n;//15-6
        return this;
    }
}

console.log(calculator.add(5).subtract(6));//9