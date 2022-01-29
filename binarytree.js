class Node {
    constructor(value){
        this.value = value
        this.left = null
        this.right = null
    }
}
class BinarySearchTree {
    constructor(){
      this.root = null
    }
  find(value){
      if(!this.root) return false
      let current = this.root
      let found = false
      while(current && !found){
            if(value < current.value){
              current = current.left
             } else if(value > current.value){
                current = current.right
             } else {
                  found = current
             } 
            }
        if(!found) return undefined;
        return found
  }
