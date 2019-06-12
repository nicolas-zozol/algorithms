class BinaryTree {


    constructor(value) {
        this.root = {value};
        this.node = this.root;
    }

    insert(value) {
        this._insertElement(this.root, value);
    }

    // private
    _insertElement(node, value) {

        if (this.firstIsSmaller(value, node.value)) {
            if (node.left !== undefined) {
                this._insertElement(node.left, value)
            } else {
                node.left = {value}
            }
        } else {
            if (node.right !== undefined) {
                this._insertElement(node.right, value)
            } else {
                node.right = {value}
            }
        }
    }

    contains(value) {
        return this.depth(value) !== null;
    }

    depth(value) {
        if (this.equalValues(this.root.value, value)) {
            return 0;
        }
        return this._depth(this.root, 1, value)
    }

    _depth(node, h, value) {

        if (this.firstIsSmaller(value, node.value)) {
            if (node.left !== undefined) {
                if (this.equalValues(node.left.value, value)) {
                    return h;
                }
                return this._depth(node.left, h + 1, value);
            }
        } else {
            if (node.right !== undefined) {
                if (this.equalValues(node.right.value, value)) {
                    return h;
                }
                return this._depth(node.right, h + 1, value);
            }
        }
        return null;

    }

    equalValues(v1, v2) {
        return v1 === v2;
    }

    firstIsSmaller(x, y) {
        return x < y;
    }

    firstIsBigger(x, y) {
        return x > y;
    }

}

let found = new BinaryTree(0);

function solution(N, M) {


    if (N === 1) {
        return 1;
    }
    if (M === 1) {
        return N;
    }
    if (N >= M && N % M === 0) {
        return N / M;
    }

    if (N > M && N / M > 20) {
        return byJump(N, M)
    }
    /*
    if( M>N && M%N ===0){
        return 1;
    }*/


    //special cases 1 and 0

    let miam = 1;
    let position = 0;
    do {

        position = nextPosition(position, N, M);

        //console.log({position, miam, under: M * miam, N, eaten: eaten(position)});
        if (M * miam >= N && eaten(position)) {
            return miam;
        } else {
            found.insert(position);
            miam++;
        }

    } while (true);

}


function byJump(N, M) {

    let miam = 1;
    let position = 0;
    let jump =0;
    let skip = Math.floor(N / M) -2*M;
    do {


        for (let i = 0; i < M*2; i++) {
            position = nextPosition(position, N, M);
            if (eaten(position)) {
                return miam;
            } else {

                found.insert(position);
                miam++;
          //      console.log('inserted ',{position, miam});
            }
        }
        //console.log('>>>before jump',{skip, jump, miam, position});
        position += skip*M;
        miam += skip;
        jump++;
        //console.log('### after jump',{skip, jump, miam, position});
    } while (true);

}

function nextPosition(position, N, M) {

    let newPosition = (position + M) % N;
    // console.log(newPosition);
    return newPosition;

}

//not fast !
function eaten(position) {
    return found.contains(position)
}

console.log(solution(100, 3));