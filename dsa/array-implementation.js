
// array implementation

class MyArray {
    constructor() {
        this.length = 0
        this.data = {}
    }
    length() {
        return this.length
    }
    push(elem) {
        this.data[this.length] = elem
        this.length++
    }
    pop() {
        delete this.data[this.length]
        this.length--
    }
}

const array = new MyArray()
console.log(array);
array.push(1)
console.log(array);
array.push(1)
console.log(array);
array.pop(1)
console.log(array);
// console.log(array.length)