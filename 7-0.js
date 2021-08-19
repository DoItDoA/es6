const friends = ["nico", "lynn", "ha", "hu"];

const add = (current, index, array) => console.log(current, index, array); // 첫번째 매개변수는 각 배열내용, 두번째는 순서번호, 세번째는 배열자체

friends.forEach(add);

for (const friend of friends) {
  if (friend === "ha") {
    break;
  } else if (friend === "lynn") {
    continue;
  } else {
    console.log(friend);
  }
} // for of 방식은 중간에 break와 continue등을 쓸 수 있다. forEach는 불가

for (const letter of "hello") {
  console.log(letter);
} // 문자열을 각 문자로 출력이 가능하다. forEach는 안됨
