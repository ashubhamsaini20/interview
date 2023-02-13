
// reverse string
let str = "shubham"

// 1 built-in
let reverseStr = str.split('').reverse().join('')
console.log("1 built-in     >>  ", reverseStr);


// 2 with loop
const reverseStrFunc = (s) => {
    let revStr = ""
    for (let index = s.length - 1; index >= 0; index--) {
        const element = s[index];
        revStr = revStr + element
    }
    return revStr
}
console.log("2 with loop    >>  ", reverseStrFunc(str))

// 3 recursion
const strRecursionFunc = (str) => {
    if (str == "") return ""
    return strRecursionFunc(str.substr(1)) + str[0]
}
console.log("3 recursion    >>  ", strRecursionFunc(str));