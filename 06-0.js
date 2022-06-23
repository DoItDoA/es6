/* spread */

const n = [1, 2, 3, 4];
const str = ["a", "b", "c"];

//n과 str 합쳐서 하나의 배열 만들기
console.log(n + str);
console.log([n, str]);
console.log([...n, ...str]); // ...은 배열을 풀어헤친다(spread 방식)

const hello = {
  name: "nico",
  age: 24,
};
const bye = {
  new: "ha",
  old: "sa",
};
console.log({ ...hello, ...bye }); // obj도 풀어서 합칠 수 있다
