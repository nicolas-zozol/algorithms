
function swap(heap, i, j) {

    const t = heap[i];
    heap[i] = heap[j];
    heap[j] = t;
}

function size(heap){
    return heap[0]
}

function increase(heap){
    heap[0] = heap[0] +1;
}

function decrease(heap){
    heap[0] = heap[0] -1;
}

function leftChildIndex(i) {
    return 2 * i ;
}

function rightChildIndex(i) {
    return 2 * i + 1;
}


function parentIndex(i){
    return Math.floor(i/2)
}


function insert(heap, value){

    let i = size(heap)+1;
    heap[i]=value;
    increase(heap);

    swapInsertion(heap, value, i);

}

function swapInsertion(heap, value, i){
    if (i === 1){
        return; //reached root
    }
    let pIndex = parentIndex(i);
    let parentValue = heap[pIndex];

    if (parentValue<value){
        swap(heap, pIndex, i);
        swapInsertion(heap, value, pIndex);
    }
}

// Do it once !
function maxHeapifyArray(array){
    let tree = [array.length,...array];
    maxHeapify(tree);

    return tree;
}

function maxHeapify(tree){

    let lastIndex = size(tree);
    let pIndex = parentIndex(lastIndex);
    for (let i = pIndex; i >=1 ; i--){
        maxSubify(tree,i);
    }

}

function maxSubify(heap, i){
    let leftIndex = leftChildIndex(i);
    let rightIndex = rightChildIndex(i);
    let leftValue = heap[leftIndex];
    let rightValue = heap[rightIndex];

    let largerChildrenIndex = leftIndex;

    if (rightIndex<size(heap) && rightValue>leftValue){
        largerChildrenIndex = rightIndex;
    }

    if (heap[largerChildrenIndex]>heap[i]){
        swap(heap, i, largerChildrenIndex);
        maxSubify(heap, largerChildrenIndex)
    }

}



let values = [2,4,7,156, 12, -5, 78, 9999, 45, 46 ,44, 45];

let heap=[0];
/*
values.forEach(v => insert(heap, v))
console.log(heap);*/


let heaped = maxHeapifyArray(values);
console.log(heaped);
