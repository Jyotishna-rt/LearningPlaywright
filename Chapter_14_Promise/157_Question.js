//q1

let p = new Promise(function(resolve, reject){
    resolve(42);
});

p.then(function(value){
    console.log("Answer:" ,value);
});//42


//q2
let p1 = new Promise(function(resolve, reject){
    reject("Something broke");
});
      p1.catch(function(error){
        console.log("Error:",error);
      })//something broke





      //Q3
      let p2 = Promise.resolve(5);

      p2.then(function(val){
         return val * 10;
      }).then(function(val){
         console.log("Final Value:", val);
      });



      //q4

      Promise.resolve(1)
      .then(function(val){
        console.log(val);
        return val + 1;
      }).then(function(val){
        console.log(val);
        return val + 1;
      }).then(function(val){
        console.log(val);
        return val + 1;
      });