class Graph {
    constructor() {
        this.node = []
        this.adjecencyList = {}
    }
    addNode(node) {
        this.node.push(node)
        this.adjecencyList[node] = []
    }
    addEdge(node1, node2) {
        this.adjecencyList[node1].push(node2)
        this.adjecencyList[node2].push(node1)
    }
    dfsTraversal(startNode) {
       const visit={}
       this.dfs(startNode,visit)
    }
    dfs(node,visit){
        if(!visit[node]){
            visit[node]=true
            console.log(node);
            this.adjecencyList[node].forEach(nighbour => {
                this.dfs(nighbour,visit)
            });
        }
    }
}
const graph = new Graph();
graph.addNode('A');
graph.addNode('B');
graph.addNode('C');
graph.addEdge('A', 'C');
graph.addEdge('B', 'C');
graph.dfsTraversal('A');