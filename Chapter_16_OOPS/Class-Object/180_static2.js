class Student{
    static collegeName = "ABC College";

    constructor(name){
        this.name = name;
    }

    static display(){
        console.log("College Name: " + Student.collegeName);
    }
}

let amit = new Student("Amit");
let miti_jha = new Student("miti_jha");
let sumu = new Student("sumu");
let jsna = new Student("jsna");


console.log(Student.collegeName);//ABC College
console.log(amit.name); // Amit
console.log(miti_jha.name); // miti_jha
console.log(sumu.name); // sumu
console.log(jsna.name); // jsna
Student.display();//College Name: ABC College
