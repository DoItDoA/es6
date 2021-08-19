const pro1 = new Promise((resolve) => {
  setTimeout(resolve, 4000, "first");
});
const pro2 = new Promise((resolve, reject) => {
  setTimeout(reject, 2000, "second");
});
const pro3 = new Promise((resolve) => {
  setTimeout(resolve, 500, "third");
});

const allPromise = Promise.allSettled([pro1, pro2, pro3]); // promise.all과 달리 실행 되는 거는 되는대로 오류는 오류대로 출력한다

allPromise
  .then((values) => console.log(values))
  .catch((error) => console.log(error));
