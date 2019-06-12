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


function solution(N, P, Q, first =true){

    if(N>2000 && first){
        //find greatest
        let g=Q[0];
        for (let i=0;i<Q.length; i++){
            let c = Q[i];
            if (c>g){
                g =c;
            }
        }

        return solution(g, P, Q, false);
    }

    let semi = semiPrimes(N);
    let results = [];
    for(let i =0; i < P.length; i++){
        let count = 0;
        for (let n=P[i]; n <= Q[i]; n++){
            if (semi[n]){
                count ++;
            }
        }
        results.push(count);
    }
    return results;
}

let P = [4];
let Q = [8000];
console.log(solution(2600000,P,Q));