//getter setter  y using object
const user = {
    firstname:"Jyotsna",
    lastname :"rawat",
    get fullname(){
        return this.firstname + this.lastname;
    },
    set fullname(value){
        [this.firstname, this.lastname]= value.split("  ");

    }
};


console.log(user.fullname);
user.fullname = "Amit shah";
console.log(user.fullname);