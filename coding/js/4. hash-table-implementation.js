

class HashTable {
    constructor(len) {
        this.data = new Array(len)
    }

    _hash(key) {
        let hash = 0
        key.map(char => {
            hash = char.charCodeAt()
            console.log(hash);
        })
    }
}

const myObj = new HashTable(10);
console.log(myObj);