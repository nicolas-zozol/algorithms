let primes = [1,2,3,5,7];
let lastCheckedForPrime = 7;
let lastPrime = 7;


function isPrime(n){
    var divisor = 2;

    while (n > divisor){
        if(n % divisor === 0){
            return false;
        }
        else
            divisor++;
    }
    return true;
}


function asYouGoPrime(n){

    if (n <=lastCheckedForPrime){
        return;
    }

    while(lastCheckedForPrime !== n){
        lastCheckedForPrime ++;
        if (isPrime(lastCheckedForPrime)){
            primes.push(lastCheckedForPrime);
            lastPrime=lastCheckedForPrime;
        }
    }

}




//Nik: as you go
function solution(N){

    let worker = N;
    asYouGoPrime(N);
    let count = 0;

    let i =0;
    let divisor = primes[i];
    while(divisor  <= N){ // case of pure square ?
        
        
        if (N % divisor === 0){
            console.log('found', {N, divisor});
            count++;
        }
        
        i++;
        asYouGoPrime(divisor*2);
        divisor = primes[i];        
    }


    return count+1;
}

//IVlad
function enumerateDivisors(N){

    let divisors = 1;

    let worker = N;
    for (let divisor = 2; divisor * divisor <=N ; divisor++){

        let power = 0;
        while(worker % divisor ===0 ){
            worker=worker/divisor;
         //   console.log({divisor, power, worker});
            power++;
        }
        //formula

        divisors = divisors*(power+1);
    }

    if(worker>1){ // worker has to be a divisor, and the biggest. So power is 1
       // console.log('remaining worker', worker);
        divisors*=2;
    }
    return divisors;
}

console.log(28,enumerateDivisors(28));
console.log(14,enumerateDivisors(14));
console.log(9,enumerateDivisors(9));
console.log(1,enumerateDivisors(1));
console.log("____SOLUTION____");
console.log(28,solution(28));
console.log(14,solution(14));
console.log(9,solution(9));
console.log(1,solution(1));

