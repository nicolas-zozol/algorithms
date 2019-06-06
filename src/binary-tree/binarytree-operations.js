const data = [2,8,7,6,8,9];


function constructBst(array){

    if (array.length ===0){
        return null;
    }

    let root = {value:data[0]};
    for (let i=1; i < array.length ; i++){
        insertElement(root, array[i]);
    }

    return root;
}



function insertElement(node, value){

    if (value<node.value){
        if (node.left !==undefined){
            insertElement(node.left, value)
        }else{
            node.left= {value}
        }
    }

    if (value>=node.value){
        if (node.right !==undefined){
            insertElement(node.right, value)
        }else{
            node.right = {value}
        }
    }
}


function cost(tree, value){
        return depth(tree, 1, value)+1;
}

function depth(node, h, value){
    if (value < node.value ){
        if (node.left !== undefined){
            if (node.left.value === value){
                return h;
            }
            return depth(node.left, h+1, value);
        }
    }

    if (value >= node.value ){
        if (node.right !== undefined){
            if (node.right.value === value){
                return h;
            }
            return depth(node.right, h+1, value);
        }
    }

    return null;
}



let tree = constructBst(data);



console.log(tree);
console.log(cost(tree,8 ));