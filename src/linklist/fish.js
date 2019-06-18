function fill(N, value) {

    let result = [];
    result[N - 1] = value;
    result.fill(value, 0, N - 1);

    return result;
}

function solution(A, B) {

    let count = A.length;

    if (count ===0 ){
        return 0;
    }

    if (count ===1 ){
        return 1;
    }




}


function eliminate0(done, flows , live){
    for (let i = done; i < flows.length; i++) {
        if (!live[i]){
            done =i
        }else if ( flows[i] === 0) {
            done = i;
        }
        else {
            break;
        }
    }

    return done;
}


function count(live){
    let count = 0;
    for (let i=0; i < live.length ; i++){
        if (live[i] === true){
            count ++;
        }
    }
    return count;
}

function fight(A, B) {


    return list;
}


//let A = [4, 3, 2, 5, 1, 8, 6], B = [0, 1, 0, 0, 1, 0, 1];

let A = [4,3,2,1,5], B=[0,1,0,0,0];
console.log(solution(A, B));
//console.log(eliminate0(0, [0,1,0,1,0,0,0,0,1], [true, false, true, true, true, true, true, true, true, true, true, true]));