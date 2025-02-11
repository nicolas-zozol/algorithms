

let leftIndex, rightIndex;

let countLeft = 0;
let countRight = 0;

function solution(A, x){

    if(A.length ===0){
        // TODO: check conditions could be -1
        return -1;
    }

    if(A.length ===1){
        return 0;
    }


    leftIndex =0;
    rightIndex = A.length-1;

    while (rightIndex -leftIndex>1){
        if(countLeft>countRight){
            addRight(A,x);
           // console.log('addedRight', countLeft, countRight, leftIndex, rightIndex);
        }else {
            addLeft(A,x);
          //  console.log('addedLeft', countLeft, countRight, leftIndex, rightIndex);
        }

    }

    return leftIndex+1;

}


function addLeft( A,x ){
    for (let i = leftIndex; i< rightIndex-1; i++){
        if(A[i] ===x){
            countLeft++;
            leftIndex=i+1;
            return;
        }
        leftIndex=i+1;
    }

    // terminate case
}

function addRight(A, x){
    for (let i = rightIndex; i> leftIndex+1; i--){
        if(A[i] !== x){
            countRight++;
            rightIndex=i-1;
            return;
        }
        rightIndex=i-1;
    }
}

//let A = [3,4,5,4,3,3,5,1], x=4;
let A = [4,4,5,4,3,2,1,2,5,4,3,4,1], x=4;



console.log(solution(A,x));