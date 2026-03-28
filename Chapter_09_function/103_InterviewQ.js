function returntest(name, status, duration){

    return `${name}: ${status}: (${duration}ms)`;
}

console.log(returntest("Login","pass",320));