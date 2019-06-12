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

    depth(value){
        if(this.equalValues(this.root.value, value)){
            return 0;
        }
        return this._depth(this.root,1,value)
    }
    _depth(node, h, value) {

        if (this.firstIsSmaller(value , node.value)) {
            if (node.left !== undefined) {
                if (this.equalValues(node.left.value, value)) {
                    return h;
                }
                return this._depth(node.left, h + 1, value);
            }
        }else {
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


let tree = new BinaryTree(1);
tree.insert(12);
tree.insert(-8);
tree.insert(45);
tree.insert(5);
console.log(tree.contains(8));
console.log(tree.contains(-8));
console.log(tree.contains(12));