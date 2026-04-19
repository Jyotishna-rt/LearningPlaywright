function wrapResponse<T>(statusCode: number, data: T): { statusCode: number; data: T }{
    return {
        statusCode: statusCode,data: data
    };          
}

let userResponse = wrapResponse(200, { id: 1, name: "jyotsna" });
console.log("User Response:", userResponse);

let flagResponse = wrapResponse(404, "true");
console.log("Flag Response:", flagResponse);

let numberResponse = wrapResponse(200, 42);
console.log("Number Response:", numberResponse);
function wrapResponse<T>(statusCode: number, data: T): { statusCode: number; data: T }{
    return {
        statusCode: statusCode,data: data
    };          
}

let userResponse = wrapResponse(200, { id: 1, name: "jyotsna" });
console.log("User Response:", userResponse);

let flagResponse = wrapResponse(404, "true");
console.log("Flag Response:", flagResponse);

let numberResponse = wrapResponse(200, 42);
console.log("Number Response:", numberResponse);