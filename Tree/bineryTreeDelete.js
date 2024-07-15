class Node{
    constructor(value){
        this.value=value
        this.left=null
        this.right=null
    }
}
class BinaryTreeDelete{
    constructor(){
        this.root=null
    }
    isEmpty(){
        return this.root==null
    }
    insert(value){
        const newNode=new Node(value)
        if(this.isEmpty()){
            this.root=newNode
            return
        }
        this.insertNode(this.root,newNode)
    }
    insertNode(root,newNode){
        if(root.value>newNode.value){
            if(root.left===null){
                root.left=newNode
            }else{
                this.insertNode(root.left,newNode)
            }
        }else{
            if(root.right===null){
                root.right=newNode
            } else{
                this.insertNode(root.right,newNode)
            }
        }
    }
    search(value){
        return this.searchNode(this.root,value)
    }
    searchNode(current,value){
        if(current==null){
            return false
        }
        if(current.value==value){
            return true
        }else if(current.value>value){
            return this.searchNode(current.left,value)
        }else{
            return this.searchNode(current.right,value)
        }  
    }
    delete(value){
        this.root=this.deleteNode(this.root,value)
    }
    deleteNode(root,value){
        if(root==null){
            return root
        }
        console.log(root,value);
        if(value<root.value){
            root.left=this.deleteNode(root.left,value)
        }else if(value>root.value){
            root.right=this.deleteNode(root.right,value)
        }else{
            if(!root.left && !root.right){
                return null
            }
            if(!root.left){
                return root.right
            }else if(!root.right){
                return root.left
            }else{
                root.value=this.min(root.right)
                root.right=this.deleteNode(root.right,root.value)
                return root
            }
        }
    }
    min(root){
        if(!root.left){
            return root.value
        }else{
           return this.minimum(root.left)
        }
    }
}
const tree = new BinaryTreeDelete()
tree.insert(2)
tree.insert(10)
tree.insert(20)
tree.delete(20)
console.log(tree.search(10));
console.log(tree.search(100));
console.log(tree.search(20));


