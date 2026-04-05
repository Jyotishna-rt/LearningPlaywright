let order = new Promise((resolve, reject) => {
  let foodready = true;
  if(foodready){
    resolve("Food is ready");
  }
  else{
    reject("Order cancelled");
  }

})

console.log(order);//food true then piza delivered

//promise is an object , it wraps a value that will be available later
