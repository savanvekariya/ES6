//Callbacks

let data = [
  { name: 'Bob', profession: 'Software Engineer' },
  { name: 'Martin', profession: 'Software Architect' },
];

const getData = () => {
  setTimeout(() => {
    let output = '';
    data.forEach((value, index) => {
      output += `<li>${value.name}</li>`;
    });
    document.body.innerHTML = output;
  }, 1000);
};

const createData = (data, callback) => {
  setTimeout(() => {
    data.push(data);
    callback();
  }, 2000);
};

createData({ name: 'Alice', profession: 'Tester' }, getData);
