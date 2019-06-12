function solution(K, A) {

    let count =0;

    let current = 0;
    for (let i=0; i < A.length ; i++){
        current+=A[i];
        if (current>=K){
            count++;
            current=0;
        }
        console.log({i, current, count});
    }

    return count;
}


solution(4, [1, 2, 3, 4, 1, 1, 3]);