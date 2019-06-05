//const subValues = [];
const mapValues = {}

function opt(K, A) {

    const subValues=[];

    if (K === 1) {
        return val(A, A.length);
    }

    if (A.length === 1 ){
        return A[0];
    }

    for (let i = 1; i < A.length; i++) {
        const subVal = sub(K, A, i);
        subValues.push(subVal);

        mapValues[JSON.stringify({K, A, i})] = {A, K, i, subVal}
    }

    return  subValues.reduce(minReducer);

}

function sub(K, A, i) {

    //The large sum is the maximal sum of any block.
    let left = val(A, i);
    let rightOpt = opt(K - 1, A.slice(i))
    const larger = Math.max(left, rightOpt);
    return larger ;
}


function val(A, i) {

    let sum = 0;
    for (let j = 0; j < i; j++) {
        sum += A[j]
    }
    return sum;
}


function minReducer(min, next) {
    return next < min ? next : min;
}


function maxReducer(max, next){
    return max <next ? next : max;
}

const A = [2, 1, 5, 1, 2, 2, 2]

console.log('###',opt( 3,A));

const array = [7, 9, 2, 1];
console.log('>>>', opt(3, array));
console.log(mapValues);