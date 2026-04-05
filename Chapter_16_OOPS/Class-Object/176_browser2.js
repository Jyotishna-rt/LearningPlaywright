class Browser{
    constructor(name)
{
    this.name = name;
    this.isOpen = true;
    console.log(name +"browser is opened");
}}


let chrome = new Browser("chrome");
let firefox = new Browser("firefox");


console.log(chrome.isOpen);
console.log(firefox.isOpen);