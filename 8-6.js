const pro = new Promise((resolve, reject) => {
  setTimeout(reject, 1000, "no");
});
pro
  .then((result) => console.log(`result`, result))
  .catch((error) => console.log(`error`, error))
  .finally(() => console.log("end")); // .finally는 결과 성공/오류에 관계없이 끝나고 무조건 출력
