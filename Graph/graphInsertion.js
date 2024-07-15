class Graph{
    constructor(){
        this.node=[]
        this.adjecencyList={}
    }
    addNode(node){
        this.node.push(node)
        this.adjecencyList[node]=[]
    }
    addEdge(node1,node2){
        this.adjecencyList[node1].push(node2)
        this.adjecencyList[node2].push(node1)
    }
}
const graph = new Graph();
graph.addNode(1);
graph.addNode(2);
graph.addNode(3)
graph.addNode(4)
graph.addEdge(1, 2);
graph.addEdge(3,1)
graph.addEdge(3,2)
graph.addEdge(4,2)
console.log(graph);
