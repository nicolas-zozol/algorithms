const util = require('util')


function swap(heap, i, j) {

    const t = heap[i];
    heap[i] = heap[j];
    heap[j] = t;
    heap[i].position = i;
    heap[j].position = j;
}

function size(heap) {
    return heap[0]
}

function increase(heap) {
    heap[0] = heap[0] + 1;
}

function decrease(heap) {
    heap[0] = heap[0] - 1;
    heap.pop();
}

function leftChildIndex(i) {
    return 2 * i;
}

function rightChildIndex(i) {
    return 2 * i + 1;
}


function parentIndex(i) {
    return Math.floor(i / 2)
}


function insert(heap, node) {

    let i = size(heap) + 1;
    heap[i] = node;
    node.position = i;
    increase(heap);

    swapInsertion(heap, node, i);

}


function remove(heap, i) {
    swap(heap, i, size(heap));
    decrease(heap);
    minSubify(heap, i);


}

function swapInsertion(heap, node, i) {
    if (i === 1) {
        return; //reached root
    }
    let pIndex = parentIndex(i);
    let parentNode = heap[pIndex];

    if (parentNode.distance > node.distance) {
        swap(heap, pIndex, i);
        swapInsertion(heap, node, pIndex);
    }
}


function displayQueue(queue, message=false) {
    console.log(message || '',queue.slice(1).map(({name, distance}) => ({name, distance})))
}

function minSubify(heap, i, limit = size(heap)) {
    let leftIndex = leftChildIndex(i);

    if (leftIndex > limit) {
        return;
    }

    let rightIndex = rightChildIndex(i);

    let leftDistance = heap[leftIndex] && heap[leftIndex].distance;
    let rightDistance = heap[rightIndex] && heap[rightIndex].distance;


    let smallerChildrenIndex = leftIndex;

    if (rightIndex <= limit && rightDistance < leftDistance) {
        smallerChildrenIndex = rightIndex;
    }

    if (heap[smallerChildrenIndex].distance < heap[i].distance) {
        swap(heap, i, smallerChildrenIndex);
        minSubify(heap, smallerChildrenIndex, limit)
    }

}

function createEmptyHeap() {
    return [0];
}

function update(heap, node) {
    remove(heap, node.position);
    insert(heap, node);
}


let heap = [0];


function displayDeep(object, depth = 8) {
    console.log(util.inspect(object, {showHidden: false, depth}))
}

let queue = createEmptyHeap();

let n = 0;
// S for start, E for End ; see image related
let S = createVertex('S');
let A = createVertex('A');
let B = createVertex('B');
let C = createVertex('C');
let D = createVertex('D');
let E = createVertex('E');
let F = createVertex('F');
let G = createVertex('G');
let H = createVertex('H');
let I = createVertex('I');
let J = createVertex('J');
let K = createVertex('K');
let L = createVertex('L');


function createVertex(name, index = n) {
    n++;
    let vertex = {name, index, edges: [], visited:false}
    let node = {name, distance: Infinity, by: null, vertex, visited:false}
    vertex.node = node;
    if (index === 0) {
        node.distance = 0;
    }

    insert(queue, node);
    return vertex;
}


function addEdge(src, to, distance) {
    src.edges.push({to, distance});
    to.edges.push({to: src, distance})
}


addEdge(S, A, 7);
addEdge(S, B, 2);
addEdge(S, C, 3);

addEdge(A, B, 3);
addEdge(A, D, 4);

addEdge(B, D, 4);
addEdge(B, H, 1);

addEdge(D, F, 5);

addEdge(F, H, 3);

addEdge(H, G, 2);

addEdge(G, E, 2);

addEdge(E, K, 5);

addEdge(K, I, 4);
addEdge(K, J, 4);

addEdge(I, J, 6);
addEdge(I, L, 4);

addEdge(J, L, 4);

addEdge(L, C, 2);

// C was added to S

function lookVertex(vertex) {


    vertex.edges.filter(e=>!e.to.visited).forEach(edge => {
        let to = edge.to;
        let node = to.node;
        console.log(`${node.name} ->${vertex.node.distance} + ${edge.distance}`);
        node.distance = vertex.node.distance + edge.distance;
        node.by = vertex;
        update(queue, node)
    })

}


//displayDeep(I)
//console.log(queue);


function dijkstra(queue, end) {
    const done = [];
    displayQueue(queue, 'START')
    let loop = 1;

    while (size(queue) !== 0) {

        let first = queue[1];
        console.log({first: first.name});
        if (first.name === end) {
            return first.distance;
        }
        lookVertex(first.vertex);
        done.push(first);
        remove(queue, 1);
        first.visited =true;
        first.vertex.visited =true;

        displayQueue( queue, 'LOOP :' + loop);
        loop++;
    }

}

let result = dijkstra(queue, 'J')
//console.log(queue);
console.log(result);






















