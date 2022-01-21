function calc(operation, a, b){
    if(operation == 'sum'){
        return a + b;
    }
    else if(operation === 'minus'){
        return a - b;
    }
    else if(operation === 'multi'){
        return a * b;
    }
    else if(operation === 'divide'){
        return a / b;
    }
    else if(operation === 'pow'){
        return Math.pow(a, b);
    }
    else if(operation === undefined || a === undefined || a === null || b === undefined || b === null){
        return "Error";
    }
    else{
        return "Unknown operation"
    }
}

console.log(calc('sum'))