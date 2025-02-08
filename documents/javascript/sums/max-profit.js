function solution(A) {


    if (A.length === 0 || A.length === 1) {
        return 0;
    }


    let profits = []

    for (let i =1 ; i < A.length ; i++){
        profits.push(A[i]-A[i-1]);
    }

    if (profits.length ===1){
        return profits[0]>0 ?profits[0]:0;
    }

    let max = 0;
    let currentSlice = 0;


    for (let i=0; i < profits.length; i++){

        currentSlice = Math.max(0, currentSlice+profits[i]);
        max = Math.max( max, currentSlice);

    }

    return max;

}

let A = [5, 3, 2, 8, 5, 10];
//let A = [10, 0, 4, 5];


console.log(solution([8, 9, 3, 6, 1, 2]));