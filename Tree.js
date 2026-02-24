/**
 * Seminar 2.3 Binary search tree
 */

class Node {
    constructor(data) {
        this.data = data;
        this.left = null;
        this.right = null;
    }
}


class Tree {
    constructor() {
        this.root = null;
    }

    addNode(node){
        if (!this.root){
            this.root = node;
            return;
        }
        let current = this.root;
        let newNode = node;
        while (true){
            if (newNode.data < current.data){
                if (!current.left){
                    current.left = newNode;
                    return;
                }
                current = current.left;
            } else {
                if (!current.right){
                    current.right = newNode;
                    return;
                }
                current = current.right;
            }
        }
    }

    hasNode(data){
        let current = this.root;
        while (true){
            if (!current){
                return false;
            }
            if (data < current.data){
                if (!current.left){
                    return false;
                }
                current = current.left;
            } else if (data > current.data){
                if (!current.right){
                    return false;
                }
                current = current.right;
            } else if (data === current.data){
                return true;
            }
        }
    }
}



module.exports = { Node, Tree }
