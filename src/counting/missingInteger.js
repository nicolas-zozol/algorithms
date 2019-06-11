
let checked=[true, false];

function solution(A) {

    for (let i =0; i < A.length ; i++){

        let value = A[i];
        if (value>0){
            checked[value] = true;
        }

    }

    let result = find();
    if (result<1){
        return 1;
    }
    return result;

}


function find(){

    let i =1;
    let found = false;
    while (!found){

        if( checked[i] !==true ){
            return i;
        }

        i++;
    }
}


console.log(solution ([-1, -3, 0,1,1,1,2,2,5,7,2]));