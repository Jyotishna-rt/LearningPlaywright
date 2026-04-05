//basically help you to log

//default export -> export one main thing
export default function log(message){
    console.log("[LOG] " + message);
}//default will log this function

//suppose we have multiple loggers

function log2(message){
    console.log("[LOG] " + message);
}