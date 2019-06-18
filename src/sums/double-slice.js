function solution(A) {


    if ( A.length === 3) {
        return 0;
    }


    let max = 0;
    let currentSlice = 0;
    let y=1;


    for (let i=3; i < A.length; i++){

        if(A[i-1]<A[y]){

            let minimalIndex = minIndex(A, y, i );
            let minValue = A[minimalIndex];
            currentSlice = Math.max(0, currentSlice+A[i-1], currentSlice+A[i-1]+A[y]-minValue);


            y=minimalIndex;
        }else{
            currentSlice = Math.max(0, currentSlice+A[i-1]);
        }


        max = Math.max( max, currentSlice);

    }

    return max;

}


function minIndex(A, y, z){

    if (y ===z){
        return z;
    }
    let min = A[y];
    let result = y;
    for (let k = y ;k<z; k++){
        if( A [k]<min){
            result=k
        }
    }
    return result;
}


let A = [5, 3, 2, 8, 5, 10];
//let A = [10, 0, 4, 5];


console.log(solution([5, 3, 2, 8, -5, 10]));