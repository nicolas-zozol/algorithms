//in a graph: what is the diff between Edge and Vertice ?


// Vertices are the dots, edges are the lines
interface Edge{
    source: number;
    destination:number;
    weight ?: number; /// distance between source and destination
}


interface Vertice{
    //complicated
}


interface Graph {
    edges: Edge[];
}