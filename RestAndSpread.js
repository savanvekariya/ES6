//Rest

function addNumber(a, b, c, ...others) {
  console.log(others);
  return a + b + c;
}

const sum = addNumber(1, 2, 3, 4, 5, 6);

//spread

const names = ['John', 'Bob', 'Martin'];

function printName(name1, name2, name3) {
  console.log(name1, name2, name3);
}

printName(...names);
