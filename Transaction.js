/**
 * Seminar 2.2 Transaction output
 */

const SHA256 = require('ethereum-cryptography/sha256').sha256;
const utf8ToBytes = require('ethereum-cryptography/utils').utf8ToBytes;


class Transaction {
    constructor(from, to, value) {
        this.from = from;
        this.to = to;
        this.value = value;
        this.spent = false;
        
        let hashBytes = utf8ToBytes(this.from + this.to + this.value);
        this.hash = SHA256(hashBytes);
    }
    spend() {
        if (!this.spent) {
            this.spent = true;
        } else {
            throw new Error('Already spended!');
        }
    }
}

module.exports = { Transaction }
