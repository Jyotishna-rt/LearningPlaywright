enum Browser{
    chrome = "CHROME",
    firefox = "FIREFOX",
    edge = "EDGE",
    safari = "SAFARI"
}



function launchBrowser(browser: Browser): void{
    switch(browser){
        case Browser.chrome:
            console.log("Launching Chrome browser");
            break;
        case Browser.firefox:
            console.log("Launching Firefox browser");
            break;
        case Browser.edge:
            console.log("Launching Edge browser");
            break;

            case Browser.safari:
                console.log("Launching Safari browser");
                break;
  
}
}

launchBrowser(Browser.chrome);
launchBrowser(Browser.firefox);
launchBrowser(Browser.edge);
launchBrowser(Browser.safari);


