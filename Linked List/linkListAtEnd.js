class Node{
    constructor(value){
        this.data=value;
        this.next=null;
    }
}
class linkedList{
    constructor(){
        this.head=null
    }
    inserAtEnd(value){
        const newNode= new Node(value);
        if(!this.head){
            this.head=newNode;
            return
        }
        let current=this.head;
        while(current.next){
            current=current.next;
        }
        current.next=newNode;

    }
    print(){
        let current=this.head;
        while(current !== null){
            console.log(current.data);
            current=current.next;
        }
    }
}
myList=new linkedList();
myList.inserAtEnd(4);
myList.inserAtEnd(8);
myList.inserAtEnd(9);
myList.inserAtEnd(10)
myList.print();