/**
 * Seminar 2.1 Blockchain primitive
 */

const SHA256 = require('ethereum-cryptography/sha256').sha256;
const utf8ToBytes = require('ethereum-cryptography/utils').utf8ToBytes;


class Block {
    constructor(data){
        this.data = data;      // Here we simplify data, let it be just a simple string
        this.previousHash = null;
    }

    toHash(){
        const hashBytes = utf8ToBytes(this.data + this.previousHash);
        return SHA256(hashBytes);        // a hash as byte array
    }
}


class Blockchain {
    constructor() {
        
        this.chain = [
             new Block("Genesis block"),
            ];
    }

    addBlock(block){
        const lastBlock = this.chain[this.chain.length - 1];
        block.previousHash = lastBlock.toHash();
        this.chain.push(block)
    }

    isValid(){
        for (let i = 1; i < this.chain.length; i++){
            let current = this.chain[i];
            let previous = this.chain[i - 1];
            if (!current.previousHash || current.previousHash.length !== previous.toHash().length){
                return false;
            }
            for (let j = 0; j < current.previousHash.length - 1; j++){
                if (current.previousHash[j] !== previous.toHash()[j]){
                    return false;
                }
            }
        }
        return true;
    }
}

module.exports = { Block, Blockchain };
