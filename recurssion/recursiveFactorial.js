function recFactorial(n) {
    if (n === 0) {
        return 1        
    }
    return n * recFactorial(n - 1)
}
console.log(
    recFactorial(5)
);