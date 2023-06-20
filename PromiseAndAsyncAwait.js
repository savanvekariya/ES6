// Promise and Async Await

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

const createData = (objValue) => {
  return new Promise((resolve, reject) => {
    setTimeout(() => {
      let error = true;
      data.push(objValue);
      if (error) {
        resolve();
      } else {
        reject('Promise rejected');
      }
      getData;
    }, 2000);
  });
};

// Promise

// createData({ name: 'Alice', profession: 'Tester' })
//   .then(getData)
//   .catch((err) => console.log(err));

// Async Await
async function start() {
  await createData({ name: 'Alice', profession: 'Tester' });
  getData();
}
