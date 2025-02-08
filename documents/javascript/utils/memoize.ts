const cache = {};

let debugMemo = false;


export function setDebugMemo(val:boolean){
    debugMemo = val;
}
export function getMemo(...args) {

    const key = JSON.stringify(args);
    if (debugMemo){
        console.log('memo tried for ', key);
    }
    if (cache[key] !== undefined) {
        if (debugMemo){
            console.log('memo returned', key, 'value : ',cache[key]);
        }
        return cache[key];
    }

    return undefined;
}

export function setMemo(result, ...args){
    const key = JSON.stringify(args);
    cache[key] = result;
    console.log('setting memo for ', key, result);
}

export function callMemo(fn, ...args){
    //const key = JSON.stringify(args);
    console.log('arguments', args);
    const get = getMemo(args);
    if(get !== undefined){
        return get;
    }
    const result =  fn.apply(null, args);
    setMemo(result, args)
    return result;
}


function op(x, y){
    console.log('op called for', x, y);
    return x + y;
}

function memoOp(x, y){
    return callMemo(op, x, y)
}

/*
debugMemo = true;
console.log(4, 5, memoOp(4,5));
console.log(4, 7, memoOp(4,7));
console.log(4, 5, memoOp(4,5));
console.log(4, 7, memoOp(4,7));
*/