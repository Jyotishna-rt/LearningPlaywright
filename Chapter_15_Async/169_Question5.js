//async function can return something

async function add(a,b){
    return a+b;

}

async function main(){
    let result = await add(2,3);
    console.log("sum:",result);

      let result2 = await add(result,30);
    console.log("sum:",result2);
}

main();