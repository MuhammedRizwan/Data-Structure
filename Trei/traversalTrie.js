class TreiNode{
    constructor(){
        this.children={}
        this.isEndofWord=false
    }
    
}
class TreiTraversal{
    constructor(){
        this.root=this.root
    }
    insert(word){
        let node = this.root
        for(let char of word){
            if(!node.children[char]){
                node.children[char]=new TreiNode()
            }
            node=node.children[char]
        }
        node.isEndofWord=true
    }
    traverse(node=this.root,word=''){
        if(node.isEndofWord){
            console.log(word);
        }
        for(let[char,child]of Object.entries(node.children)){
            this.traverse(child,word+char)
        }
    }
}