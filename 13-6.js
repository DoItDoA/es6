const array = [1, [2], [[8], [8], [[[8], [8], [[6], [5], [3]]]]]];

console.log(array.flat(0)); //0은 배열 그대로이고 숫자가 커질수록 배열의 차원이 한단계씩 낮아진다
console.log(array.flat(1));
console.log(array.flat(2));
console.log(array.flat(3));
console.log(array.flat(4));
console.log(array.flat(5));
