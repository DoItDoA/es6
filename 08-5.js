const pro1 = new Promise((resolve) => {
  setTimeout(resolve, 4000, "first");
});
const pro2 = new Promise((resolve, reject) => {
  setTimeout(reject, 2000, "second");
});
const pro3 = new Promise((resolve) => {
  setTimeout(resolve, 500, "third");
});

const allPromise = Promise.race([pro1, pro2, pro3]); // promise중 제일 빨리 끝나는 것을 저장한다. 중간에 에러 있어도 무조건 제일 빠른거만 저장

allPromise
  .then((values) => console.log(values))
  .catch((error) => console.log(error));
