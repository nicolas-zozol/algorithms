

function solution(A){


    if (A.length ===0){
        return -1
    }

    if (A.length ===1){
        return A[0]
    }

    let previous = A[0];
    let stack = [previous];
    let inStack = previous;

    for (let i=1; i < A.length ; i++ ){

        let current = A[i];
        if (current === inStack|| stack.length ===0){
            stack.push(current);
            inStack = current;
        }else{
            inStack = stack.pop();
        }
        previous = current;
        console.log({previous, current, stack});
    }

    let candidate = null;

    if(stack.length >0){
        candidate=stack[0];
    }else{
        return -1;
    }

    //now counting
    let count = 0;
    for (let i=0; i < A.length; i++){
        if (A[i] === candidate){
            count ++;
        }
    }

    if (count > A.length/2){
        return candidate;
    }else{
        return -1;
    }

}



let A = [6,6,6,6,6,2,2,2,2];
console.log(solution(A));
