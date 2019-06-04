function solution(N){

    let maxSize = 0;
    let currentSize = 0;
    let started = false;
    let counting = false;
    let current = N;
    while (current > 0){

        if (current %2 === 1){
                if (started){
                    counting=false;
                    if (currentSize>maxSize){
                        maxSize = currentSize;
                    }
                    currentSize =0;
                }else{
                    started=true;
                }
        }else{
            if (started){
                currentSize++;
            }
        }
        current=current>>1;
    }
    return maxSize;
}
console.log(    solution(529 ));