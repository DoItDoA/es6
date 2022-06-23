const CC_NUMBER = "6060";

const displayNumber = `${"*".repeat(10)}${CC_NUMBER}`; // .repeat는 해당 문자열 반복

console.log(displayNumber);

const name = "Mr.Nico";

console.log(name.startsWith("Mr")); // 대소문자 구분하여 해당 문자가 첫번째로 시작시 true 반환
console.log(name.endsWith("nico")); // 대소문자 구분하여 해당 문자가 끝에 존재시 true 반환
