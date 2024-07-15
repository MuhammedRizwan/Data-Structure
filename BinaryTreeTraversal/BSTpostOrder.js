class Node {
    constructor(value) {
        this.value = value
        this.left = null
        this.right = null
    }
}
class postOrderTraversal {
    constructor() {
        this.root = null
    }
    insert(value) {
        const newNode = new Node(value)
        if (this.root == null) {
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
        if (!current) {
            return false
        } else if (current.value == value) {
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
        } else if (root.value > value) {
            return this.deleteNode(root.left, value)
        } else if (root.value < value) {
            return this.deleteNode(root.right, value)
        } else {
            if (!root.left && !root.right) {
                return root
            } else if (!root.left) {
                return root.right
            } else if (!root.right) {
                return root.left
            } else {
                root.value = this.min(root.right)
                root.right = this.deleteNode(root.right, value)
            }
            return root
        }
    }
    min(root) {
        if (!root.left) {
            return root.value
        } else {
            return this.min(root.left)
        }
    }
    postOrder(root = this.root) {
        if (root) {
            this.postOrder(root.left)
            this.postOrder(root.right)
            console.log(root.value);
        }
    }
}
const tree = new postOrderTraversal()
tree.insert(2)
tree.insert(10)
tree.insert(20)
console.log(tree.search(10));
console.log(tree.search(100));
console.log(tree.search(20));
tree.postOrder()