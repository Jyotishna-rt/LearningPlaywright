function log(target: any, propertyKey: string, descriptor: PropertyDescriptor): PropertyDescriptor | void {
    const original = descriptor.value;

    descriptor.value = function(...args: any[]) {
        console.log(`Called ${propertyKey} with args: `, args);
        return original.apply(this, args);
    };

    return descriptor;
}


class Calculator{
    @log    
    add(a: number, b: number){
        return a + b;
    }
}
    const c = new Calculator();
    console.log(c.add(5, 10));