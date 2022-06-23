/* destructing */

const days = ["mon", "tue", "wed"];

const [a, b, c, d = "aaa"] = days; // 각 순서에 맞춰 배열이름 정함
console.log(a, b, c, d);
