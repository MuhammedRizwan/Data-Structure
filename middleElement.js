class Node {
    constructor(value) {
        this.data = value;
        this.next = null
    }
}
class linkedList {
    constructor() {
        this.head = null
    }
    insert(value) {
        const newNode = new Node(value);
        if (!this.head) {
            this.head = newNode;
            return
        }
        let curr = this.head;
        while (curr.next) {
            curr = curr.next
        }
        curr.next= newNode
    }
    delete() {
        let curr = this.head;
        let count = 0
        while (curr != null) {
            curr = curr.next;
            count++
        }
        let pos = Math.floor(count / 2)
        let current = this.head;
        let c = 0
        while (current && c < pos - 1) {
            current = current.next
            c++
        }
        current.next = current.next.next
    }
    print() {
        let curr = this.head;
        while (curr != null) {
            console.log(curr.data);
            curr = curr.next
        }
    }
}
const myList = new linkedList()
myList.insert(5)
myList.insert(10)
myList.insert(20);
myList.delete()
myList.print()