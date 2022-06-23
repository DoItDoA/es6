/* rest parameters */

const friends = (one, ...rest) => {
  console.log(`I am ${one}`);
  console.log(rest);
}; // 첫인자는 그대로 쓰이고 나머지는 배열로 저장되어 쓰인다 (rest방식)

friends("nico", "lynn", "dall");
