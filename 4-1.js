const emails = [
  "nico@no.com",
  "naver@google.com",
  "lynn@gmail.com",
  "nico@nomad.com",
  "nico@gmail.com",
];

const foundIndex = emails.findIndex((item) => item.includes("@google.com")); // findIndex는 해당 아이템에서 true가 반환되면 찾기 멈추고 배열 위치를 변수에 저장, 없으면 -1 반환
console.log(`foundIndex`, foundIndex);

const fillMail = emails.fill("바뀜", 1, 3); // 첫번째 인자는 바뀌는 값이고 두번쨰는 시작점 세번쨰는 끝날점이다. 배열 2번째부터 4번째까지 바뀜, 첫번째 인자만 쓰면 전부다 바뀜
console.log(fillMail);

const includeMail = emails.includes("nico@no.com"); // 해당 배열에 일치하면 true
console.log(includeMail);
