class TreiNode {
    constructor() {
        this.children = {}
        this.isEndofWord = false
    }

}
class TreiTraversal {
    constructor() {
        this.root = new TreiNode()
    }
    insert(word) {
        let node = this.root
        for (let char of word) {
            if (!node.children[char]) {
                node.children[char] = new TreiNode()
            }
            node = node.children[char]
        }
        node.isEndofWord = true
    }
    traverse(node = this.root, word = '') {
        if (node.isEndofWord) {
            console.log(word);
        }
        for (let [char, child] of Object.entries(node.children)) {
            this.traverse(child, word + char)
        }
    }
    collectWord(node, prefix, result) {
        if (node.isEndofWord) {
            result.push(prefix)
        }
        for (let char in node.children) {
            this.collectWord(node.children[char], prefix + char, result)
        }
    }
    printReverseDictionaryOrder() {
        let result = []
        this.collectWord(this.root, '', result)
        for (let i = result.length - 1; i >= 0; i--) {
            console.log(result);
        }
    }
}
const trie = new TreiTraversal();
trie.insert("apple");
trie.insert("banana");
trie.insert("orange");
trie.insert("grape");
trie.printReverseDictionaryOrder();