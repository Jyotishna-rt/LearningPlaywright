class APIClinet{
    constructor(baseURL)
{
    this.baseURL = baseURL;
}
  get(path){
    return this.baseURL + path;
  }

}


let stagingClient = new APIClinet("https://staging.api.com");
let prodClient = new APIClinet("https://prod.api.com");

console.log(stagingClient.get("/users"));
console.log(prodClient.get("/users"));

