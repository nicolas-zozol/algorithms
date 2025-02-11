function swap(array, i, j){

    const  t = array[i];
    array[i] = array[j];
    array[j]=t;
}


function immutableSwap(array, i, j){
    return swap(array.slice(), i, j)
}

