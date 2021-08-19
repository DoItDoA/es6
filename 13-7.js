const fruits = ["apple", "strawberry", "avocado"];

const sortFruitByLength = (A, B) => {
  console.log(A, B);

  return A.length - B.length;
}; // A와 B를 비교 했을 때 A가 B보다 크면 A를 B보다 높은 색인(index)으로 정한다

console.log(fruits.sort(sortFruitByLength));
