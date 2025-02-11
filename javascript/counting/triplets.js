//https://app.codility.com/c/run/trainingU39NU5-7H8/

class MaxHeap {


    constructor() {
        this.heap = [0]
    }

    swap(i, j) {
        const t = this.heap[i];
        this.heap[i] = this.heap[j];
        this.heap[j] = t;
    }

    size() {
        return this.heap[0]
    }

    increase() {
        this.heap[0] = this.heap[0] + 1;
    }

    decrease() {
        this.heap[0] = this.heap[0] - 1;
        this.heap.pop();
    }

    leftChildIndex(i) {
        return 2 * i;
    }

    rightChildIndex(i) {
        return 2 * i + 1;
    }


    parentIndex(i) {
        return Math.floor(i / 2)
    }


    insert(value) {

        let i = this.size() + 1;
        this.heap[i] = value;
        this.increase();

        this.swapInsertion(value, i);

    }


    swapInsertion(value, i) {
        if (i === 1) {
            return; //reached root
        }
        let pIndex = this.parentIndex(i);
        let parentValue = this.heap[pIndex];


        // we want bigger up, so switch parentValue and Value
        if (this.firstIsSmaller(parentValue, value)) {
            this.swap(pIndex, i);
            this.swapInsertion(value, pIndex);
        }

    }


    remove(i) {
        let value = this.heap[i];
        this.swap(i, this.size());
        this.decrease();
        this.subify(i);
        return value;

    }

    heapify(tree, limit = size(tree)) {


        let pIndex = this.parentIndex(limit);
        for (let i = pIndex; i >= 1; i--) {
            this.subify(i, limit);
        }

    }

    subify(i, limit = this.size()) {
        let leftIndex = this.leftChildIndex(i);

        if (leftIndex > limit) {
            return;
        }

        let rightIndex = this.rightChildIndex(i);
        let leftValue = this.heap[leftIndex];
        let rightValue = this.heap[rightIndex];


        let largerChildrenIndex = leftIndex;

        if (rightIndex <= limit && this.firstIsBigger(rightValue , leftValue)) {
            largerChildrenIndex = rightIndex;
        }

        if (this.firstIsBigger(this.heap[largerChildrenIndex] , this.heap[i])) {
            this.swap(i, largerChildrenIndex);
            this.subify(largerChildrenIndex, limit)
        }

    }

    firstIsSmaller(x, y) {

        return x < y;

    }

    firstIsBigger(x, y) {

        return x > y;

    }
}

class AbsMaxHeap extends MaxHeap{
    firstIsSmaller(x, y) {
        return Math.abs(x) < Math.abs(y);

    }

    firstIsBigger(x, y) {

        return Math.abs(x) > Math.abs(y);

    }
}


let heap = new MaxHeap();
let abs = new AbsMaxHeap();

function solution(A) {
    for (let i = 0; i < A.length; i++){

        heap.insert(A[i]);
        abs.insert(A[i]);

    }

    let h = heap.remove(1)*heap.remove(1)*heap.remove(1);
    let a = abs.remove(1)*abs.remove(1)*abs.remove(1);

    return h>a ? h : a;
}

console.log(solution([-4, -6, 3, 4, 5]));









