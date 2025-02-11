import {Analyse} from "./binary-tree.js";

export abstract class AbstractBinaryTree<T>{

    abstract traversal():Analyse<T>;

}