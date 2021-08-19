const num = 2;

const zeroNum = String(num).padStart(2, "0"); // 해당 문자열이 2자리가 아니면 나머지 앞에서 0으로 채움
console.log(zeroNum);

const numZero = String(num).padEnd(2, "s"); // 해당 문자열이 2자리가 아니면 나머지 뒤에서 s로 채움
console.log(numZero);

const seconds = String(num).padStart(2, "0").padEnd(3, "s");
console.log(seconds);
