function sumReducer(sum, next) {
    return sum + next
}

let arrays = [1, 2, -3, -4, 2, 7, -2, 3];


let allResults = []


function maxSum(array) {

    const length =array.length;
    if (length === 0) {
        return 0;
    }

    if (length === 1) {
        return array[0];
    }


    // Warning : using slice() is n! order
    let left=array.slice(0, length-1);
    let pivot = array[length-1];

    console.log({array, left, pivot});

    const val= Math.max(maxSum(left)+pivot, pivot);

    allResults.push(val);
    return val;

}

maxSum(arrays)

function maxReducer(max, next){
    return max <next ? next : max;
}


console.log(allResults.reduce(maxReducer,allResults[0]));


