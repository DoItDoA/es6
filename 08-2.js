const pro = new Promise((resolve, reject) => {
  setTimeout(reject, 3000, "no");
});
pro
  .then((result) => console.log(`result`, result))
  .catch((error) => console.log(`error`, error));
// .then은 무언가가 끝났을 때 거기에 대한 값을 받아온다. 오류일 시 .catch가 받아와서 출력한다
