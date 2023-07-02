// Currying in JavaScript is a process that allows you to transform a function with multiple arguments into a sequence of nesting functions.

//Example 1
function addValues(a) {
    return function (b) {
        return function (c) {
            return a + b + c
        }
    }
}

console.log(addValues(1)(2)(3))

//Example 2
personObj = {
    name: 'Bob',
    age: 30
}

function getDetails(obj) {
    return function (key) {
        return obj[key]
    }
}

console.log(getDetails(personObj)('name'))