let element : unknown ={
      tagName : "Button",
      textContext : "Click me",
      id : "btn1",
      disabled :"false" 
}


let button = element as {
    tagName: string;
    textContext: string;
    id: string;
    disabled: string;
};

console.log("Tag:", button.tagName);
console.log("Text:", button.textContext);
console.log("ID:", button.id);
console.log("Disabled:", button.disabled);  