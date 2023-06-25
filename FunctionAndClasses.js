function Person(firstName, lastName, dob) {
    this.firstName = firstName
    this.lastName = lastName
    this.dob = new Date(dob)
}

Person.prototype.getBirthYear = function () {
    return this.dob.getBirthYear()
}

Person.prototype.getFullName = function () {
    return `${this.firstName} ${this.lastName}`
}

const person1 = new Person("John", "Doe", "01-12-1978")
person1.getBirthYear()
person1.getFullName()


//Classes

class Person {
    constructor(firstName, lastName, dob) {
        this.firstName = firstName
        this.lastName = lastName
        this.dob = new Date(dob)
    }

    getBirthYear() {
        return this.dob.getFullYear()
    }

    getFullName() {
        return `${this.firstName} ${tis.lastName}`
    }
}

const person2 = new Person("Jane", "Zimmermann", "21-02-1989")
person2.getBirthYear()
person2.getFullName()