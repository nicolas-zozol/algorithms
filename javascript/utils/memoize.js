"use strict";
exports.__esModule = true;
var cache = {};
var debugMemo = false;
function setDebugMemo(val) {
    debugMemo = val;
}
exports.setDebugMemo = setDebugMemo;
function getMemo() {
    var args = [];
    for (var _i = 0; _i < arguments.length; _i++) {
        args[_i] = arguments[_i];
    }
    var key = JSON.stringify(args);
    if (debugMemo) {
        console.log('memo tried for ', key);
    }
    if (cache[key] !== undefined) {
        if (debugMemo) {
            console.log('memo returned', key, 'value : ', cache[key]);
        }
        return cache[key];
    }
    return undefined;
}
exports.getMemo = getMemo;
function setMemo(result) {
    var args = [];
    for (var _i = 1; _i < arguments.length; _i++) {
        args[_i - 1] = arguments[_i];
    }
    var key = JSON.stringify(args);
    cache[key] = result;
    console.log('setting memo for ', key, result);
}
exports.setMemo = setMemo;
function callMemo(fn) {
    var args = [];
    for (var _i = 1; _i < arguments.length; _i++) {
        args[_i - 1] = arguments[_i];
    }
    //const key = JSON.stringify(args);
    console.log('arguments', args);
    var get = getMemo(args);
    if (get !== undefined) {
        return get;
    }
    var result = fn.apply(null, args);
    setMemo(result, args);
    return result;
}
exports.callMemo = callMemo;
function op(x, y) {
    console.log('op called for', x, y);
    return x + y;
}
function memoOp(x, y) {
    return callMemo(op, x, y);
}
/*
debugMemo = true;
console.log(4, 5, memoOp(4,5));
console.log(4, 7, memoOp(4,7));
console.log(4, 5, memoOp(4,5));
console.log(4, 7, memoOp(4,7));
*/ 
