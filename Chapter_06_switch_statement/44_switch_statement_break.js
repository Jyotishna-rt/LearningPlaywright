//switch
// 0 = sunday, 1= monday , 
let day = 4;
switch (day ){
    case 0 : 
    console.log("Sunday : Rest day");
    break;

    case 1:
        console.log("Monday: Sprint planning");
        break;

    case 2:
        console.log("Tuesday : Development");
        break;
    case 3:
        console.log("Wednesday: code review");
        break;
    case 4:
        console.log("Thursday : Testing");
        break;
    case 5:
        console.log("Friday : Deployment");
        break;
    case 6:
        console.log("Saturday : Team outing");
        break;
    default:
         console.log("Invalid day number");
    }
