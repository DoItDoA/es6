const emails = [
  "nico@no.com",
  "naver@google.com",
  "lynn@gmail.com",
  "nico@nomad.com",
  "nico@gmail.com",
];

const foundMail = emails.find((item) => item.includes("@google.com")); // find는 해당 아이템에서 true가 반환되면 찾기 멈추고 변수에 저장, .include는 ()안 해당되는게 있으면 true 반환
console.log(`foundMail`, foundMail);

const noGmail = emails.filter((item) => !item.includes("@gmail.com")); // filter는 해당 아이템에서 true가 계속 반환되는 것을 배열로 저장, !를 붙이면 해당되는것 제외한 모든것 저장
console.log(`filterGmail`, noGmail);

const arrayMail = [];
emails.forEach((email) => {
  arrayMail.push(email.split("@")[0]); // .split는 해당문자기준으로 나눠서 배열로 바꾼다
}); // forEach는 반복문이다
console.log(`arrayMail`, arrayMail);

const mapMail = emails.map((email) => email.split("@")[0]); // map은 item들을 변형하여 리턴시킨다
console.log(`mapMail`, mapMail);

const objMail = emails.map((email, index) => ({
  name: email.split("@")[0],
  index,
})); // obj를 반환할 시 {return {obj}}를 해야하는데 보기 안좋다. 그래서 ({obj})에서 ()가 리턴 역할 해주기때문에 쓰는게 좋다
console.log(`objMail`, objMail);
