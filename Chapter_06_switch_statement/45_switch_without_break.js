//switch
// 0 = sunday, 1= monday , 

//without break statement, all the cases after the matched case will be executed until a abreak is encountered or 

let day = 10;
switch (day ){
    case 0 : 
    console.log("Sunday : Rest day");

    case 1:
        console.log("Monday: Sprint planning");

    case 2:
        console.log("Tuesday : Development");
       
    case 3:
        console.log("Wednesday: code review");
     
    case 4:
        console.log("Thursday : Testing");
       
    case 5:
        console.log("Friday : Deployment");
     
    case 6:
        console.log("Saturday : Team outing");
        break;
    default:
         console.log("Invalid day number");
    }
