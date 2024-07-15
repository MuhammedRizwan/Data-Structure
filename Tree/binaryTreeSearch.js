class Node {
    constructor(value) {
        this.value = value
        this.left = null
        this.right = null
    }
}
class binaryTreeSearch {
    constructor() {
        this.root = null
    }
    isEmpty() {
        return this.root == null
    }
    insert(value) {
        const newNode = new Node(value)
        if (this.isEmpty()) {
            this.root = newNode
        } else {
            this.insertNode(this.root, newNode)
        }
    }
    insertNode(root, newNode) {
        if (root.value > newNode.value) {
            if (root.left == null) {
                root.left = newNode
            } else {
                this.insertNode(root.left, newNode)
            }
        } else {
            if (root.right==null) {
                root.right = newNode
            } else {
                this.insertNode(root.right, newNode)
            }
        }
    }
    search(value) {
        return this.searchValue(this.root, value)
    }
    searchValue(current, value) {
        if (current === null) {
            return false
        }
        if (current.value === value) {
            return true
        } else if (current.value > value) {
            return this.searchValue(current.left, value)
        } else {
            return this.searchValue(current.right, value)
        }
    }
}
const tree = new binaryTreeSearch()
tree.insert(2)
tree.insert(10)
tree.insert(20)
console.log(tree.search(10));
console.log(tree);
