let value = "5";

switch(value){

    case 5:
        console.log("value is number");
        break;

    case "5":
    console.log("Value is a string");
    break;
}

//output value is string
//switch uses string ===, so "5" !==5 (different types)