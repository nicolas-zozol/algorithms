//const subValues = [];
let optMapValues = {}
let subMapValues = {}

function opt(K, A) {

    const subValues=[];

    if (K === 1) {
        return val(A, A.length);
    }

    if (A.length === 1 ){
        return A[0];
    }

    let optKey = JSON.stringify({K,A})
    if (optMapValues[optKey]!==undefined){
        const cacheValue = optMapValues[optKey];
        console.log('hit opt cache, ',cacheValue);
        return cacheValue;
    }

    for (let i = 1; i < A.length; i++) {
        let subKey = JSON.stringify({K, A, i});
        let subVal;
        if (subMapValues[subKey] !== undefined){
            const cacheValue = subMapValues[subKey];
            console.log('hit sub cache, ',cacheValue);
            subVal= cacheValue;
        }else{
            subVal = sub(K, A, i);
        }
        subValues.push(subVal);
        subMapValues[subKey] = subVal
    }

    const optResult = subValues.reduce(minReducer);
    optMapValues[optKey]=optResult;
    return  optResult;

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

subMapValues={};
optMapValues={};
console.log('>>>', opt(3, array));
console.log(subMapValues);
console.log(optMapValues);
