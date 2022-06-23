const use = (element) => console.log(`element`, element);

use`border:1px solid;color:blue`; // ()대신 ``을 인자로 넣어서 한 배열로 만들어준다

const use2 = (element) => {
  console.log(`e`, element);
  return (args) => {
    console.log(`args`, args);
  };
};

use2("h1")`border: 1px solid;color: blue;`; // ()와 ``를 같이 쓸 경우 함수를 2번 호출하는 것이라 리턴시 함수를 하나 더 넣는다

const styled = (element) => {
  const el = document.createElement(element);
  return (args) => {
    const styles = args[0];
    el.style = styles;
    return el;
  };
};

const title = styled("h1")`
  background-color: red;
  color: blue;
`;

const subtitle = styled("span")`
  color: green;
  font-size: 30px;
`;
title.innerText = "title";
subtitle.innerText = "subtitle";

document.body.append(title, subtitle); // 한꺼번에 붙이기
