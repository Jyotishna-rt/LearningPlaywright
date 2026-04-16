enum Severity{
    Low = "LOW",
    Medium = "MEDIUM",
    High = "HIGH"
}

console.log("Severity Levels:", Severity.Low, Severity.Medium, Severity.High);

function logSeverity(severity: Severity): boolean{
    return severity === Severity.High;
}

console.log("Is High Severity?", logSeverity(Severity.High));
console.log("Is Medium Severity?", logSeverity(Severity.Medium));
console.log("Is Low Severity?", logSeverity(Severity.Low));


