// Make function which will return promise which will resolve
// in passed to function amount of milliseconds.
function delay(ms) {
  return new Promise((resolve, reject) => {
    setTimeout(() => resolve('Resolved promise'), ms);
  });
}
delay(3000).then(result => console.log(result));

// Using fakeAjax do 3 parallel requests.
const fakeAjax = async () => {
  if (Math.random() > 0.5) {
    return { status: 200 };
  }
  throw new Error('Server error!');
};
async function parallelRequests() {
  const result = await Promise.all([
    fakeAjax(),
    fakeAjax(),
    fakeAjax()
  ]);
  return result;
}
parallelRequests()
  .then(result => console.log(result))
  .catch(error => console.log(error.message));

// Catch errors but only for failed executions.
async function parallelRequests2() {
  const result = await Promise.all([
    fakeAjax().catch(error => {
      return console.log(error.message);
    }),
    fakeAjax().catch(error => {
      return console.log(error.message);
    }),
    fakeAjax().catch(error => {
      return console.log(error.message);
    })
  ]);
  return result;
}
parallelRequests2()
  .then(result => console.log(result));

// Call `fakeAjax` do 3 request in serial
async function serialRequests() {
  await fakeAjax()
    .then(result => console.log(result))
    .catch(error => {
      console.log(error.message);
    });
  await fakeAjax()
    .then(result => console.log(result))
    .catch(error => {
      console.log(error.message);
    });
  await fakeAjax()
    .then(result => console.log(result))
    .catch(error => {
      console.log(error.message);
    });
}
serialRequests();

// Using your `delay` function from first task add delay between each serial request.
async function delayedSerialRequests() {
  await delay(3000);
  await fakeAjax()
    .then(result => console.log(result))
    .catch(error => {
      console.log(error.message);
    });
  await delay(3000);
  await fakeAjax()
    .then(result => console.log(result))
    .catch(error => {
      console.log(error.message);
    });
  await delay(3000);
  await fakeAjax()
    .then(result => console.log(result))
    .catch(error => {
      console.log(error.message);
    });
}
delayedSerialRequests();
