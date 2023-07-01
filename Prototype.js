// Prototypes are the mechnism in by which javascript objects inherits features from one another.

const obj1 = {
    name: "John",
    getName: function () {
        console.log(this.name)
    }
}

const obj2 = {
    roll: 12,
    __proto__: obj1
}

console.log(obj2.getName()) //John

const arr1 = ['Martin']

Array.prototype.show = function () {
    return this
}

arr1.show() // ['Martin']

Array.prototype.convertArrayToObject = function () {
    let obj = {}
    this.forEach(element => obj[element] = element)
    return obj
}

arr1.convertArrayToObject() // { Martin: 'Martin'}