class Node {
    constructor(value) {
        this.value = value
        this.right = null
        this.left = null
    }
}
class preOrder {
    constructor() {
        this.root = null
    }
    insert(value) {
        const newNode = new Node(value)
        if (!this.root) {
            this.root = newNode
            return
        }
        this.insertNode(this.root, newNode)
    }
    insertNode(root, newNode) {
        if (root.value > newNode.value) {
            if (root.left == null) {
                root.left = newNode
            } else {
                this.insertNode(root.left, newNode)
            }
        } else {
            if (root.right == null) {
                root.right = newNode
            } else {
                this.insertNode(root.right, newNode)
            }
        }
    }
    search(value) {
        return this.searchNode(this.root, value)
    }
    searchNode(current, value) {
        if (current == null) {
            return false
        }
        if (current.value == value) {
            return true
        } else if (current.value > value) {
            return this.searchNode(current.left, value)
        } else {
            return this.searchNode(current.right, value)
        }
    }
    delete(value) {
        this.root = this.deleteNode(this.root, value)
    }
    deleteNode(root, value) {
        if (!root) {
            return null
        }
        if (root.value > value) {
            root.left = this.deleteNode(root.left, value)
        } else if (root.value > value) {
            root.right = this.deleteNode(root.right, value)
        } else {
            if (!root.left && !root.right) {
                return root
            } else if (!root.left) {
                return root.right
            } else if (!root.right) {
                return root.left
            }
            root.value = this.min(root.right)
            root.right = this.deleteNode(root.right, value)
        }
        return root
    }
    min(root) {
        if (!root.left) {
            return root.value
        }
        this.min(root.left)
    }
    preOrderTraversal(root = this.root) {
        if (root) {
            console.log(root.value);
            this.preOrderTraversal(root.left)
            this.preOrderTraversal(root.right)
        }
    }
}
const tree = new preOrder()
tree.insert(2)
tree.insert(10)
tree.insert(20)
tree.preOrderTraversal()
console.log(tree.search(10));
console.log(tree.search(100));
console.log(tree.search(20));
tree.delete(10)
tree.preOrderTraversal()