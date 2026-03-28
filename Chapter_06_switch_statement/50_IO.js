let testscore = 85;

switch(true){
    case (testscore >= 90):
    console.log("Outstanding -Top performer");
    break;

    case (testscore >= 85):
    console.log("Excellent -Above expectations");
    break;

    case (testscore >= 70):
    console.log("Good -Meets expectations");
    break;

    case (testscore >= 50):
    console.log("Needs improvement ");
    break;

   default:
    console.log("Failing - below expectations");
}