/* block scope */

if (true) {
  let hello = "hi"; // let과 const는 여기 블럭{} 안에서만 존재하기 때문에 밖에서 사용 못함
  const hello2 = "hello";
  var hello3 = "안녕"; // var는 hoisting 때문에 블럭 안에서도 사용 가능
}
let hello = "bye"; // 블럭 안과 밖은 별도라 변수명 같아도 문제 없다
const hello2 = "bye bye";
console.log(hello);
console.log(hello2);
console.log(hello3);

let a = "a"; // 블럭 밖에서 let과 const 선언하고 블럭 안에서는 사용 가능
const b = "b";
if (true) {
  let a = "aa"; // 지역변수처럼 내부가 우선순위가 높다
  console.log(a);
  console.log(b);
}

let c;
if (true) {
  c = "lalala"; // 블럭 밖 let에 접근 가능, const는 불가
}
console.log(c);
