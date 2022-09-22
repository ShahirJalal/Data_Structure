function factorial(n){
    a = 1
    for (let i = n; i > 0; i--) {
        fact = a *= i
    }
    console.log(fact)
}

factorial(8)