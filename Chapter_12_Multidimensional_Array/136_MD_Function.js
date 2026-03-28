//2d -common operations

let scores = [
    [85, 89,45],
    [56,78,89],
    [89,90,78]
];

let rowSums = scores.map(row=>row.reduce((a , b)=>a+b,0));
console.log(rowSums);


let suiteResult = [
    ["login-pass","register-pass","logout-pass"],//auth suite
    ["search-pass","filter-fail","sort-pass"],//search suite
    ["checkout-fail","payment-fail","confirm-pass"]//payment suite
];

for(let i =0; i<suiteResult.length; i++){
    for(let j= 0; j<suiteResult[i].length;j++){
        if(suiteResult[i][j].includes("fail"))
        console.log(suiteResult[i][j]);
    }
}



let exectimes=[
    [120,340,89,450],
    [200,410,100,520],
    [180,390,95,490]
]