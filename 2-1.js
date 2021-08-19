const button = document.querySelector("button");

button.addEventListener("click", function () {
  console.log(this); // 일반함수 안세서 this는 HTML button을 가리킨다
});

button.addEventListener("click", () => {
  console.log(this); // 화살함수 안에서 this는 window를 가리킨다
});
