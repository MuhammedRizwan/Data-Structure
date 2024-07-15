class Node{
    constructor(value){
        this.value=value
        this.left=null
        this.right=null
    }
}
class tree{
    constructor(){
        this.root=null
    }
    insert(value){
        const newNode=new Node(value)
        if(!this.root){
            this.root=newNode
            return
        }
        this.insertNode(this.root,newNode)
    }
    insertNode(root,newNode){
        if(root.value>newNode.value){
            if(!root.left){
                root.left=newNode
            }else{
                this.insertNode(root.left,newNode)
            }
        }else{
            if(!root.right){
                root.right=newNode
            }else{
                this.insertNode(root.right,newNode)
            }
        }
    }
    search(value){
        if(!this.root){
            return false
        }
        let current=this.root
        while(current != null){
            if(current.value==value){
                return true
            }
            if(current.value>value){
                current=current.left
            }
            if(current.value<value){
                current=current.right
            }
        }
        return false
    }
    inOrder(root=this.root){
        if(root){
            this.inOrder(root.left)
            console.log(root.value)
            this.inOrder(root.right)
        }
    }
}

const t=new tree()
t.insert(10)
t.insert(20)
t.insert(30)
t.insert(5)
console.log(t.search(50));
console.log(t);
t.inOrder()