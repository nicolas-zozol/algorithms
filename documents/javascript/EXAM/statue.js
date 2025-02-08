class BinarySet {

    constructor(value) {
        this.root = {value};
        this.node = this.root;
        this.count =1;
    }

    insert(value) {
        this._insertElement(this.root, value);
    }

    // private
    _insertElement(node, value) {

        if(value.quad  === node.value.quad && value.coeff === node.value.coeff){
            // do not add
            return;
        }

        if (this.firstIsSmaller(value , node.value)) {
            if (node.left !== undefined) {
                this._insertElement(node.left, value)
            } else {
                node.left = {value};
                this.count++
            }
        } else {
            if (node.right !== undefined) {
                this._insertElement(node.right, value)
            } else {
                node.right = {value};
                this.count++
            }
        }
    }

    firstIsSmaller(x, y) {
        if (x.quad === y.quad){
            return x.coeff < y.coeff;
        }
        return x.quad < y.quad;
    }


}

function solution(A) {


    if (A.length ===0){
        return 0;
    }
    if (A.length ===1){
        return 1;
    }
    let coeffs = [];
    for (let i=0; i < A.length ; i++){

        let point = A[i];

        if (point.x ===0 && point.y ===0){
            continue; //every laser is ok
        }
        let quad = 0;
        let x = point.x;
        let y = point.y;
        if(x>=0 && y>=0){
            quad =0;
        }
        else if(x>=0 && y<0){
            quad =1;
        }
        else if(x<0 && y>0){
            quad =2;
        }
        else if(x<0 && y<0){
            quad =3;
        }
        coeffs.push({coeff:(point.y/point.x), quad}); //check +Inf, -Inf, -0, +0
    }

    if (coeffs.length ===0){
        return 1; // all on 0,0
    }

  //  console.log(coeffs);

    let set =new BinarySet(coeffs[0]);
    // now add in a binary set
    for (let i =1; i < coeffs.length ; i++){
        set.insert(coeffs[i]);
    }

    return set.count;
}


let A = [{x:-1, y:-2}, {x:1, y:2}, {x:2, y:4}, {x:-3, y:2}, {x:2, y:-2}]
console.log(solution(A));