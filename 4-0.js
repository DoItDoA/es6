const friends = Array.of("nico", "lynn", "min"); // 안에 입력된 값을을 배열로 바꿔준다
console.log(friends);

const buttons = document.getElementsByClassName("btn");
console.log(buttons); // array like object가 나온다 배열이긴한데 객체같은 배열이다
const array = Array.from(buttons); // array like object를 array로 바꿔준다
console.log(array);
