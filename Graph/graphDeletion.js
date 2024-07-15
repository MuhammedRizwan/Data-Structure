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
    deletenode(node){
        const index=this.node.indexOf(node)
        if(index==-1){
            this.node.splice(index,1)
            delete this.adjecencyList[node]
            for(let adjecencyNode in this.adjecencyList){
                this.adjecencyList[adjecencyNode]=this.adjecencyList[adjecencyNode].filter(n =>n!=node)
            }
        }
    }
    deleteEdge(node1, node2) {
        this.adjacencyList[node1] = this.adjacencyList[node1].filter(n => n !== node2);
        this.adjacencyList[node2] = this.adjacencyList[node2].filter(n => n !== node1);
    }
}
const graph = new Graph();
graph.addNode(1);
graph.addNode(2);
graph.addEdge(1, 2);
graph.deleteNode(1);
graph.deleteEdge(2, 3);