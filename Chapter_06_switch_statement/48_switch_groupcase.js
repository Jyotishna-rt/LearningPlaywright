let browser = edge;
switch(browser){
    case "chrome":
    case "edge":
    case "Brave":
    case "opera":
        console.log("Chromium Project");
        break;
            
    case "firefox":
        console.log("Mozilla foundation");
        break;

    case "safari":
        console.log("Apple");
        break;
    
    default:
        console.log("unknown browser");

       
}