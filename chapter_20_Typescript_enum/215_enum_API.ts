enum HTTPSMethods{
    Get = "Get",
    Post = "Post",
    Put = "Put",
    Delete = "Delete",
}

function sendRequest(method:HTTPSMethods, url: string): void{
    console.log(method + " "+url+"->200 OK");

}

sendRequest(HTTPSMethods.Get, "https://example.com/api/data");
sendRequest(HTTPSMethods.Post, "https://example.com/api/data");
sendRequest(HTTPSMethods.Put, "https://example.com/api/data/123");
sendRequest(HTTPSMethods.Delete, "https://example.com/api/data/123");