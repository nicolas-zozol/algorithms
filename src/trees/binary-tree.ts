export interface Leaf<T> {

    value: T;
}


export class BinaryNode<T> {

    left: BinaryNode<T> | Leaf<T> | void;
    right: BinaryNode<T>| Leaf<T> | void;

}


export interface Analyse<T>{
    values:T[];
    currentLevel: number;
    depth:number;
}

export interface BinaryTree<T>{
    root:BinaryNode<T>;

    constructor(root:BinaryNode<T>):number;

    depth():number;

    height():number;

    isFull():boolean;

    isComplete():boolean;

    /* Must be implemented by various strategies */
    traversal():Analyse<T>;
}

