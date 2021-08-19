const person = {
  name: "nico",
  age: 12,
};

console.log(Object.keys(person)); // key값만 배열에 저장
console.log(Object.values(person)); // value값만 배열에 저장
console.log(Object.entries(person)); // key와 value를 따로 배열에 저장
console.log(
  Object.fromEntries([
    ["name", "nico"],
    ["age", 12],
  ])
); // 배열을 객체로 변환
