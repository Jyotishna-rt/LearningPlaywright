let rawResponse: unknown ={
    status: 200,
    data: {
        name: "Alice",
        age: 30
    }};

    interface ApiResponse {
        status: number;
        data: {
            name: string;
            age: number;
        };
    }   

    let response: ApiResponse = rawResponse as ApiResponse;

    console.log(`Status: ${response.status}`);
    console.log(`Name: ${response.data.name}`);
    console.log(`Age: ${response.data.age}`);   
