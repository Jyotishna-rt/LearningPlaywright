interface APIReponse{
    readonly statusCode: number;
    body: string;
    headers?: string;
    responseTime?: number;
}


//readonly properties cannot be modified after initialization
let response: APIReponse = {
    statusCode: 200,
    body: '{"user":"admin"}'
};

console.log("status:", response.statusCode);
console.log("body:", response.body);
console.log("headers:", response.headers);

//not allowed read only
/*
interface point{
    readonly x: number;
    readonly y: number;
}

const point: point = {x: 10, y: 20};//cannot modify

*/

//readonly array
interface Data{
    readonly items: readonly number[]
}

