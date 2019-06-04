// A binary Heap is a well formed filled binary tree with last elements on the left

let array = [1, 94, 6, 2, 8, 41, 6, -8, 8, 9, 12, 3, 7, -9 ,78, 78, 98 , 65, 78, -5, 0, 0 , -5,-9];


// using start is to avoid subsequent copies of the array
// stopIndex is needed in the sort
// heapify only one level
function heapifySub(array, subRootIndex = 0, length=array.length) {


    let maxValue = array[subRootIndex];


    let leftIndex = leftChildIndex(subRootIndex);
    let rightIndex = rightChildIndex(subRootIndex);
    let leftValue = array[leftIndex];
    let rightValue = array[rightIndex];


    let swapedLeft, swapedRight = false;


    if (leftIndex < length && leftValue > maxValue) {
        maxValue = leftValue;
        swap(array, subRootIndex, leftIndex);
        swapedLeft = true;
    }

    if (rightIndex < length && rightValue > maxValue) {
        swap(array, subRootIndex, rightIndex);
        swapedRight = true;
    }

    if (swapedRight) {
        heapifySub(array, rightIndex, length);
    }
    if (swapedLeft) {
        heapifySub(array, leftIndex, length)
    }

}


function heapify(array, length=array.length) {

    for (let i = length; i >= 0; i--) {
        heapifySub(array, i, length);
    }

}


function sort(array){

    heapify(array);
    console.log('init heap', array);

    const lastIndex = array.length-1;
    for (let i = lastIndex ; i >=1 ; i--){
        swap(array, 0, i);
       // console.log('swaped',i, array);
        heapifySub(array, 0, i); // length is tricky
        //console.log('heapified', 'length:', i, array);
    }

}

function leftChildIndex(i) {
    return 2 * i + 1;
}

function rightChildIndex(i) {
    return 2 * i + 2;
}


function swap(array, i, j) {

    const t = array[i];
    array[i] = array[j];
    array[j] = t;
}

function getParentIndex(array, index) {
    const length = array.length;
    if (index <= 1) {
        return 0;
    }

    return (index - 1) / 2;
}


heapify(array, 6);
sort(array);
console.log(array);

