function fill(N, value) {

    let numbers = [];
    numbers[N] = value;
    numbers.fill(value, 1, N);

    return numbers;
}


function sievePrimes(N){
    let numbers = fill(N, true)
    for (let i = 2; i <= N; i++) {

        let mult = 2;
        let current = i;
        while (current <= N) {
            current = i * mult;
            mult++;
            if (current > N) {
                break;
            }
            numbers[current] = false;
        }

    }


    let primes =[];
    for (let i = 1; i <= N; i++) {

        if (numbers[i]){
            primes.push(i);
        }

    }
    primes.shift();
    return primes; //remove 1
}



function semiPrimes(N){
    let numbers =  fill(N, false);
    let primes = sievePrimes(N);
    for (let i = 0; i <primes.length; i++) {

        let p1 = primes[i];
        let p2=primes[0];
        let current = p2;
        for (let j = 0; p1*p2 <= N ; j++) {
            p2 = primes[j];
            current = p1*p2;

            if (current > N) {
                break;
            }
            numbers[current] = true;
        }

    }


    let semiPrimes =[];
    for (let i = 1; i <= N; i++) {

        if (numbers[i]){
            semiPrimes.push(i);
        }

    }
    return numbers;
    //return semiPrimes;
}


function solution(N, P, Q){


    let semi = semiPrimes(N);

    let appeared =[0];

    for (let i=1;i <= N ;i++){

        if (semi[i]){
            appeared[i]=appeared[i-1]+1
        }else{
            appeared[i]=appeared[i-1]
        }
    }

    console.log(appeared);
    let results = [];
    for(let i =0; i < P.length; i++){
        results.push(appeared[Q[i]] - appeared[P[i]-1]);
    }
    return results;
}

let P = [1,4,16];
let Q = [26,10,20];
console.log(solution(30,P,Q));