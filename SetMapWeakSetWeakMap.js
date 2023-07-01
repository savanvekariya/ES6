//set - It stores the unique value

const arr1 = [1, 2, 4, 5, 6, 3, 4, 5]
const set1 = new Set(arr1)

set1.add(9)
set1.delete(2)
set1.clear()
set1.has(3)
set1.forEach(element => console.log(element))

// Map - store data in the form of key value pair

const map1 = new Map([["a1", "Ajay"], ["a2", "Vikas"]])

map1.set("a2", "Priyanka") // updates new value
map1.delete("a1")
map1.forEach((value, key) => console.log(key, value))
