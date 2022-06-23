const body = document.querySelector("body");

const friends = ["me", "lynn", "dal", "mark"];

console.log(friends.join(""));
const list = `
  <h1>People I love</h1>
  <ul>
    ${friends.map((friend) => `<li>${friend}</li>`).join("")} 
  </ul>
`; // ``은 배열의 ,까지 출력시키는데 .join은 배열의 각 요소를 구분할 문자열을 지정하고 문자열로 반환한다. ()이면 ,그대로이고 ("")이면 요소간의 간격이 없어진다

body.innerHTML = list;
