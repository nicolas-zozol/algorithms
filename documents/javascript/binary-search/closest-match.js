
function closestBinarySearch(array, value, start=0, end=array.length) {

    let length = end - start;


    let pivot = start + Math.floor(length / 2);

    let pivotValue =array[pivot];
    let previousValue =array[pivot-1];
    let nextValue = array[pivot+1]
    if(pivotValue === value){
        return pivot;
    }

    if (value < pivotValue ){
        if(pivot ===0){
            return 0;
        }

        if (previousValue<value){
            // return closest
            return value-previousValue<pivotValue-value ? pivot -1 : pivot;
        }
    }

    if (value > pivotValue ){
        if(pivot ===array.length-1){
            return pivot;
        }

        if (value<nextValue){
            // return closest
            return value-pivotValue<nextValue-value ? pivot : pivot+1;
        }
    }

    if (value < array[pivot]){
        return closestBinarySearch(array, value, start, pivot-1)
    }else{
        return closestBinarySearch(array, value, pivot, end);
    }

}

function sortArray(array) {
    array.sort((n1, n2) => n1 - n2);
}


let array = [2,6,8,10,15];
