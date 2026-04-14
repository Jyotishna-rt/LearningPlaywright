interface BugReport{
    id: number;
    titile : string;
    description: string;
    severity :"Low" | "Medium" | "High";
    stepsToReproduce: string[];
};


function logBug(bug: BugReport): void{

    console.log("BUG-"+bug.id+": "+bug.titile);
    bug.stepsToReproduce.forEach(function(step : string, i :number){
        console.log(" "+(i+1)+". "+step);
    });

}


logBug({
    id : 1,
    titile : "Login button not working",
    description : "The login button does not respond when clicked.",
    severity :"High",
    stepsToReproduce : ["Step1 : open the vwo.com", "Step2: Click on the login button", "Step3: Observe that nothing happens"]
})


logBug({
    id : 2,
    titile : "Dashboard not working",
    description : "The dashboard is not loading properly.",
    severity :"High",
    stepsToReproduce : ["Step1 : open the vwo.com", "Step2: Click on the login button", "Step3: Observe that nothing happens"]
})