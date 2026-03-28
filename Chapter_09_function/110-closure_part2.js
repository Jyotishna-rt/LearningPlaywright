function makecounter(start =0){
    let count = start;

    /*
    function increment(){
        count++;
    }
    function decrement(){
        count--;
    }
    function get(){
        return count;
    }
*/
    return{
       // increment, decrement, get();//multiple return not good method
increment(){count++;},
decrement(){count--;},//multiple return 
get(){return count; }
}
}

let counter = makecounter(0);
counter.increment();
counter.increment();
counter.increment();
console.log(counter.get());
counter.decrement();
console.log(counter.get());
