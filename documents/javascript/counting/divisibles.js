function solution(A, B, K) {

    let count = 0;

    let x = A;
    if (x%K === 0){
        count ++;
    }
    do{
        x += K;
        if(x < B){
            count ++;
        }else{
            if (B%K ===0){
                count++;
            }
        }

    }while(x<B);


    return count;



}


console.log(solution(6,6,6));