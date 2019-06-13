

class LinkList{



    constructor(first){
        let node ={value:first};
        this.first = node;
        this.last =node;
        this.size = 1;

        this.quick =[]


    }

    push(value){
        this.quick.push(value);
        let node = {value};
        if (this.last===undefined){
            this.first = node;
            this.last = node;
        }else{
            this.last.next = node;
            node.previous = this.last;
            this.last=node;
        }
        this.size++;
    }

    shift(){
        if (this.size ===0){
            return undefined;
        }

        let result = this.first.value;
        if (this.size ===1){

            delete this.first;
            delete this.last;

        }
        if (this.size >1){

            this.first = this.first.next;
            delete this.first.previous;
        }

        this.size --;
        return result.value;

    }

    pop(){

        if (this.size ===0){
            return undefined;
        }

        // constant
        this.quick.pop();
        let result = this.last.value;
        if (this.size ===1){

            delete this.first;
            delete this.last;

        }
        if (this.size >1){

            this.last = this.last.previous;
            delete this.last.next;
        }

        this.size --;
        return result.value;

    }
}


let list = new LinkList(2);
list.push(3)
list.push(4)
list.push(5)
let n = list.shift();
n = list.pop();
n = list.pop();
console.log({n, list});