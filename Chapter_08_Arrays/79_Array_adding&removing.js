let arr = [1,2,3];


//add no to end
//use function push

arr.push(4);
console.log(arr);

//pop remove the last elemnet from tghe array
arr.pop();
console.log(arr);

//push multiple element
arr.push(5,6);
console.log(arr);


//add at the beginning
arr.unshift(0);
console.log(arr);


//remove 1 element
arr.shift(0);
console.log(arr);


//splice (start, deleteCount,........itemstoAdd)
arr.splice(2,1);// indexing 2 se 1 element remove and 2 remove next will be remove
console.log(arr);
arr.splice(2,2);//remove 5,6
console.log(arr);

//3 slice
arr.splice(2,0, 99,5,6); // in indexing 2 ->0 means ->remove nothing ->99 add
console.log(arr);



//4 splice
arr.splice(1,2,10,30);  //at 1 indexing->two element add  it  remove previous
console.log(arr);