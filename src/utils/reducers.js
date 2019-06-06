function sumReducer(sum, next) {
    return sum + next
}

function maxReducer(max, next){
    return max <next ? next : max;
}


function minReducer(min, next){
    return next <min? next : min;
}

