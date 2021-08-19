const p = new Promise((resolve, reject) => {
  setTimeout(() => {
    resolve("yes"); // resolve는 성공한 결과값을 나타낸다. reject는 실패한 결과를 나타낸다(에러)
  }, 3000); // 통신하는데 3초 걸린다고 가정
}); // Promise는 비동기 작업이 맞이할 완료 또는 실패의 결과 값을 나타낸다

setInterval(console.log, 1000, p); // 세번째 인자는 첫번째 인자에 들어갈 매개변수이다. setTimeout도 똑같이 구성가능

// 결과 Promise {<pending>} 은 이 Promise가 끝나기를 기다리고 있다는 뜻이다. resolve를 실행해야한다
