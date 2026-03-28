let grid = [
    [10,20,20],
    [40,50,60],
    [70,80,90]
];

//access roe and columns

console.log(grid[0][0]);
//2,1
console.log(grid[2][1]);
console.log(grid[1][2]);


grid[0][0] = 99;
console.log(grid[0][0]);
console.log(grid);


//length => no . of rows
console.log(grid.length);
console.log(grid[0].length);// 3 no of columns
console.log(grid[grid.length-1][grid[0].length-1]);//last element
//grid[2][2]


let testMatrix = [
    ["login","pass",200],
    ["checkout","fail",404],
    ["search","pass",100]
];

for(let i =0; i<testMatrix.length; i++){
    for(let j = 0; j<testMatrix[i].length; j++){
        console.log(testMatrix[i][j]);
    }
    console.log();
        
}
    console.log("..............");
  
    
    for(let row of testMatrix){
    for(let cell of row){
        process.stdout.write(cell+" ")
    }
    console.log();
        
}

console.log("..............");

//for each

testMatrix.forEach(row=>{
    row.forEach(cell => process.stdout.write(cell+" "));
    console.log();
});

console.log();

