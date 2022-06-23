const me = "name";
//me = "other"; 다른 값으로 덮어 씌우는거 불가능하다

const person = {
  name: "Nicolas",
};
person.name = "pedro"; // obj내용을 바꿀시 변경된다
console.log(person.name);
