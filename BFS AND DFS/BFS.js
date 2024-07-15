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
    bfsTraversal(startNode) {
        const visited = {}
        const queue = [startNode]
        visited[startNode] = true
        while (queue.length > 0) {
            const currentNode=queue.shift()
            console.log(currentNode);
            this.adjecencyList[currentNode].forEach(nighbour => {
                if(!visited[nighbour]){
                    visited[nighbour]=true
                    queue.push(nighbour)
                }
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
graph.bfsTraversal('A');