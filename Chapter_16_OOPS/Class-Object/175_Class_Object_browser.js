class TestCase{
  constructor(name, status, priority){
     this.name = name;
     this.status = status;
     this.priority = priority;
  }

  display(){
    console.log("name: "+ 
        this.name);
    console.log("status: "+ 
        this.status);
    console.log("priority: "+ 
        this.priority); 
  }}


  let login = new TestCase("Login", "Pass", "High");
  let signup = new TestCase("Signup", "Fail", "Medium");
  login.display();
    signup.display();


    //p0 = learn
    //p1 = practice
    //p2 = test/implement
    //p3 = IPL


    //function vs method
    //method is functions but inside the class
    