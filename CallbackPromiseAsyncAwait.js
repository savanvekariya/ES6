//Callback

// function getData(callback) {
//   setTimeout(() => {
//     let someData = "This is some data.";
//     callback(someData);
//   }, 3000);
// }

// getData((data) => {
//   console.log("I am callback function. " + data);
// });

// Promise
async function getData() {
  return new Promise((resolve, reject) => {
    setTimeout(() => {
      let someData = "some data";
      resolve(someData);
    }, 2000);
  });
}

getData()
  .then((data) => {
    console.log(data);
  })
  .catch((err) => {
    console.log(err);
  });

//   Promise has 3 states:
//     1. fullfilled
//     2. rejected
//     3. Pending

//Async await

async function printData() {
  let data = await getData();
  console.log(data);
}

printData();

const urls = [
  "https://jsonplaceholder.typicode.com/todos/1",
  "https://jsonplaceholder.typicode.com/todos/3",
  "https://jsonplaceholder.typicode.com/todos/2",
];

const fetchPromise = urls.map((url) => {
  return fetch(url).then((res) => res.json());
});

Promise.all(fetchPromise)
  .then((result) => {
    console.log(result);
  })
  .catch((err) => {
    console.log(err);
  });

Promise.allSettled(fetchPromise)
  .then((result) => {
    console.log(result);
  })
  .catch((err) => {
    console.log(err);
  });

Promise.race(fetchPromise)
  .then((result) => {
    console.log(result);
  })
  .catch((err) => {
    console.log(err);
  });

Promise.any(fetchPromise)
  .then((result) => {
    console.log(result);
  })
  .catch((err) => {
    console.log(err);
  });
