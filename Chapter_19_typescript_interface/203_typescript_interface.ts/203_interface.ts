interface TestCase{
    id: number;
    name: string;
    status : string;
    duration: number;
}

let testCase1: TestCase= {
    id: 1,
    name: "Test Case 1",
    status: "Passed",
    duration: 120
};

console.log("Test Case 1:", testCase1);

let testCase2: TestCase= {
    id: 2,
    name: "Test Case 2",
    status: "Failed",
    duration: 150
};

console.log("Test Case 2:", testCase2);