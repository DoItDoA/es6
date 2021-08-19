const pro1 = new Promise((resolve) => {
  setTimeout(resolve, 4000, "first");
});
const pro2 = new Promise((resolve, reject) => {
  setTimeout(resolve, 2000, "second");
});
const pro3 = new Promise((resolve) => {
  setTimeout(resolve, 500, "third");
});

const allPromise = Promise.all([pro1, pro2, pro3]); // promise중 제일 늦게 끝나는 시점으로 입력된 배열순으로 결과를 저장한다. 만약 에러가 발생하면 발생시점으로 끝낸다

allPromise
  .then((values) => console.log(values))
  .catch((error) => console.log(error));
