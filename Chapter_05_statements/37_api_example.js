
 let statuscode = 200;

//api are working fine
if(statuscode == 200){
    console.log("sucessfull response");
}

else if(statuscode == 400){
    console.log("bad request");
}

else if(statuscode == 404){
    console.log("page not found");
}
else{
    console.log("some error occurred")
}