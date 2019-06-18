
function solution(A) {


    if (A.length ===1){
        return 1;
    }

    let slices=[A[0]]; //represents the max of the slices
    let prevSliceMax = A[0];

    let max= A[0];


    for (let i=1;i < A.length ; i++){
        let c = A[i];
        if (c >max){            //new Slice
            prevSliceMax=max;
            max=c;
            slices.push(max);
           // console.log('adding ',max, {slices});
        }

        if (c < prevSliceMax){
            //joining
            while (c<prevSliceMax && slices.length>0){
                let removed=slices.pop();
                prevSliceMax=slices[slices.length-1];
                //console.log('removing ',removed, 'now:', slices);
            }
            // putting back max
           // console.log('putting back ',max);
            slices.push(max);
        }

    }


    return slices.length;

}


///let A = [1,5,4,6,2]; //OK
let A = [2,5,4,6,1,3,8,10];
//let A=[2]

console.log(solution(A));