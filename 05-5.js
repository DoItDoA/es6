/* swapping, skipping */

let mon = "Sat";
let sat = "Mon";

[sat, mon] = [mon, sat]; // mon의 값이 sat로 sat값이 mon으로 간다
console.log(mon, sat);

[sat, mon] = ["aaa", "bbb"];
console.log(mon, sat);

const days = ["mon", "tue", "wed"];
const [, , a] = days; // wed만 부르고 싶을때 ,사용하여 변수명 생략
console.log(a);
