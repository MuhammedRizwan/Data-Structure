class Node {
    constructor(value) {
        this.data = value;
        this.next = null;
    }
}
class linkedList {
    constructor() {
        this.head = null;
    }
    insertAtBegining(value) {
        const newNode = new Node(value);
        newNode.next = this.head;
        this.head = newNode
    }
    insert(value, position) {
        if (position === 0) {
            return this.insertAtBegining(value);
        }
        const newNode = new Node(value);
        let currentNode = this.head;
        let count = 0;

        while (currentNode && count < position - 1) {
            currentNode=currentNode.next;
            count++;
        }
        if(!currentNode){
            throw new Error ("Invalid position")
        }
        newNode.next=currentNode.next;
        currentNode.next=newNode;
    }
    print(){
        let current=this.head;
        while(current !== null){
            console.log(current.data);
            current=current.next;
        }
    }
}

const myList=new linkedList();
myList.insert(5,0);
myList.insert(10,1);
myList.insert(8,2);
myList.insert(9,1);
myList.print()

