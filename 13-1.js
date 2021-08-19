/* && || ?? operator */

console.log(true && "hello"); // hello
console.log("bye" && "hello"); // hello
console.log(1 && "hello"); // hello

console.log(false && "hello"); // false
console.log(null && "hello"); // null
console.log(undefined && "hello"); // undefined
console.log("" && "hello"); // ''
console.log(0 && "hello"); // 0

// &&은 왼쪽 값이 있거나 true면  && 오른쪽 실행, 없으면 왼쪽 실행
console.log(`----------------------------`);
console.log(true || "hello"); // true
console.log("bye" || "hello"); // bye
console.log(1 || "hello"); // 1

console.log(false || "hello"); // hello
console.log(null || "hello"); // hello
console.log(undefined || "hello"); // hello
console.log("" || "hello"); // hello
console.log(0 || "hello"); // hello
// ||은 왼쪽 값이 없거나 false면  || 오른쪽 실행, 있으면 왼쪽 실행
console.log(`----------------------------`);
console.log(true ?? "hello"); // true
console.log("bye" ?? "hello"); // bye
console.log(1 ?? "hello"); // 1
console.log(false ?? "hello"); // false
console.log("" ?? "hello"); // ""
console.log(0 ?? "hello"); // 0

console.log(null ?? "hello"); // hello
console.log(undefined ?? "hello"); // hello
// ??은 왼쪽 값이 null이거나 undefined면 ?? 오른쪽 실행, 아니면 왼쪽 실행
