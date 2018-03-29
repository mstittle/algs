

function fib(n) {
    function fibr(n, prev, next) {
        if (n == 0) 
            return prev;
        else if ( n == 1)
            return next;
        return fibr(n-1, next, next+prev)
    }
    return fibr(n, 0, 1);
}

function fibrrr(n) {
    if ( n < 2)
        return n;

    return fib(n-1)+fib(n-2);
}

const f3 = fib(5)
console.log(f3)

function fibRecursive(n, b = 0, a = 1) {
    if (n === 0) {
      return b;
    } else {
      return fibRecursive(n - 1, a, a + b);
    }
  }

const f5 = fibRecursive(5)
console.log(f5)