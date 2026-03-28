let obj = {name:"Login"};
console.log(Object.getOwnPropertyDescriptor(obj,"name"));

//sometimes used in automation
/*
{
  value: 'Login',
  writable: true,  --------can change the value
  enumerable: true, --------shows in for...in/object.keys()
  configurable: true--------can delete or redefine
}



*/