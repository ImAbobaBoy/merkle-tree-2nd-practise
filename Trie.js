/**
 * Seminar 2.5 Simple Trie
 */


class TrieNode {
    constructor(key) {
        this.key = key;
        this.children = {};
        this.isWord = false;
    }
}


class Trie {
    constructor() {
        this.root = new TrieNode(null);
    }

    insert(word) {
        let current = this.root;
        for (let i = 0; i < word.length; i++) {
            const char = word[i];
            if (!(char in current.children)) {
                current.children[char] = new TrieNode(char);
            }
            current = current.children[char];
        }
        current.isWord = true;
    }

    hasNode(word){
        let current = this.root;
        for (let i = 0; i < word.length; i++) {
            const char = word[i];
            if (!(char in current.children)) {
                return false;
            }
            current = current.children[char];
        }
        return current.isWord === true;
    }

    getAllNodes(){
        let allNodes = [];
        let stack = [this.root];
        while (stack.length > 0){
            const node = stack.pop();
            allNodes.push(node);
            for (const child in node.children){
                stack.push(child);
            }
        }
        return allNodes;
    }
}

module.exports = { Trie };
