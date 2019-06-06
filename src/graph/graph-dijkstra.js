const util = require('util')

function displayDeep(object, depth = 8) {
    console.log(util.inspect(object, {showHidden: false, depth}))
}

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
    return {name, index, edges: []}
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


displayDeep(I)
