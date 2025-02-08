// start end to avoid copies of array
function findExact(array, value, start, end) {

    sortArray(array);




}

function exactBinarySearch(array, value, start=0, end=array.length) {

    let length = end - start;
    if (length === 0) {
        return -1;
    }
    if (length === 1) {
        return array[start] === value ? value : -1;
    }
    let pivot = start + Math.floor(length / 2);
    if(array[pivot] === value){
        return pivot;
    }
    if (value < array[pivot]){
        return exactBinarySearch(array, value, start, pivot-1)
    }else{
        return exactBinarySearch(array, value, pivot, end);
    }

}

function sortArray(array) {
    array.sort((n1, n2) => n1 - n2);
}


let array = [2,6,8,10,15];
console.log(exactBinarySearch(array, 9));