const pro = new Promise((resolve, reject) => {
  resolve(2);
});

pro
  .then((n) => {
    console.log(`n`, n * 2);
    //throw Error("wrong");  // 에러 발생시키기
    return n * 2;
  })
  .then((other) => console.log(`other`, other * 3))
  .catch((error) => console.log(error));
// 앞의 .then으로 부터 값을 이어 받아 쓴다
