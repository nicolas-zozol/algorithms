function start(N) {

    let numbers = [];
    numbers[N] = true;
    numbers.fill(true, 1, N);

    return numbers;
}

function solution(N) {
    let numbers = start(N)
    for (let i = 2; i <= N; i++) {

        let mult = 2;
        let current = i;
        while (current <= N) {
            current = current * mult;
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
    console.log(primes);
}


solution(8000000);