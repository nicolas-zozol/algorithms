function sumReducer(sum, next) {
    return sum + next
}

function maxReducer(max, next){
    return max <next ? next : max;
}

