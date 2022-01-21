function calc(operation, a, b){
    switch(operation){
        case 'sum':
            return a + b
        case 'minus':
            return a - b;

        case 'multi':
            return a * b;
        
        case 'divide':
            return a / b;

        case 'pow':
            return Math.pow(a, b);
        
        case undefined:
        case null:
            return "Error";
    
        default:
            return "Unknown operation"
        
    }
}

console.log(calc('sum', 4))