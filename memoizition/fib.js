// memoizition
//      Js object, keys will be arg to fn, vlaue will the be the return value

const fib = (n, memo = {}) => {
    if (n in memo) return memo[n];
    if (n <= 2) return 1;

    return memo[n] = fib(n - 1, memo) + fib(n - 2, memo);
}

console.log(fib(6));
console.log(fib(7));
console.log(fib(8));
console.log(fib(70));