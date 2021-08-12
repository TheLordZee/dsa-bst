class Node {
  constructor(val, left = null, right = null) {
    this.val = val;
    this.left = left;
    this.right = right;
  }
}

class BinarySearchTree {
  constructor(root = null) {
    this.root = root;
  }

  /** insert(val): insert a new node into the BST with value val.
   * Returns the tree. Uses iteration. */

   insert(val) {
    let newNode = new Node(val);
    if(!this.root){
      this.root = newNode
      return this;
    }
    let current = this.root;
    while(current){
      if(current.val < val){
        if(!current.right){
          current.right = newNode;
          return this;
        }else{
          current = current.right; 
        }
      }
      if(current.val > val){
        if(!current.left){
          current.left = newNode;
          return this;
        }else{
          current = current.left;
        }
      }
    }
  }

  /** insertRecursively(val): insert a new node into the BST with value val.
   * Returns the tree. Uses recursion. */

  insertRecursively(val, node=this.root){
      if(!node){
        this.root = new Node(val);
        return this;
      }
      if(node.val > val){
        if(!node.left){
          node.left = new Node(val)
          return this;
        }
        return this.insertRecursively(val, node.left)
      }
      if(node.val < val){
        if(!node.right){
          node.right = new Node(val)
          return this;
        }
        return this.insertRecursively(val, node.right)
      }
  }

  /** find(val): search the tree for a node with value val.
   * return the node, if found; else undefined. Uses iteration. */

  find(val) {
    let current = this.root;
    while(current){
      if(current.val === val) return current;
      if(current.val > val){
        if(current.left){
          current = current.left;
        }else{
          return;
        }
      }else{
        if(current.right){
          current = current.right;
        }else{
          return;
        }
      }
    }
  }

  /** findRecursively(val): search the tree for a node with value val.
   * return the node, if found; else undefined. Uses recursion. */

  findRecursively(val, node=this.root){
    if(node.val === val) return node;
    if(node.val > val){
      if(node.left) return this.findRecursively(val, node.left);
      return;
    }else{
      if(node.right) return this.findRecursively(val, node.right);
      return;

    }
  }

  /** dfsPreOrder(): Traverse the array using pre-order DFS.
   * Return an array of visited nodes. */

  dfsPreOrder(node=this.root) {
    let visited = [];
    visited.push(node.val);
    if(node.left) visited = visited.concat(this.dfsPreOrder(node.left));
    if(node.right) visited = visited.concat(this.dfsPreOrder(node.right));
    return visited;
  }

  /** dfsInOrder(): Traverse the array using in-order DFS.
   * Return an array of visited nodes. */

  dfsInOrder(node=this.root) {
    let visited = [];
    if(node.left) visited = visited.concat(this.dfsInOrder(node.left));
    visited.push(node.val);
    if(node.right) visited = visited.concat(this.dfsInOrder(node.right));
    return visited;
  }

  /** dfsPostOrder(): Traverse the array using post-order DFS.
   * Return an array of visited nodes. */

  dfsPostOrder(node=this.root){
    let visited = [];
    if(node.left) visited = visited.concat(this.dfsPostOrder(node.left));
    if(node.right) visited = visited.concat(this.dfsPostOrder(node.right));
    visited.push(node.val);
    return visited;
  }

  /** bfs(): Traverse the array using BFS.
   * Return an array of visited nodes. */

  bfs() {
    let visited = [];
    let toVisitQueue = [this.root];
    while(toVisitQueue.length){
      let current = toVisitQueue.shift();
      visited.push(current.val);
      if(current.left) toVisitQueue.push(current.left);
      if(current.right) toVisitQueue.push(current.right);
    }
    return visited;
  }

  /** Further Study!
   * remove(val): Removes a node in the BST with the value val.
   * Returns the removed node. */

  remove(val) {

  }

  /** Further Study!
   * isBalanced(): Returns true if the BST is balanced, false otherwise. */

  isBalanced() {

  }

  /** Further Study!
   * findSecondHighest(): Find the second highest value in the BST, if it exists.
   * Otherwise return undefined. */

  findSecondHighest() {
    
  }
}

module.exports = BinarySearchTree;
