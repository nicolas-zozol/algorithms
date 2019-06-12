function isPrime(n) {
    var divisor = 2;

    while (n > divisor) {
        if (n % divisor === 0) {
            return false;
        }
        else
            divisor++;
    }
    return true;
}

function isFastPrime(n) {

    if (n === 2)
        return true;
    if (n === 3)
        return true;
    if (n % 2 === 0)
        return false;
    if (n % 3 === 0) {
        return false;
    }


    let i = 5;
    let w = 2;

    while (i * i <= n) {
        if (n % i === 0) {
            return false
        }

        i += w;
        w = 6 - w;
    }
    return true;
}

function solution(N) {


    let close = Math.floor(Math.sqrt(N));
    return around(N, close, 0)
}

let checkedPrime =false;

function around(N, close, delta) {

    if (delta > 20 && !checkedPrime) {
        if (isFastPrime(N)) {
            return (N + 1) * 2;
        }
        checkedPrime =true;
    }

    let a = close - delta;
    let b = a;
    while (a * b <= N) {
        if (a * b === N) {
            return 2 * (a + b);
        }
        b++;
    }
    //greedier
    return around(N, close, delta + 1)

}


console.log(17,isFastPrime(17));
console.log(1,isFastPrime(1));
console.log(2,isFastPrime(2));
console.log(27,isFastPrime(27));
console.log(15486451,isFastPrime(15486451));

/*

console.log(30, solution(30));
console.log(25, solution(25));
console.log(1, solution(1));*/