const map = new Map();

map.set("age", 19); // Map을 이용하여 set을 쓰면 key와 value을 넣을 수 있다.
console.log(map);
console.log(map.has("age"));
console.log(map.get("age")); // value 호출

map.set("age", 20); // 덮어쓰기
console.log(map);
