//you are working Api vALIDATION and response code

//response code : 200, 400, 401, 403, 404, 500

let responsecode = 200;
switch(responsecode){
    case 200 :
        console.log("OK : The request has succeeded");
        break;

    case 400 :
        console.log("Bad Request : The request was invalid or cannot be served");
        break;  
        
    case 401 :
        console.log("Unauthorized : The request requires user authentication");
        break;
    case 403 :
        console.log("Forbidden : The server understood the request, but is refusing to fulfill it");
        break;
    case 404 :
        console.log("Not Found : The requested resource was not found");
        break;
    case 500 :
        console.log("Internal Server Error : The server encountered an unexpected condition");
        break;
    default:
        console.log("Unknown response code");
    }
