import {Analyse} from "./binary-tree";

export abstract class AbstractBinaryTree<T>{

    abstract traversal():Analyse<T>;

}