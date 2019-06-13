class LinkList {

    constructor(first) {
        let node = {value: first};
        this.first = node;
        this.last = node;
        this.size = 1;
        this.quick = [first]
    }

    push(value) {
        this.quick.push(value);
        let node = {value};
        if (this.last === undefined) {
            this.first = node;
            this.last = node;
        } else {
            this.last.next = node;
            node.previous = this.last;
            this.last = node;
        }
        this.size++;
    }

    pop() {

        if (this.size === 0) {
            return undefined;
        }

        // constant
        this.quick.pop();

        let result = this.last.value;
        if (this.size === 1) {

            this.clear();
            return result;

        }
        if (this.size > 1) {

            this.last = this.last.previous;
            delete this.last.next;
        }

        this.size--;
        return result.value;

    }

    shift() {
        if (this.size === 0) {
            return undefined;
        }

        let result = this.first.value;
        if (this.size === 1) {

            this.clear();
            return result;

        }
        if (this.size > 1) {

            this.first = this.first.next;
            delete this.first.previous;
        }

        this.size--;
        return result.value;

    }

    clear() {
        delete this.first;
        delete this.last;
        this.size = 0;
    }

    remove(node) {
        if (this.size === 1) {
            this.clear();
        } else {
            //size >1
            if (this.first === node) {
                this.first = node.next;

            } else if (this.last === node) {
                this.last = node.previous;
            } else {
                node.previous.next = node.next;
                node.next.previous = node.previous;
            }

            this.size --;
        }


        return node.value;
    }

}

function solution(A, B) {

    if (A.length === 0) {
        return 0;
    }

    if (A.length === 1) {
        return 1;
    }

    let list = fight(A,B)
    return list.size;


}

function fight(A, B) {


    let list = new LinkList({
        size: A[0],
        flow: B[0]
    });

    for (let i = 1; i < A.length; i++) {
        list.push({
            size: A[i],
            flow: B[i]
        })
    }


    let first;
    let quick = list.quick;
    let up = list.first;
    for (let i = 0; i < list.size; i++) {
        if (quick[i].flow === 1) {
            first = i;
            break;
        }
        up = up.next;
    }

    if (first === undefined) {
        return list.size;
    }

    let max = list.size;

    let stack = []

    let down;
    let upEaten = false;
    for (let round = first; round < max; round++) {
        if (list.size === 0) {
            return 0;
        }

        if (list.size === 1) {
            return 1;
        }
        // choose next in stack or move till next 1
        if (upEaten  && stack.length>0){
            up = stack.pop();
            up =up.next;
        }

        if (!upEaten){
            while (up && up.value.flow === 1) {
                stack.push(up);
                up = up.next;
            }
        }





        if (up === undefined || list.last === up) {//no more 1
            //console.log('no more one');
            return list;
        }

        if (up.value.flow !==0){
            throw 'should be 0';
        }
        if (up.previous === undefined){
            throw 'should have an up'
        }
        //now fish.flow ===0 // rename correctly
        let temp = up;
        let down = up;
        up = down.previous;

        console.log('up :', up.value.size, 'down: ', down.value.size);

        if (up.value.size > down.value.size) {
            console.log('up :', up.value.size, 'eats down: ', down.value.size);
            list.remove(down);
            upEaten=false;
        }else{
            console.log('up :', up.value.size, 'eaten by: ', down.value.size);
            list.remove(up);
            upEaten=true;
        }


    }

    return list;
}


let A = [4,3,2,5,1,8,6], B=[0,1,0,0,1,0,1];

//let A = [4,3,2,1,5], B=[0,1,0,0,0];
console.log(solution(A,B));