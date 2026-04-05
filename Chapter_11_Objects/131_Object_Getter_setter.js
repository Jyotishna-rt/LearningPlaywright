//getter setter  y using object
const user = {
    firstname:"Jyotsna",
    lastname :"rawat",
    get fullName(){
        return this.firstname + this.lastname;
    },
    set fullName(value){
        [this.firstname, this.lastname]= value.split("  ");

    }
};
//class is not like this in java 
//typescript is going to use

console.log(user.fullName);
user.fullName = "Amit shah";
console.log(user.fullName);