function fibonacciVerification(number) {
    let a = 0;
    let b = 1;

    while (b < number) {
        const temp = b;
        b = a + b;
        a = temp;
    }
    if (b === number) {
        console.log(number + " pertence à sequência de Fibonacci");
    }else{
        console.log(number + " não pertence à sequência de Fibonacci");
    }
}

// const numberVerification = 28;
const numberVerification = 13;

fibonacciVerification(numberVerification);