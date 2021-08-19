class User {
  constructor(name = "nico", lastName, email, password) {
    this.username = name; // this는 class 가리킴
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

const nico = new User("las", "se", "shin@nomad.com", 1234);

class Admin extends User {
  deleteWebsite() {
    console.log("Deleting");
  }
} // User를 상속

const admin = new Admin("first", "last", "shin@naver.com", 1111);
console.log(admin.username); // 상속된 변수와 함수 사용가능
admin.deleteWebsite();
admin.sayHello();
admin.getProfile();
admin.updatePassword(1111, 1234);
