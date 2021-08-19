const baseObject = {
  username: "nico",
  sayHello: () => {
    console.log("hello~");
  },
};

const nico2 = baseObject;
console.log(nico2.username);
nico2.sayHello();

//-------------------------------------------
class User {
  constructor(name = "nico") {
    this.username = name; // this는 class 가리킴
  } // 생성자
  sayHello() {
    console.log(`hello~ I'm ${this.username}`);
  }
}

const nico = new User("las"); // nico라는 이름의 클래스 생성, 위의 baseObject와의 차이점은 생성자에 값을 넣어서 좀 더 유연하다
console.log(nico.username);
nico.sayHello();
