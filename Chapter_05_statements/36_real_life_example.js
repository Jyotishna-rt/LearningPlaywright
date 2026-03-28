let isLoggedIn = true;
let userRole = "admin";

//app.vwo.com ->viewer, editor, admin 
//viewer -> limited view
// editor -> can edit and view
//admin -> can do all the things

if(isLoggedIn){
if(userRole === "admin"){
    console.log("You have all the access");
}
else if(userRole === "editor"){
    console.log("You can edit and view the content");
}
else if(userRole === "viewer"){
    console.log("You can only view the content");
}
else{
    console.log("role not defined");
}
}
else{
    console.log("You are not loggedIn");
}

