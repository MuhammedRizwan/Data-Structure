class Node{
    constructor(value){
        this.data=value;
        this.next=null;
    }
}
class linkedList{
    constructor(){
        this.head=null;
    }
    insertAtBegining(value){
        const newNode=new Node(value);
        newNode.next=this.head;
        this.head=newNode
    }
    print(){
        let current=this.head;
        while(current !== null){
            console.log(current.data);
            current=current.next
        }
    }
}
const linkedListData=new linkedList();
linkedListData.insertAtBegining(8);
linkedListData.print();