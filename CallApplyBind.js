const person1 = {
    name: "Bob",
    age: 26,
    showDetails: function (city) {
        console.log(this.name + " " + city)
    }
}

const person2 = {
    name: "Martin",
    age: 30
}

person1.showDetails.call(person2, "Toronto")


// Diffrent way

const student1 = {
    name: "Tom",
    age: 20
}

const student2 = {
    name: "Jerry",
    age: 23
}

function studentDetails(city) {
    console.log(this.name + " " + this.age + " " + city)
}

//call - Invokes the function with provided this value and arguments one by one.
studentDetails.call(student1, "Frankfurt")
studentDetails.call(student2, "Berlin")

//Apply - Invokes the function with given this value and arguments as array.
studentDetails.apply(student1, ["Frankfurt"])

//Bind - Returns the function with the given this value and arguments.
const resultFunc = studentDetails.bind(student1)
resultFunc("Frankfurt") //Frankfurt
const resultFunc2 = studentDetails.bind(student1, "Munich")
resultFunc2("Frankfurt") //Munich