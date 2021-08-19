const body = document.querySelector("body");

const addWelcome = () => {
  const div = `
    <div class="hello">
        <h1 class="title">Hello</h1>
    </div>
    `; // 함수를 쓰지 않고 백틱만으로도 html 구성이 가능하다. 엔터친 것까지 고려해준다
  body.innerHTML = div; // .innerHTML은 텍스트만 가져오는 .innerTEXT와 달리 html요소까지 가져온다
};
setTimeout(addWelcome, 1000);
