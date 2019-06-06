
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
    heap.pop();
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


function remove(heap, i){
    swap(heap,i, size(heap));
    decrease(heap);
    maxSubify(heap,i);


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

function maxHeapify(tree, limit=size(tree)){


    let pIndex = parentIndex(limit);
    for (let i = pIndex; i >=1 ; i--){
        maxSubify(tree,i, limit);
    }

}

function maxSubify(heap, i ,limit=size(heap)){
    let leftIndex = leftChildIndex(i);

    if (leftIndex>limit){
        return;
    }

    let rightIndex = rightChildIndex(i);
    let leftValue = heap[leftIndex];
    let rightValue = heap[rightIndex];


    let largerChildrenIndex = leftIndex;

    if (rightIndex<=limit && rightValue>leftValue){
        largerChildrenIndex = rightIndex;
    }

    if (heap[largerChildrenIndex]>heap[i]){
        swap(heap, i, largerChildrenIndex);
        maxSubify(heap, largerChildrenIndex, limit)
    }

}

function sort(array){


   let heap= maxHeapifyArray(array);



    // We'll make a unsortedZone at the beginning, and a sorted zone at the end. the unsorted zone will shrink.
    const lastIndex = size(heap);

    for (let i = lastIndex ; i >=2 ; i--){
        // push the biggest on top at the start of the sortedZone
        swap(heap, 1, i);

        // now the heap is ruined. Heapify until sortedZone
        maxHeapify(heap, i-1); // length is tricky
        //console.log('heapified', 'length:', i, array);
    }

    return heap;
}

function update(heap, i, newValue){
    remove(heap, i);
    insert(heap, newValue);
}

let values = [2,4,7,156, 12, -5, 78, 9999, 45, 46 ,44, 45];
let small= [2,4,7,156];

let heap=[0];
/*
values.forEach(v => insert(heap, v))
console.log(heap);


let heaped = maxHeapifyArray(values);
//console.log(heaped);

console.log(maxHeapifyArray(small));
console.log(sort(small));
*/
let tree = maxHeapifyArray(values);
console.log(tree);
remove(tree, 3)
console.log(tree);

update(tree, 2, 45)
console.log(tree);
