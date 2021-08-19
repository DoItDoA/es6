/* destructing */

const settings = {
  notification: {
    follow: true,
    alerts: true,
    unfollow: false,
  },
  color: {
    theme: "dark",
  },
};

const {
  notification: { follow },
} = settings; // setting.notification.follow에 접근
console.log(follow);

const {
  notification: { hello = false },
} = settings; // hello는 객체에 없어서 디폴트값 false주고 선언
console.log(hello);

const { notification2: { you = false } = "wa" } = settings; // 없는 객체 안에 새로운 객체 선언시 따로 아무거나 디폴트 주고 선언한다
console.log(you);
