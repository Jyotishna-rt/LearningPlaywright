//status code within range of >=200 && our statuscode <300

function validatescore(score){
    if(score>=200 && score<=300){
        console.log('result is passed');
    }
}


validatescore(200);
validatescore(500);


//convert as expression

const  validatetatus = function(status){
    if(status>=200 && status<=300){
        console.log('result is passed');
    }
}


validatetatus(200);
validatetatus(500);

//by using arrow
const  validatetatus_arrow = (status)=>{
    if(status>=200 && status<=300){
        console.log('result is passed');
    }
}


validatetatus_arrow(200);
validatetatus_arrow(500);