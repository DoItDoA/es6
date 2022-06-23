/* destructing */

const settings = ({ notification, color: { sub } }) => {
  console.log(notification);
  console.log(sub);
}; // 매개변수에 특정 객체만 설정하여 넣을 수 있다. 변수명 유지

settings({
  notification: {
    follow: true,
    alert: true,
    mkt: false,
  },
  color: {
    theme: "blue",
    sub: "red",
  },
});
