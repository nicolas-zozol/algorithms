class AvlBinaryTree {


    constructor(value) {
        this.root = {value,k:0};
        this.node = this.root;
        this._values=[]
    }

    insert(value) {
        this.grandPa=null
        this._insertElement(this.root, value);
    }

    // private
    _insertElement(node, value) {

        if (this.grandPa!==null){
            console.log({value,  pValue:node.value, pK:node.k, gpV:this.grandPa.value, gpK:this.grandPa.k});
        }else{
            console.log({value,  pValue:node.value, pK:node.k});
        }

        if (this.firstIsSmaller(value, node.value)) {
            if (node.left !== undefined) {
                this.grandPa=node;
                this._insertElement(node.left, value)
            } else {
                node.left = {value,k:0};
                node.k -=1;
                if(this.grandPa){
                    this.grandPa.k-=1;
                }


            }
        } else {
            if (node.right !== undefined) {
                this.grandPa=node;
                this._insertElement(node.right, value)
            } else {
                node.right = {value, k:0}
                node.k +=1;
                if(this.grandPa){
                    this.grandPa.k+=1;
                }
            }
        }
    }


    rotateLeft(node){

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


    traversal(){
        this._values=[];
        this._traversal(this.root);
        return this._values;
    }

    _traversal(node){
        if(node.left){
            this._traversal(node.left);
        }
        this._values.push(node.value);
        if (node.right){
            this._traversal(node.right);
        }

    }

}


let tree = new AvlBinaryTree(1);
tree.insert(12);
tree.insert(13);
tree.insert(15);
tree.insert(16);
tree.insert(17);
tree.insert(18);


console.log(tree);