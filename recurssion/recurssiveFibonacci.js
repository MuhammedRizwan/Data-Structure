function recFibanocci(n) {
    if (n < 2) {
        return n;
    }
    return recFibanocci(n - 1) + recFibanocci(n - 2)
}
console.log(recFibanocci(6));