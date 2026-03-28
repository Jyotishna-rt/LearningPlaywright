//callback function
//call
function placeorder(item, callback){
    console.log(".........Placing order........");
    callback();//function calling
        console.log(".........Post order........");// you can but callback calls at last
//multiple callback you can call
}

//you can have a function also
//define
function print(){
   console.log('callback -Done with the order');
}
//first way call
placeorder("Burger",print);  //function ---->anonomus functin)

//or
//second way
//anonmous function also call like this
placeorder("Burger",function(){
console.log("Anoy, I am also a function without name!");
});

//third way, arrow function
placeorder("Burger",()=>{
    console.log("Anoy, I am also a arrow function !");
});