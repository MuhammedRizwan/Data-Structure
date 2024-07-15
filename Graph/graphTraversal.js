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
    traversal(startNode){
        const visited={}
        this.traversalNode(startNode,visited)
    }
    traversalNode(node,visited){
        if(!visited[node]){
            visited[node]=true
            console.log(node);
            this.adjecencyList[node].forEach(element => {
                this.traversalNode(element,visited)
            });
        }
    }
}
const graph = new Graph();
graph.addNode(1);
graph.addNode(2);
graph.addEdge(1, 2);
graph.traversal(1);