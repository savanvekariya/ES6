// Online Javascript Editor for free
// Write, Edit and Run your Javascript code using JS Online Compiler

const companies = [
    { name: "Google", catagory: "Product base", established: 1981 },
    { name: "Apple", catagory: "Product base", established: 1878 },
    { name: "Microsoft", catagory: "Product base", established: 1984 },
    { name: "TCS", catagory: "Service base", established: 1991 },
    { name: "Accenture", catagory: "Service base", established: 1994 },

]

const numArr = [2, 81, 4, 3, 76, 78, 7, 13, 92, 3, 4, 5, 6, 5, 4, 32, 43, 4, 2, 3, 14, 5, 43, 78, 76, 54, 3, 45, 65]

//forEach

companies.forEach((company, index) => console.log(company.name, index))

//filter

const filteredResult = companies.filter((companies) => companies.catagory === "Product base")

//map

const mapArr = companies.map((company, index) => console.log(company.name, index))

//reduce

const sum = numArr.reduce((total, value) => total + value, 0)
console.log(sum)