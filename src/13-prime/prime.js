//Prime determination

const isPrime = (n) => {
    if (n < 2) return false;

    for (let i = 2; i <= Math.sqrt(n); i++) {
        if (n % i === 0) return false;
    }
    return true;

}
console.log(isPrime(0)) // false
console.log(isPrime(1)) // flase
console.log(isPrime(2)) // true
console.log(isPrime(3)) // true
console.log(isPrime(4)) // false
module.exports = isPrime;