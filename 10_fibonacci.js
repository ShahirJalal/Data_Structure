function fibonacci(n){
    num1 = 0;
    num2 = 1;
    for (let i = 1; i <= n; i++) {
        console.log(num1)
        numNext = num1 + num2
        num1 = num2
        num2 = numNext
    }
}

fibonacci(8)