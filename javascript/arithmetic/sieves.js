let found = []

class BinaryTree {


    constructor(value) {
        this.root = {value};
        this.node = this.root;
        this._values = []
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

    insertIf(value) {
        this._insertElementIf(this.root, value);
    }

    // private
    _insertElementIf(node, value) {

        if (this.equalValues(node.value, value)) {
            return;
        }
        if (this.firstIsSmaller(value, node.value)) {
            if (node.left !== undefined) {
                this._insertElementIf(node.left, value)
            } else {
                node.left = {value}
            }
        } else {
            if (node.right !== undefined) {
                this._insertElementIf(node.right, value)
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


    traversal() {
        this._values = [];
        this._traversal(this.root);
        return this._values;
    }

    _traversal(node) {
        if (node.left) {
            this._traversal(node.left);
        }
        this._values.push(node.value);
        if (node.right) {
            this._traversal(node.right);
        }

    }

}


function solution(N) {

    let multiples = new BinaryTree(4);
    let current = 1;
    for (let i = 2; i <= N; i++) {

        current = i;
        if (multiples.contains(current)) {
            continue;
        }
        let mult = 2;
        while (current <= N) {
            current =i* mult;
            if (current<=N){
                multiples.insertIf(current);
            }

            mult++;
        }


    }

    let not =multiples.traversal();
    let primes =[1,2,3];
    //let notIndex =
    let nextNot = not.shift();
    for(let n = 4; n <= N; n++){
        if(n === nextNot){
            nextNot=not.shift();
        }else{
            primes.push(n);
        }

    }
    console.log(primes);
}

solution(10000)
