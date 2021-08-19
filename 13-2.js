/* optional chaining */
const users = [
  {
    name: "nico",
    // profile: {
    //   email: "@naver.com",
    // },
  },
  //   {
  //     name: "lynn",
  //     profile: {
  //       email: "@google.com",
  //     },
  //   },
];

console.log(users[0].profile?.email); // 해당 값이 존재하면 그대로 출력, 없으면 undefinded로 출력
console.log(users?.[1]);
