const lastName = prompt("Last name");

const user = {
  username: "nico",
  ...(lastName !== "" && { lastName }),
}; // lastName 값이 있을 경우 축약된 lastName에 값이 들어가고 ...풀어지고 user의 값이 된다. 값이 없다면 빈값이 풀어지고(변화없음) user의 값이 되지만 없어서 username만 남는다
console.log(user);
