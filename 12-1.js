/* proxy */

const user = {
  username: "nico",
  age: 12,
  password: 1234,
};

const userFilter = {
  get: (target, prop, receiver) => {
    return prop === "password" ? `${"*".repeat(4)}` : target[prop];
  }, // target은 객체 user자체를 가리키고, prop은 호출된 키를 가리킨다, receiver는 proxy자체와 프록시를 상속받는 user를 가리킨다

  set: () => {
    console.log("who");
  },

  deleteProperty: (target, prop) => {
    if (prop === "age") {
      target[prop] = "DELETED";
    }
  },
}; // get, set 같은 것을 Proxy에서 trap이라고 부른단

const filteredUser = new Proxy(user, userFilter); // Proxy를 거쳐서 user를 호출시(filteredUser) userFilter가 미들웨어 역할을 한다

console.log(filteredUser.username); // 값을 불러올 때 get을 거쳐서 출력된다
console.log(filteredUser.password); // proxy를 통해 걸러짐
console.log((filteredUser.username = "aa")); // 값을 수정하거나 추가할 때 set을 거쳐서 출력된다
delete filteredUser.age; // deleteProperty를 거쳐서 value가 DELETED가 됨
console.log(filteredUser);
