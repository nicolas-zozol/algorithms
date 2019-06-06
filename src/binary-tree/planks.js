function solution(A, B, C) {
    let nailedPlanks = 0;
    const planks = sortPlanks(A, B);
    const tree = buildTree(planks);

    let result = 0;
    for (let i = 0; i < C.length; i++) {
        result++;
        nailedPlanks += tryNail(tree, C[i]);
        if (nailedPlanks >= A.length) {
            break;
        }

    }
    if (nailedPlanks < A.length) {
        return -1;
    }
    return result;

}

function sortPlanks(A, B) {
    let planks = A.map((a, i) => ({start: a, end: B[i]}));
    console.log({planks});
    return planks.sort((p1, p2) => p2.end - p2.start > p1.end - p1.start)
}

function buildTree(planks) {


    const root = {plank: planks[0], nailed: false};


    for (let i = 1; i < planks.length; i++) {
        insertElement(root, planks[i]);
    }

    return root;
}


function insertElement(node, plank) {

    if (smaller(node.plank, plank) === plank) { // put the plank on left
        if (node.left !== undefined) {
            insertElement(node.left, plank)
        } else {
            node.left = {plank, nailed: false}
        }
    } else {
        if (node.right !== undefined) {
            insertElement(node.right, plank)
        } else {
            node.right = {plank, nailed: false}
        }
    }


}

function smaller(longer, shorter) {
    return longer.end < shorter.end ? longer : shorter;
}


function tryNail(node, nail) {
    if (node === undefined) {
        return 0;
    }
    let result = 0;
    if (node.plank.start <= nail && nail <= node.plank.end) {
        if (!node.plank.nailed){
            //nails it !
            node.plank.nailed = true;
            result++;
        }
        result += tryNail(node.left, nail);
        result += tryNail(node.right, nail);
    } else if (nail < node.plank.start) {
        result += tryNail(node.left, nail);
    } else if (nail > node.plank.end) {
        result += tryNail(node.right, nail);
    }
    return result;
}


const A = [1, 4, 5, 8];
const B = [4, 5, 9, 10];
const C =[4,6,7,10,2];
const planks = sortPlanks(A, B);

console.log(solution(A,B,[4,5,10,12,3]));