
function getString(name: string){
      return "jyotsna";
}

getString("jyotsna");
//getFirstResult(123);//errror not possible, bcoz it is string

//
function getFirstResultGeneric<T>(name: T[]): T{
    return name[0]!;
}

let firstcode = getFirstResultGeneric(["login", "signup"]);
let secondcode = getFirstResultGeneric([202, 400, 500]);

console.log("first code:", firstcode);
console.log("second code:", secondcode);