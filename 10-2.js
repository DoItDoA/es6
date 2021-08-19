class User {
  constructor({ name, lastName, email, password }) {
    this.username = name; // 매개변수가 많아지면 객체이용하여 표현가능
    this.lastName = lastName;
    this.email = email;
    this.password = password;
  } // 생성자
  sayHello() {
    console.log(`hello~ I'm ${this.username}`);
  }
  getProfile() {
    console.log(`${this.lastName} ${this.email} ${this.password}`);
  }
  updatePassword = (newPassword, currentPassword) => {
    if (currentPassword === this.password) {
      this.password = newPassword;
    } else {
      console.log("can't change password.");
    }
  };
}

const nico = new User({
  name: "las",
  lastName: "se",
  email: "shin@nomad.com",
  password: 1234,
}); // 객체로 값 넣기

nico.sayHello();

class Admin extends User {
  constructor({ name, lastName, email, password, superAdmin, isActive }) {
    super({ name, lastName, email, password }); // super없이 그대로 constructor쓰면 덮어쓰기 때문에 super이용하여 부모 constructor에 값을 넣어 이어 받음
    this.superAdmin = superAdmin;
    this.isActive = isActive;
  }
  deleteWebsite() {
    console.log("Deleting");
  }
}

const admin = new Admin({
  name: "las",
  lastName: "se",
  email: "shin@nomad.com",
  password: 1234,
  superAdmin: false,
  isActive: true,
});
console.log(admin.superAdmin);
