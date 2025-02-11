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
        this.swap(i, this.size());
        this.decrease();
        this.subify(i);


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


let heap = new MaxHeap();
heap.insert(12);
heap.insert(10);
heap.insert(1);
heap.insert(2);
heap.insert(2);
heap.insert(6);
heap.insert(6);
heap.remove(1);

console.log(heap.heap);
